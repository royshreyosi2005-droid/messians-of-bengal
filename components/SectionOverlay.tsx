export default function SectionOverlay() {
  return (
    <>
      {/* Same dark overlay for every section */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/65 to-slate-950/80" />

      {/* Same blue glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[140px]" />
    </>
  );
}