import { useState, useEffect } from "react";
import { Question } from "../data/questions";
import { responsePoints, ResponseType } from "../lib/mastery";
import { feedback } from "../utils/appFeedback";

interface StudyCardProps {
  mode: "study" | "quiz" | "mock";
  question: Question;
  currentCard: number;
  totalCards: number;
  existingStudyResponse?: any;
  isReviewing?: boolean;
  onNext: () => void;
  onPrevious: () => void;
  onReviewNext: () => void;
  canGoForward?: boolean;
  soundEnabled: boolean;
  hapticsEnabled: boolean;
}

export default function StudyCard({
  mode,
  question,
  currentCard,
  totalCards,
  existingStudyResponse,
  isReviewing,
  onNext,
  onPrevious,
  onReviewNext,
  soundEnabled,
  hapticsEnabled,
}: StudyCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const isStudyMode = mode === "study";

  const hasExistingResponse = !!existingStudyResponse;
  const canGoBack = currentCard > 1;
  console.log("currentCard", currentCard, "canGoBack", canGoBack);
  const previousResponse = existingStudyResponse?.response;
  const showReviewScreen = isReviewing && hasExistingResponse;

  const handleResponse = (response: ResponseType) => {
    const record = {
      cardId: question.id,
      category: question.category,
      topic: question.topic,
      mode,
      response,
      points: responsePoints[response],
      timestamp: new Date().toISOString(),
    };
    console.log("SAVING RECORD", question.category, question.topic);

    const existing = JSON.parse(localStorage.getItem("masteryRecords") || "[]");

    existing.push(record);

    localStorage.setItem("masteryRecords", JSON.stringify(existing));
    feedback(soundEnabled, hapticsEnabled);

    onNext();
  };

  useEffect(() => {
    setShowAnswer(false);
    setShowExplanation(false);
  }, [question.id]);
  return (
    <div className="w-full">
      <div className="rounded-3xl p-8 min-h-[520px] shadow-2xl bg-[#F4F1EA] border border-slate-200">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏛️</span>

            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
                {question.category}
              </div>
            </div>
          </div>

          <div className="text-sm text-slate-500 font-medium">
            {currentCard} / {totalCards}
          </div>
        </div>

        {!showAnswer && !showReviewScreen ? (
          <div onClick={() => setShowAnswer(true)} className="cursor-pointer">
            {canGoBack && !showAnswer && (
              <button
                onClick={onPrevious}
                className="mb-6 text-indigo-600 font-medium"
              >
                ← Previous Question
              </button>
            )}
            <div className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-semibold mb-6">
              {question.topic}
            </div>

            <div className="w-32 h-[2px] bg-indigo-400 mb-8"></div>

            <h2 className="text-2xl font-semibold text-slate-900 leading-tight mb-10">
              {question.question}
            </h2>

            <div className="mt-8 text-center text-slate-500 text-sm">
              Tap card to reveal answer
            </div>
          </div>
        ) : (
          <>
            {showReviewScreen && (
              <div className="flex justify-between items-center mb-6">
                {canGoBack ? (
                  <button
                    onClick={onPrevious}
                    className="text-indigo-600 font-medium"
                  >
                    ← Previous
                  </button>
                ) : (
                  <div />
                )}

                <button
                  onClick={onReviewNext}
                  className="text-indigo-600 font-medium"
                >
                  Next →
                </button>
              </div>
            )}

            <div className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-bold mb-4">
              {question.topic}
            </div>

            {showReviewScreen && (
              <>
                <div className="text-sm text-slate-500 font-medium mb-4">
                  Question Review
                </div>

                <p className="text-lg text-slate-900 leading-relaxed mb-8 whitespace-pre-line">
                  {question.question}
                </p>
              </>
            )}

            <div className="w-32 h-[2px] bg-indigo-300 mb-6"></div>

            <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-4">
              Answer
            </div>

            <p className="text-lg text-slate-900 leading-relaxed mb-8 whitespace-pre-line">
              {question.answer}
            </p>

            {false && (
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="text-indigo-600 font-medium mb-4"
              >
                {showExplanation ? "Hide Explanation" : "Show Explanation"}
              </button>
            )}

            {false && showExplanation && (
              <div className="bg-white/50 border border-indigo-100 rounded-2xl p-5 mb-8">
                <div className="text-xs uppercase tracking-[0.15em] text-indigo-600 font-semibold mb-3">
                  Explanation
                </div>

                <div className="text-slate-700">{question.explanation}</div>
              </div>
            )}

            <div className="flex gap-3 mt-8">
              <div className="w-full">
                <div className="text-sm font-semibold text-slate-700 mb-4">
                  {showReviewScreen ? "Original Response" : "How did I do?"}
                </div>

                {showReviewScreen ? (
                  <div className="bg-white border-2 border-indigo-400 rounded-xl p-4">
                    <div className="text-indigo-700 font-semibold">
                      {previousResponse === "knew_it" && "✓ I knew it"}
                      {previousResponse === "almost" && "~ Almost"}
                      {previousResponse === "review" && "✗ I need to review"}
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-3">
                    {!showReviewScreen && (
                      <button
                        onClick={() => handleResponse("knew_it")}
                        className="border-2 border-emerald-500 bg-emerald-100 px-5 py-3 rounded-xl text-left font-semibold"
                      >
                        ✓ I knew it
                      </button>
                    )}

                    {!showReviewScreen && (
                      <button
                        onClick={() => handleResponse("almost")}
                        className="border-2 border-amber-500 bg-amber-100 px-5 py-3 rounded-xl text-left font-semibold"
                      >
                        ~ Almost
                      </button>
                    )}

                    {!showReviewScreen && (
                      <button
                        onClick={() => handleResponse("review")}
                        className="border-2 border-rose-500 bg-rose-100 px-5 py-3 rounded-xl text-left font-semibold"
                      >
                        {isStudyMode ? "✗ I need to review" : "✗ I didn't know"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
