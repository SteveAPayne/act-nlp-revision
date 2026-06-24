import { useEffect, useState } from "react";
import ModeSelector from "./components/ModeSelector";
import LevelSelector from "./components/LevelSelector";
import CategorySelector from "./components/CategorySelector";
import StudyCard from "./components/StudyCard";
import { questions } from "./data/questions";
import QuizCard from "./components/QuizCard";
import actLogo from "./assets/act-logo.png";

function App() {
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [highestQuestionReached, setHighestQuestionReached] = useState(0);
  const [categoryComplete, setCategoryComplete] = useState(false);

  const [showQuizReviewTopics, setShowQuizReviewTopics] = useState(false);
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "",
  );
  const [nameInput, setNameInput] = useState("");
  const [showWelcome, setShowWelcome] = useState(
    !!localStorage.getItem("userName"),
  );

  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (showWelcome) {
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 2700);

      const hideTimer = setTimeout(() => {
        setShowWelcome(false);
        setIsFading(false);
      }, 3200);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [showWelcome]);
  const [quizCorrect, setQuizCorrect] = useState(0);
  const [quizReviewTopics, setQuizReviewTopics] = useState<string[]>([]);
  if (!userName) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-8">
        <h1 className="text-3xl font-bold mb-6">What shall I call you?</h1>

        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Enter your name"
          className="border border-slate-300 rounded-xl px-4 py-3 w-full mb-4"
        />

        <button
          onClick={() => {
            localStorage.setItem("userName", nameInput);
            setUserName(nameInput);
            setShowWelcome(true);
          }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
        >
          Continue
        </button>
      </div>
    );
  }

  if (showWelcome) {
    return (
      <div
        className="max-w-4xl mx-auto mt-10 p-4 min-h-screen flex items-center justify-center"
        style={{
          backgroundColor: "#6B7280",
        }}
      >
        <div
          className={`rounded-3xl p-12 shadow-lg text-center transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundColor: "#F3F0FF",
          }}
        >
          <img src={actLogo} alt="ACT Logo" className="w-40 mx-auto mb-8" />
          <h1 className="text-2xl font-bold mb-3" style={{ color: "#1F4E79" }}>
            Welcome {userName}
          </h1>

          <div className="text-slate-500 text-xl">Let's learn together.</div>

          <div className="text-slate-500 text-base mt-8">
            Preparing your NLP learning experience...
          </div>
        </div>
      </div>
    );
  }

  if (!selectedMode) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <ModeSelector onSelectMode={setSelectedMode} />
      </div>
    );
  }

  if (!selectedLevel) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <button
          onClick={() => setSelectedMode("")}
          className="mb-4 text-white font-medium"
        >
          ← Back
        </button>

        <LevelSelector onSelectLevel={setSelectedLevel} />
      </div>
    );
  }

  if (!selectedCategory) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <button
          onClick={() => setSelectedLevel("")}
          className="mb-4 text-white font-medium"
        >
          ← Back
        </button>

        <CategorySelector onSelectCategory={setSelectedCategory} />
      </div>
    );
  }

  const isQuizMode = selectedMode === "Quiz";

  console.log("MODE:", selectedMode);
  console.log("QUIZ MODE:", isQuizMode);

  const masteryRecords = JSON.parse(
    localStorage.getItem("masteryRecords") || "[]",
  );

  const reviewCardIds: string[] = Array.from(
    new Set(
      masteryRecords
        .filter(
          (record: any) =>
            record.category === selectedCategory &&
            record.response === "review",
        )
        .map((record: any) => String(record.cardId)),
    ),
  );
  console.log("REVIEW CARD IDS", reviewCardIds);

  const matchingQuestions = questions.filter(
    (q) => q.level === selectedLevel && q.category === selectedCategory,
  );

  const matchingQuestion = matchingQuestions[currentQuestionIndex];
  const existingStudyResponse = masteryRecords.find(
    (record: any) =>
      record.mode === "study" && record.cardId === matchingQuestion?.id,
  );

  if (!matchingQuestion) {
    const isMasterPractitionerOnly =
      selectedLevel === "Practitioner" &&
      (selectedCategory === "Meta Programmes" ||
        selectedCategory === "Modelling");

    return (
      <div className="max-w-4xl mx-auto mt-10 p-4">
        {isMasterPractitionerOnly ? (
          <div
            className="rounded-3xl p-8 shadow-lg"
            style={{
              backgroundColor: "#F3F0FF",
            }}
          >
            <h1 className="text-3xl font-bold text-indigo-700 mb-6">
              {selectedCategory} Becomes Available at Master Practitioner Level
            </h1>

            <p className="text-slate-700 mb-6 text-lg leading-relaxed">
              {selectedCategory} is a Master Practitioner topic and is not
              included in the Practitioner syllabus.
            </p>

            <p className="text-slate-700 mb-8">
              Please choose another Practitioner category to continue your
              studies.
            </p>

            <button
              onClick={() => setSelectedCategory("")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
            >
              ← Choose Another Category
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={() => setSelectedCategory("")}
              className="mb-4 text-blue-600"
            >
              ← Back
            </button>

            <h2 className="text-xl font-bold">No questions found yet</h2>
          </>
        )}
      </div>
    );
  }

  if (!selectedLevel) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <button
          onClick={() => setSelectedMode("")}
          className="mb-4 text-white text-xl font-medium"
        >
          ← Back
        </button>

        <LevelSelector onSelectLevel={setSelectedLevel} />
      </div>
    );
  }

  if (!selectedCategory) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <button
          onClick={() => setSelectedLevel("")}
          className="mb-4 text-white text-xl font-bold"
        >
          ← Back
        </button>

        <CategorySelector onSelectCategory={setSelectedCategory} />
      </div>
    );
  }

  console.log("QUESTIONS:", questions);
  console.log("LEVEL:", selectedLevel);
  console.log("CATEGORY:", selectedCategory);

  if (!matchingQuestion) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <button
          onClick={() => setSelectedCategory("")}
          className="mb-4 text-blue-600"
        >
          ← Back
        </button>

        <h2 className="text-xl font-bold">No questions found yet</h2>
      </div>
    );
  }

  const categoryRecords = masteryRecords.filter(
    (record: any) =>
      record.category === selectedCategory && record.mode === "study",
  );

  const earnedPoints = categoryRecords.reduce(
    (sum: number, record: any) => sum + record.points,
    0,
  );

  const possiblePoints = categoryRecords.length * 2;

  const masteryPercentage =
    possiblePoints > 0 ? Math.round((earnedPoints / possiblePoints) * 100) : 0;

  const strongAreas: string[] = categoryRecords
    .filter((record: any) => record.response === "knew_it")
    .map((record: any) => String(record.topic));

  const uniqueStrongAreas: string[] = [...new Set(strongAreas)];

  console.log("CATEGORY RECORDS", categoryRecords);

  const uniqueReviewAreas = Array.from(
    new Set(
      categoryRecords
        .filter(
          (record: any) =>
            record.response === "review" || record.response === "almost",
        )
        .map((record: any) => String(record.topic)),
    ),
  ) as string[];

  console.log("UNIQUE REVIEW AREAS", uniqueReviewAreas);
  const reviewAreaQuestions = questions.filter((q) =>
    uniqueReviewAreas.includes(q.topic),
  );

  if (categoryComplete) {
    if (isQuizMode) {
      return (
        <div
          className="max-w-4xl mx-auto mt-10 p-4 min-h-screen"
          style={{
            backgroundColor: "#6B7280",
          }}
        >
          <div
            className="rounded-3xl p-8 min-h-[520px] shadow-lg"
            style={{
              backgroundColor: "#F3F0FF",
            }}
          >
            <div className="text-sm uppercase tracking-[0.25em] text-slate-500 font-semibold mb-2">
              {selectedCategory}
            </div>

            <h1 className="text-3xl font-bold mb-2">Quiz Complete</h1>

            <div className="text-slate-600 text-lg mb-8">
              {userName}, here's how you did...
            </div>

            <div className="mb-10">
              <div className="text-7xl font-bold text-indigo-600 mb-8">
                {Math.round((quizCorrect / matchingQuestions.length) * 100)}%
              </div>

              <div className="space-y-3 text-xl">
                <div>✓ Correct: {quizCorrect}</div>

                <div>✗ Incorrect: {matchingQuestions.length - quizCorrect}</div>
              </div>

              <div className="mt-6 text-slate-600 text-lg">
                {quizCorrect === matchingQuestions.length
                  ? "Excellent work. You've demonstrated a strong understanding across this category."
                  : quizCorrect >= matchingQuestions.length * 0.75
                    ? "Good work. You're developing a strong understanding of this category."
                    : quizCorrect >= matchingQuestions.length * 0.5
                      ? "A solid start. Review the topics below to strengthen your understanding."
                      : "There's more to learn here. Focus on the review areas below and retake the quiz when you're ready."}
              </div>
              {quizReviewTopics.length > 0 && (
                <div className="mt-10">
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-4">
                    Areas To Review ({quizReviewTopics.length})
                  </div>

                  <button
                    onClick={() =>
                      setShowQuizReviewTopics(!showQuizReviewTopics)
                    }
                    className="text-indigo-600 font-medium mb-4"
                  >
                    {showQuizReviewTopics
                      ? "▲ Hide Review Topics"
                      : "▼ Show Review Topics"}
                  </button>

                  {showQuizReviewTopics && (
                    <div className="space-y-2">
                      {quizReviewTopics.map((topic) => (
                        <div key={topic} className="text-lg">
                          • {topic}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setQuizCorrect(0);
                setQuizReviewTopics([]);
                setCurrentQuestionIndex(0);
                setCategoryComplete(false);
              }}
              className="border border-indigo-300 text-indigo-600 px-6 py-3 rounded-xl mb-4"
            >
              Retake Quiz
            </button>

            <button
              onClick={() => {
                setQuizCorrect(0);
                setQuizReviewTopics([]);
                setCategoryComplete(false);
                setSelectedCategory("");
                setCurrentQuestionIndex(0);
              }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
            >
              Choose Another Category
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <div
          className="rounded-3xl p-8 min-h-[520px] shadow-lg"
          style={{
            backgroundColor: "#F3F0FF",
          }}
        >
          <h1 className="text-3xl font-bold mb-6">
            {selectedCategory} Complete
          </h1>

          <div className="mb-8">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-2">
              Mastery
            </div>

            <div className="text-5xl font-bold mb-8">{masteryPercentage}%</div>

            <div className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-2">
              Strong Areas
            </div>

            <div className="mb-8">
              {uniqueStrongAreas.length > 0 ? (
                uniqueStrongAreas.map((area) => (
                  <div key={area} className="mb-2">
                    ✓ {area}
                  </div>
                ))
              ) : (
                <div>No strong areas identified yet</div>
              )}
            </div>

            <div className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-2">
              Development Areas to Review
            </div>

            <div className="mb-8">
              {uniqueReviewAreas.length > 0 ? (
                uniqueReviewAreas.map((topic) => {
                  const question = reviewAreaQuestions.find(
                    (q) => q.topic === topic,
                  );

                  const ref = question?.manualReferences?.[0];

                  let pageDisplay = "";

                  if (ref?.pages) {
                    const parts = ref.pages.split("-");
                    if (parts.length >= 2) {
                      pageDisplay = `Section ${parts[0]}, Page ${parts[1]}`;
                    }
                  }

                  return (
                    <div key={topic} className="mb-6">
                      <div className="font-medium mb-2">• {topic}</div>

                      {ref && (
                        <div className="ml-4 text-sm text-slate-600">
                          📖 {ref.manual} Manual
                          <br />
                          Section {ref.section}
                          <br />
                          {pageDisplay}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div>No review areas identified</div>
              )}
            </div>

            {uniqueReviewAreas.length > 0 && (
              <div className="mt-4 text-slate-700">
                <div className="font-medium mb-1">Recommended Next Steps</div>

                <div>1. Review the manual section(s) above</div>
                <div>2. Study the topic again</div>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setCategoryComplete(false);
              setSelectedCategory("");
              setCurrentQuestionIndex(0);
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
          >
            Study Another Category
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="max-w-4xl mx-auto mt-10 p-4 min-h-screen"
      style={{
        backgroundColor: "#6B7280",
      }}
    >
      <button
        onClick={() => {
          localStorage.removeItem("masteryRecords");
          setCategoryComplete(false);
          setCurrentQuestionIndex(0);
          setSelectedCategory("");
          setSelectedLevel("");
          setSelectedMode("");
        }}
        className="mb-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
      >
        ↺ Reset Study
      </button>

      {isQuizMode ? (
        <QuizCard
          question={matchingQuestion}
          currentCard={currentQuestionIndex + 1}
          totalCards={matchingQuestions.length}
          onCorrect={() => setQuizCorrect((prev) => prev + 1)}
          onIncorrect={() =>
            setQuizReviewTopics((prev) =>
              prev.includes(matchingQuestion.topic)
                ? prev
                : [...prev, matchingQuestion.topic],
            )
          }
          onNext={() => {
            if (currentQuestionIndex >= matchingQuestions.length - 1) {
              setCategoryComplete(true);
            } else {
              setCurrentQuestionIndex((prev) => prev + 1);
            }
          }}
        />
      ) : (
        <StudyCard
          mode="study"
          question={matchingQuestion}
          currentCard={currentQuestionIndex + 1}
          totalCards={matchingQuestions.length}
          existingStudyResponse={existingStudyResponse}
          isReviewing={currentQuestionIndex < highestQuestionReached}
          canGoForward={currentQuestionIndex < highestQuestionReached}
          onNext={() => {
            if (currentQuestionIndex >= matchingQuestions.length - 1) {
              setCategoryComplete(true);
            } else {
              setCurrentQuestionIndex((prev) => prev + 1);
              setHighestQuestionReached((prev) =>
                Math.max(prev, currentQuestionIndex + 1),
              );
            }
          }}
          onPrevious={() => {
            if (currentQuestionIndex > 0) {
              setCurrentQuestionIndex((prev) => prev - 1);
            }
          }}
          onReviewNext={() => {
            if (currentQuestionIndex < highestQuestionReached) {
              setCurrentQuestionIndex((prev) => prev + 1);
            }
          }}
        />
      )}
    </div>
  );
}

export default App;
