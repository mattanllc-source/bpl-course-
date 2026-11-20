import { AbsoluteFill, Composition, interpolate, useCurrentFrame } from "remotion";

/** Module title card. Model policy for training - not for live lending decisions. */
const TitleCard: React.FC<{ code: string; title: string }> = ({ code, title }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: "#0f1b2d", color: "white", justifyContent: "center", padding: 120, fontFamily: "system-ui" }}>
      <div style={{ opacity, fontSize: 48, color: "#9fb3c8" }}>{code}</div>
      <div style={{ opacity, fontSize: 96, fontWeight: 700 }}>{title}</div>
      <div style={{ opacity, fontSize: 28, marginTop: 40, color: "#f2b880" }}>
        Model policy for training - not for live lending decisions.
      </div>
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => (
  <Composition id="C00-title" component={TitleCard} durationInFrames={90} fps={30} width={1920} height={1080}
    defaultProps={{ code: "C0", title: "Program orientation and the BPL market" }} />
);
