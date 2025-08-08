import { ScrollArea } from "@/components/ui/scroll-area";

const categories = [
  { id: "milk", name: "Milk", icon: "🥛" },
  { id: "bread", name: "Bread & Pav", icon: "🍞" },
  { id: "eggs", name: "Eggs", icon: "🥚" },
  { id: "flakes", name: "Flakes & Kids Cereals", icon: "🥣" },
  { id: "muesli", name: "Muesli & Granola", icon: "🥣" },
  { id: "oats", name: "Oats", icon: "🌾" },
  { id: "paneer", name: "Paneer & Tofu", icon: "🧀" },
];

export const CategorySidebar = () => {
  return (
    <div className="w-48 bg-white border-r border-grocery-gray">
      <ScrollArea className="h-full">
        <div className="p-4">
          <h3 className="font-semibold text-grocery-text mb-4">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex items-center gap-3 w-full p-2 text-left hover:bg-grocery-light-gray rounded-lg transition-colors"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm text-grocery-text">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};