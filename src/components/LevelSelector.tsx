import { feedback } from "../utils/appFeedback";
interface LevelSelectorProps {
  onSelectLevel: (level: string) => void;
  onBack: () => void;
  soundEnabled: boolean;
  hapticsEnabled: boolean;
}

export default function LevelSelector({
  onSelectLevel,
  onBack,
  soundEnabled,
  hapticsEnabled,
}: LevelSelectorProps) {
  const levels = ["Practitioner", "Master Practitioner", "Trainer"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-4">
      <button
        onClick={onBack}
        className="mt-8 ml-4 mb-6 text-white text-base font-semibold"
      >
        ← Back
      </button>

      <div className="flex flex-col gap-4 max-w-xl mx-auto pt-16">
        <h1 className="text-3xl font-bold text-center text-slate-100">
          Select Level
        </h1>

        <p className="text-center text-slate-300 text-lg">
          Select your study level.
        </p>

        <div className="w-24 h-[2px] bg-indigo-400 mx-auto"></div>

        {levels.map((level) => (
          <button
            key={level}
            onClick={() => {
              feedback(soundEnabled, hapticsEnabled);
              onSelectLevel(level);
            }}
            className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-5 text-white hover:bg-white/20 transition-all hover:scale-[1.02] shadow-2xl text-left"
          >
            <div className="text-xl font-bold mb-2">{level}</div>

            <div className="text-slate-300 text-sm">
              {level === "Practitioner" &&
                "Build strong foundations in NLP principles and techniques."}

              {level === "Master Practitioner" &&
                "Develop advanced NLP skills and deeper behavioural understanding."}

              {level === "Trainer" &&
                "Prepare to teach, demonstrate and certify NLP effectively."}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
