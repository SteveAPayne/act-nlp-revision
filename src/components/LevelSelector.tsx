interface LevelSelectorProps {
  onSelectLevel: (level: string) => void;
}

export default function LevelSelector({ onSelectLevel }: LevelSelectorProps) {
  const levels = ["Practitioner", "Master Practitioner", "Trainer"];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center text-white">
        ACT Exam Prep
      </h1>

      <p className="text-center text-white text-xl opacity-80">
        Learn. Test. Pass.
      </p>

      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onSelectLevel(level)}
          className="bg-[#1F4F82] text-white p-6 rounded-3xl text-xl font-medium hover:bg-[#163B61]"
        >
          {level}
        </button>
      ))}
    </div>
  );
}
