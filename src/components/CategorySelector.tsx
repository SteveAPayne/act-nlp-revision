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
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl font-bold text-center text-white">
        Choose Category
      </h2>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => {
            console.log("CATEGORY CLICKED:", category);
            onSelectCategory(category);
          }}
          className="bg-[#1F4F82] text-white text-xl font-medium p-6 rounded-3xl hover:bg-[#163B61]"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
