import BuilderSidebar from "@/components/BuilderSidebar";
import LivePreview from "@/components/LivePreview";

export default function BrandBuilderApp() {
  return (
    <div className="h-screen w-screen overflow-hidden flex relative bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      {/* LEFT PANE: Floating Glassmorphic Decision Panel */}
      <div className="absolute left-0 top-0 w-full md:w-[400px] lg:w-[450px] h-full border-r border-[var(--text-secondary)]/10 shadow-[20px_0_50px_rgba(0,0,0,0.3)] z-50 bg-[var(--bg-secondary)]/60 backdrop-blur-3xl overflow-y-auto">
        <BuilderSidebar />
      </div>

      {/* RIGHT PANE: Full-Screen Live Website Preview */}
      <div className="flex-1 h-full relative z-10 bg-[var(--bg-primary)] overflow-hidden">
        <LivePreview />
      </div>

    </div>
  );
}
