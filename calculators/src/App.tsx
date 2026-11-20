import { useState } from "react";
import { ltc } from "../../formulas/core";
import { pct } from "../../formulas/shared/round";

/** F-CORE-15 loan-to-cost calculator. Model policy for training - not for live lending decisions. */
export default function App() {
  const [commitment, setCommitment] = useState(340000);
  const [cost, setCost] = useState(400000);
  const result = cost > 0 ? pct(ltc(commitment, cost), 2) : "—";

  return (
    <main>
      <h1>Loan-to-cost (F-CORE-15)</h1>
      <p className="label">Model policy for training - not for live lending decisions.</p>
      <label>
        Total loan commitment (USD)
        <input type="number" min={0} value={commitment} onChange={(e) => setCommitment(Number(e.target.value))} />
      </label>
      <label>
        Total project cost (USD)
        <input type="number" min={0} value={cost} onChange={(e) => setCost(Number(e.target.value))} />
      </label>
      <p>
        LTC: <output aria-label="LTC result">{result}</output>
      </p>
    </main>
  );
}
