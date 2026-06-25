interface CategorySelectorProps {
  onSelectCategory: (category: string) => void;
}

export default function CategorySelector({
  onSelectCategory,
}: CategorySelectorProps) {
  const categories = [
    "Foundations",
    "Core Skills",
    "Language",
    "Values & Beliefs",
    "Submodalities",
    "Meta Programmes",
    "Modelling",
    "Processes",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-4">
      <div className="flex flex-col gap-3 max-w-md mx-auto pt-20">
        <h2 className="text-3xl font-bold text-center text-slate-100">
          Choose Category
        </h2>

        <p className="text-center text-slate-300 text-lg">
          Select the area you'd like to focus on.
        </p>

        <div className="w-24 h-[2px] bg-indigo-400 mx-auto"></div>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              console.log("CATEGORY CLICKED:", category);
              onSelectCategory(category);
            }}
            className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-3 text-white hover:bg-white/25 transition-all hover:scale-[1.02] shadow-2xl text-left"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
