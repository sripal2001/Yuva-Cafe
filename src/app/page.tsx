import BuilderSidebar from "@/components/BuilderSidebar";
import LivePreview from "@/components/LivePreview";

export default function BrandBuilderApp() {
  return (
    <div className="h-screen w-screen overflow-hidden flex bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      {/* LEFT PANE: Decision Panel (30%) */}
      <div className="w-full md:w-[35%] lg:w-[30%] h-full border-r border-[var(--text-secondary)]/20 shadow-2xl relative z-20 bg-[var(--bg-secondary)] overflow-y-auto">
        <BuilderSidebar />
      </div>

      {/* RIGHT PANE: Live Website Preview (70%) */}
      <div className="hidden md:block flex-1 h-full relative z-10 bg-[var(--bg-primary)] overflow-hidden">
        <LivePreview />
      </div>

    </div>
  );
}
