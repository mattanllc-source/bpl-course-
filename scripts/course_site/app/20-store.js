/* ---------- progress store: the viewer's account (db) when granted, this browser otherwise ---------- */
const state = { status: {}, ready: false };
const STATUS_TEXT = { "not-started": "Not started", "in-progress": "In progress", "done": "Done" };
const READ_MS = 5000;
const withTimeout = (p, ms) => new Promise((res, rej) => { const t = setTimeout(() => rej(Object.assign(new Error("timeout"), { code: "timeout" })), ms); Promise.resolve(p).then((v) => { clearTimeout(t); res(v); }, (e) => { clearTimeout(t); rej(e); }); });
let syncText = "";
function setSync(t) {
  if (t === syncText) return;                      // announce only when the message changes
  syncText = t; $("sync").textContent = t; $("sync-top").textContent = t;
}
const LOCAL_OK = "Progress is saved in this browser only.", LOCAL_BAD = "Progress can't be saved in this browser. It will be lost when you close the page.";
const store = {
  db: null, uid: null, mode: "local", chain: Promise.resolve(), readFailed: false,
  localGet(k) { return prefs.get(k); },
  localSet(k, v) {
    const ok = prefs.set(k, v);
    if (!ok && this.mode === "local") setSync(LOCAL_BAD);
    return ok;
  },
  /** One write at a time, in order. Rejects when the write fails, so callers can say "Not saved". */
  write(path, body) {
    const run = this.chain.then(() => this.db.doc(path).set(body));
    this.chain = run.catch(() => {});
    return run.then(() => { if (/^Couldn't save/.test(syncText)) setSync("Progress saved to your account."); },
      (e) => { setSync(`Couldn't save to your account (${e && e.code || "error"}). Your change shows here but may not be kept.`); throw e; });
  },
  async read(path, localKey) {
    if (this.mode !== "db") return this.localGet(localKey);
    try { const s = await withTimeout(this.db.doc(path).get(), READ_MS); return s.exists ? s.data() : null; }
    catch (e) {
      if (!this.readFailed) { this.readFailed = true; toast("Your saved answers are taking too long to load. Showing what this browser has."); }
      setSync("Can't reach your saved work right now. Showing what this browser has.");
      return this.localGet(localKey);
    }
  },
  saveStatus() {
    this.localSet("status", state.status);
    if (this.mode === "db") return this.write(`data/users/${this.uid}/progress`, { status: state.status, updatedAt: new Date().toISOString() }).catch(() => {});
  },
  async loadNote(key) { const v = await this.read(`data/users/${this.uid}/note-${key}`, "note-" + key); return typeof v === "string" ? v : String(v && v.text || ""); },
  saveNote(key, text) {
    const local = this.localSet("note-" + key, { text });
    if (this.mode === "db") return this.write(`data/users/${this.uid}/note-${key}`, { text, updatedAt: new Date().toISOString() });
    return local ? Promise.resolve() : Promise.reject(new Error("storage"));
  },
  async loadQuiz(key) {
    const v = await this.read(`data/users/${this.uid}/quiz-${key}`, "quiz-" + key);
    return { answers: { ...(v && v.answers) }, marks: { ...(v && v.marks) }, practice: { ...(v && v.practice) }, exercises: { ...(v && v.exercises) }, submitted: { ...(v && v.submitted) } };
  },
  saveQuiz(key, qs) {
    const body = { answers: qs.answers, marks: qs.marks, practice: qs.practice, exercises: qs.exercises || {}, submitted: qs.submitted || {} };
    const local = this.localSet("quiz-" + key, body);
    if (this.mode === "db") return this.write(`data/users/${this.uid}/quiz-${key}`, { ...body, updatedAt: new Date().toISOString() }).catch(() => {});
    return local ? Promise.resolve() : Promise.resolve();
  },
};
async function initStore() {
  state.status = store.localGet("status") || {};
  paintProgress();
  const local = () => { setSync(prefs.ok ? LOCAL_OK : LOCAL_BAD); state.ready = true; };
  if (!(window.claude && typeof window.claude.use === "function")) { local(); return; }
  let db = null, user = null, uid = null;
  try {
    [db, user] = await withTimeout(Promise.all([window.claude.use("db").catch(() => null), window.claude.use("user").catch(() => null)]), 8000);
    uid = user ? await withTimeout(user.id(), READ_MS) : null;
  } catch { /* not granted, or the viewer never answered */ }
  if (!db || !uid) { local(); return; }
  store.db = db; store.uid = uid; store.mode = "db";
  const timer = setTimeout(() => setSync("Can't reach your saved progress yet. Showing what this browser has."), 10000);
  try {
    db.doc(`data/users/${uid}/progress`).onSnapshot((snap) => {
      if (!snap.metadata || !snap.metadata.fromCache) { clearTimeout(timer); setSync("Progress saved to your account."); }
      if (snap.exists) state.status = { ...(snap.data().status || {}) };
      state.ready = true; paintProgress();
      if (view === "home") showHome(false);
    }, (e) => { clearTimeout(timer); setSync(`Progress sync stopped (${e && e.code || "error"}). Reload to try again.`); });
  } catch { clearTimeout(timer); store.mode = "local"; local(); }
}
function setStatus(key, s) { state.status = { ...state.status, [key]: s }; paintProgress(); store.saveStatus(); }

/* Position in each module (step, Learn page, steps seen): a per-viewer convenience kept in this browser. */
const pos = prefs.get("pos") || {};
function savePos(key, patch) { pos[key] = { ...(pos[key] || {}), ...patch, t: Date.now() }; prefs.set("pos", pos); }
