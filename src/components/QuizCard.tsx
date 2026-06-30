import { useEffect, useState, useMemo } from "react";
import { Question } from "../data/questions";
import { feedback } from "../utils/appFeedback";

interface QuizCardProps {
  question: Question;
  currentCard: number;
  totalCards: number;
  onNext: () => void;
  onCorrect: () => void;
  onIncorrect: () => void;
  soundEnabled: boolean;
  hapticsEnabled: boolean;
}

export default function QuizCard({ question, currentCard, totalCards, onNext, onCorrect, onIncorrect, soundEnabled, hapticsEnabled, }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setAnswered(false);
  }, [question.id]);
  const quizOptions = useMemo(() => {
    if (!question.distractors) return [];

    return [question.answer, ...question.distractors].sort(
      () => Math.random() - 0.5,
    );
  }, [question.id]);

  const isCorrect = selectedAnswer === question.answer;

  return (
    <div className="w-full">
      <div
        className="rounded-3xl p-8 min-h-[520px] shadow-lg"
        style={{
          backgroundColor: "#F3F0FF",
        }}
      >
        {!answered && (
          <>
            <div className="text-sm text-slate-500 mb-4">
              {currentCard} / {totalCards}
            </div>

            <div className="text-sm uppercase tracking-wide text-slate-500 mb-2">
              {question.topic}
            </div>

            <h2 className="text-2xl font-bold mb-8">{question.question}</h2>

            <div className="space-y-3">
              {quizOptions.map((option, index) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedAnswer(option);
                    setAnswered(true);

                    feedback(soundEnabled, hapticsEnabled);

                    if (option === question.answer) {
                      onCorrect();
                    } else {
                      onIncorrect();
                    }
                  }}
                  className="w-full text-left border border-slate-300 rounded-xl p-4"
                >
                  <div className="flex gap-3">
                    <span className="font-semibold">
                      {String.fromCharCode(65 + index)}.
                    </span>

                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {answered && (
          <div className="mt-8">
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold mb-2">
              {question.category}
            </div>

            <div className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-semibold mb-6">
              {question.topic}
            </div>
            <div className="text-xl font-semibold mb-4">
              {isCorrect ? "✓ Correct" : "✗ Incorrect"}
            </div>

            <div className="mb-4 text-slate-700">
              <div className="font-medium mb-1">Correct Answer</div>

              {question.answer}
            </div>

            <button
              onClick={onNext}
              className="bg-indigo-600 text-white px-5 py-3 rounded-xl"
            >
              Next Question →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
