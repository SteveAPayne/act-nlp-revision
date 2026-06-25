import actLogo from "../assets/act-logo.png";
interface ModeSelectorProps {
  onSelectMode: (mode: string) => void;
}

export default function ModeSelector({ onSelectMode }: ModeSelectorProps) {
  const modes = ["Study", "Quiz", "Mock Exam"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-4">
      <div className="flex flex-col gap-4 max-w-xl mx-auto pt-10">
        <img src={actLogo} alt="ACT Logo" className="w-32 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-center text-slate-100">
          ACT NLP Revision
        </h1>

        <p className="text-center text-slate-300 text-lg">Learn. Test. Pass.</p>

        <div className="w-24 h-[2px] bg-indigo-400 mx-auto"></div>

        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => onSelectMode(mode)}
            className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-5 text-white hover:bg-white/20 transition-all hover:scale-[1.02] shadow-2xl text-left"
          >
            <div className="text-xl font-bold mb-2">{mode}</div>

            <div className="text-slate-300 text-sm">
              {mode === "Study" &&
                "Review NLP concepts, principles and models at your own pace."}

              {mode === "Quiz" &&
                "Test your knowledge with random questions and reinforce learning."}

              {mode === "Mock Exam" &&
                "Simulate the certification experience under exam conditions."}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
