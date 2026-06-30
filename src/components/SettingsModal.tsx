import { playClick } from "../utils/audio";
import { triggerHaptic } from "../utils/haptics";
interface SettingsModalProps {
  soundEnabled: boolean;
  setSoundEnabled: (value: boolean) => void;
  hapticsEnabled: boolean;
  setHapticsEnabled: (value: boolean) => void;
  onClose: () => void;
}

export default function SettingsModal({
  soundEnabled,
  setSoundEnabled,
  hapticsEnabled,
  setHapticsEnabled,
  onClose,
}: SettingsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#F4F1EA] rounded-3xl shadow-2xl p-8 w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">App Settings</h2>

        <div className="flex justify-between items-center mb-6">
          <span className="font-medium">Sounds</span>

          <button
            onClick={() => {
              const newValue = !soundEnabled;

              setSoundEnabled(newValue);

              if (newValue) {
                playClick(newValue);
              }
            }}
            className={`w-14 h-8 rounded-full transition-all ${
              soundEnabled ? "bg-indigo-600" : "bg-slate-300"
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                soundEnabled ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="flex justify-between items-center mb-8">
          <span className="font-medium">Haptics</span>

          <button
            onClick={() => {
              const newValue = !hapticsEnabled;

              setHapticsEnabled(newValue);

              if (newValue) {
                triggerHaptic(newValue);
              }
            }}
            className={`w-14 h-8 rounded-full transition-all ${
              hapticsEnabled ? "bg-indigo-600" : "bg-slate-300"
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                hapticsEnabled ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-indigo-600 text-white rounded-xl py-3"
        >
          Close
        </button>
        <div className="mt-6 pt-4 border-t border-slate-300 text-center">
          <div className="text-sm font-semibold text-slate-700">
            ACT NLP MASTERY
          </div>

          <div className="text-xs text-slate-500 mt-1">Version 1.0.1</div>
        </div>
      </div>
    </div>
  );
}
