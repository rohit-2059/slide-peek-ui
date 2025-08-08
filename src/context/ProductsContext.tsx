import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity: string;
  deliveryTime: string;
  offer?: string;
}

// Initial products (moved from ProductGrid)
const initialProducts: Product[] = [
  {
    id: "1",
    name: "Boost Chocolate Milkshake",
    image: "/api/placeholder/200/200",
    price: 35,
    originalPrice: 40,
    quantity: "180 ml",
    deliveryTime: "17 MINS",
    offer: "5% OFF",
  },
  {
    id: "2",
    name: "Mother Dairy Probiotic Tadka Salted Buttermilk",
    image: "/api/placeholder/200/200",
    price: 10,
    quantity: "270 ml",
    deliveryTime: "17 MINS",
  },
  {
    id: "3",
    name: "Mother Dairy Probiotic Premium Unsalted Buttermilk",
    image: "/api/placeholder/200/200",
    price: 20,
    quantity: "425 ml",
    deliveryTime: "17 MINS",
    offer: "5% OFF",
  },
  {
    id: "4",
    name: "Amul Masti Spiced Salted Buttermilk",
    image: "/api/placeholder/200/200",
    price: 15,
    quantity: "200 ml",
    deliveryTime: "17 MINS",
  },
  {
    id: "5",
    name: "Yoga Bar 26 g Protein Milkshake (Double Chocolate)",
    image: "/api/placeholder/200/200",
    price: 135,
    originalPrice: 140,
    quantity: "250 ml",
    deliveryTime: "17 MINS",
  },
  {
    id: "6",
    name: "Amul Masti Spiced Salted Buttermilk",
    image: "/api/placeholder/200/200",
    price: 70,
    quantity: "1 ltr",
    deliveryTime: "17 MINS",
  },
  {
    id: "7",
    name: "Amul Kool Kesar Flavoured Milk",
    image: "/api/placeholder/200/200",
    price: 25,
    quantity: "180 ml",
    deliveryTime: "17 MINS",
  },
  {
    id: "8",
    name: "Amul Unsalted Buttermilk",
    image: "/api/placeholder/200/200",
    price: 15,
    quantity: "440 ml",
    deliveryTime: "17 MINS",
  },
  {
    id: "9",
    name: "Smooth Chocolate Hazelnut Flavoured Milk",
    image: "/api/placeholder/200/200",
    price: 19,
    originalPrice: 20,
    quantity: "150 ml",
    deliveryTime: "17 MINS",
    offer: "5% OFF",
  },
  {
    id: "10",
    name: "Amul Sweet Lassi",
    image: "/api/placeholder/200/200",
    price: 20,
    quantity: "200 ml",
    deliveryTime: "17 MINS",
  },
  {
    id: "11",
    name: "Amul Kool Badam Flavoured Milk",
    image: "/api/placeholder/200/200",
    price: 25,
    quantity: "180 ml",
    deliveryTime: "17 MINS",
  },
  {
    id: "12",
    name: "Sunfeast Dark Fantasy Chocolate Milkshake",
    image: "/api/placeholder/200/200",
    price: 30,
    quantity: "150 ml",
    deliveryTime: "17 MINS",
  },
];

interface ProductsContextValue {
  products: Product[];
  setProducts: (list: Product[]) => void;
}

const ProductsContext = createContext<ProductsContextValue | undefined>(
  undefined
);

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // Bridge for external code (e.g., your chatbot/Product.js)
  useEffect(() => {
    const onUpdate = (e: Event) => {
      const detail = (e as CustomEvent<Product[]>).detail;
      if (Array.isArray(detail)) {
        setProducts(detail);
      }
    };

    window.addEventListener("products:update", onUpdate as EventListener);

    // Expose a helper on window for direct updates
    (window as any).updateProducts = (list: Product[]) => setProducts(list);

    return () => {
      window.removeEventListener(
        "products:update",
        onUpdate as EventListener
      );
      try {
        delete (window as any).updateProducts;
      } catch {}
    };
  }, []);

  const value = useMemo(() => ({ products, setProducts }), [products]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx)
    throw new Error("useProducts must be used within a ProductsProvider");
  return ctx;
};
