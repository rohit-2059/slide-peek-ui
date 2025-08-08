import { Button } from "@/components/ui/button";

export const DummyChatbot = () => {
  // Example: trigger a demo update to the product grid
  const demoProducts = [
    {
      id: "c1",
      name: "Chat-picked Almond Milk",
      image: "/api/placeholder/200/200",
      price: 99,
      quantity: "1 ltr",
      deliveryTime: "17 MINS",
      offer: "5% OFF",
    },
    {
      id: "c2",
      name: "Chat-picked Oat Drink",
      image: "/api/placeholder/200/200",
      price: 89,
      quantity: "1 ltr",
      deliveryTime: "17 MINS",
    },
  ];

  const pushDemo = () => {
    if (typeof (window as any).updateProducts === "function") {
      (window as any).updateProducts(demoProducts);
    } else {
      // Fallback: dispatch event
      window.dispatchEvent(
        new CustomEvent("products:update", { detail: demoProducts })
      );
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-grocery-light-gray rounded-lg p-3">
        <p className="text-sm text-grocery-text">
          Dummy chatbot placeholder. Paste your chatbot UI here later.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-muted-foreground font-medium">
          Quick demo action:
        </p>
        <Button variant="outline" size="sm" onClick={pushDemo}>
          Replace grid with demo products
        </Button>
      </div>
    </div>
  );
};
