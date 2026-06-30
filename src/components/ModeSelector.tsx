import actLogo from "../assets/act-logo.png";
import { feedback } from "../utils/appFeedback";
interface ModeSelectorProps {
  onSelectMode: (mode: string) => void;
  onOpenSettings: () => void;
  soundEnabled: boolean;
  hapticsEnabled: boolean;
}

export default function ModeSelector({
  onSelectMode,
  onOpenSettings,
  soundEnabled,
  hapticsEnabled,
}: ModeSelectorProps) {
  const modes = ["Study", "Quiz", "Mock Exam"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-4">
      <div className="flex justify-end">
        <button
          className="text-3xl text-white hover:scale-110 transition"
          onClick={onOpenSettings}
        >
          ⚙️
        </button>
      </div>
      <div className="flex flex-col gap-4 max-w-xl mx-auto pt-2">
        <img src={actLogo} alt="ACT Logo" className="w-32 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-center text-slate-100">
          ACT NLP MASTERY
        </h1>

        <p className="text-center text-slate-300 text-lg">
          Learn. Practice. Master.
        </p>

        <div className="w-24 h-[2px] bg-indigo-400 mx-auto"></div>

        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => {
              feedback(soundEnabled, hapticsEnabled);
              onSelectMode(mode);
            }}
            className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-5 text-white hover:bg-white/20 transition-all hover:scale-[1.02] shadow-2xl text-left"
          >
            <div className="text-xl font-bold mb-2">{mode}</div>

            <div className="text-slate-300 text-sm">
              {mode === "Study" &&
                "Learn NLP concepts, principles and models at your own pace."}

              {mode === "Quiz" &&
                "Practise with interactive quizzes and strengthen your understanding."}

              {mode === "Mock Exam" &&
                "Demonstrate your mastery in a realistic certification-style exam."}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
