type BirthdayModalProps = {
  onClose: () => void;
};

export default function BirthdayModal({ onClose }: BirthdayModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
       {/* Close */}
        <button
          onClick={onClose}
           className="absolute right-8 top-8 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-[#07111f]/90 text-xl text-white shadow-[0_0_20px_rgba(34,211,238,0.25)] backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:border-cyan-300 hover:bg-cyan-500/20"
        >
          ✕
        </button>

     <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl border border-sky-500/20 bg-[#07111F]/95 p-10 shadow-2xl animate-[modalOpen_.35s_ease-out]">

        
        
      {/* Header */}
<div className="mx-auto flex w-full justify-center px-20">
  <div className="max-w-4xl text-center">

    <h2 className="text-5xl font-extrabold text-white">
      Messi Birthday Celebration
    </h2>

    <p className="mt-5 text-lg leading-8 text-slate-300">
      Celebrating the greatest footballer of all time with our Messians of
      Bengal family.
    </p>

  </div>
</div>
<div className="h-10"></div>

        {/* Videos */}
       <div className="mt-24 flex flex-col items-center gap-16">

          {/* 2025 */}
          <div className="mx-auto w-[92%] max-w-5xl rounded-3xl border border-sky-500/20 bg-[#0B1A2F]/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_0_35px_rgba(37,99,235,0.18)]">
            <h3 className="mb-8 text-center text-3xl font-bold text-white">
              2025 Birthday Celebration
            </h3>

            <div className="flex justify-center">
              <video
                controls
                className="block w-full max-w-3xl rounded-2xl border border-sky-500/20"
              >
                <source
                  src="/videos/birthday-2025.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

          </div>

          {/* 2026 */}
          <div className="mx-auto mb-12 w-[92%] max-w-5xl rounded-3xl border border-sky-500/20 bg-[#0B1A2F]/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_0_35px_rgba(37,99,235,0.18)]">

            <h3 className="mb-8 text-center text-3xl font-bold text-white">
              2026 Birthday Celebration
            </h3>

            <div className="flex justify-center">
              <video
                controls
                className="block w-full max-w-3xl rounded-2xl border border-sky-500/20"
              >
                <source
                  src="/videos/birthday-2026.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

          </div>
         <div className="h-8"></div>
        </div>

      </div>
    </div>
  );
}