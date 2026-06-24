import actLogo from "../assets/act-logo.png";
interface ModeSelectorProps {
  onSelectMode: (mode: string) => void;
}

export default function ModeSelector({ onSelectMode }: ModeSelectorProps) {
  const modes = ["Study", "Quiz", "Mock Exam"];

  return (
    <div className="flex flex-col gap-4">
      <img src={actLogo} alt="ACT Logo" className="w-24 mx-auto mb-2" />
      <h1 className="text-4xl font-bold text-center text-slate-100">
        ACT NLP Exam Prep
      </h1>

      <p className="text-center text-slate-300 text-lg">Learn. Test. Pass.</p>

      {modes.map((mode) => (
        <button
          key={mode}
          onClick={() => onSelectMode(mode)}
          className="bg-[#1F4F82] text-white text-xl font-medium p-5 rounded-xl hover:bg-[#163B61] transition-colors"
        >
          {mode}
        </button>
      ))}
    </div>
  );
}
