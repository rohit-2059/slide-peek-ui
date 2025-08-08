import { ProductCard } from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Boost Chocolate Milkshake",
    image: "/api/placeholder/200/200",
    price: 35,
    originalPrice: 40,
    quantity: "180 ml",
    deliveryTime: "17 MINS",
    offer: "5% OFF"
  },
  {
    id: "2",
    name: "Mother Dairy Probiotic Tadka Salted Buttermilk",
    image: "/api/placeholder/200/200",
    price: 10,
    quantity: "270 ml",
    deliveryTime: "17 MINS"
  },
  {
    id: "3",
    name: "Mother Dairy Probiotic Premium Unsalted Buttermilk",
    image: "/api/placeholder/200/200",
    price: 20,
    quantity: "425 ml",
    deliveryTime: "17 MINS",
    offer: "5% OFF"
  },
  {
    id: "4",
    name: "Amul Masti Spiced Salted Buttermilk",
    image: "/api/placeholder/200/200",
    price: 15,
    quantity: "200 ml",
    deliveryTime: "17 MINS"
  },
  {
    id: "5",
    name: "Yoga Bar 26 g Protein Milkshake (Double Chocolate)",
    image: "/api/placeholder/200/200",
    price: 135,
    originalPrice: 140,
    quantity: "250 ml",
    deliveryTime: "17 MINS"
  },
  {
    id: "6",
    name: "Amul Masti Spiced Salted Buttermilk",
    image: "/api/placeholder/200/200",
    price: 70,
    quantity: "1 ltr",
    deliveryTime: "17 MINS"
  },
  {
    id: "7",
    name: "Amul Kool Kesar Flavoured Milk",
    image: "/api/placeholder/200/200",
    price: 25,
    quantity: "180 ml",
    deliveryTime: "17 MINS"
  },
  {
    id: "8",
    name: "Amul Unsalted Buttermilk",
    image: "/api/placeholder/200/200",
    price: 15,
    quantity: "440 ml",
    deliveryTime: "17 MINS"
  },
  {
    id: "9",
    name: "Smooth Chocolate Hazelnut Flavoured Milk",
    image: "/api/placeholder/200/200",
    price: 19,
    originalPrice: 20,
    quantity: "150 ml",
    deliveryTime: "17 MINS",
    offer: "5% OFF"
  },
  {
    id: "10",
    name: "Amul Sweet Lassi",
    image: "/api/placeholder/200/200",
    price: 20,
    quantity: "200 ml",
    deliveryTime: "17 MINS"
  },
  {
    id: "11",
    name: "Amul Kool Badam Flavoured Milk",
    image: "/api/placeholder/200/200",
    price: 25,
    quantity: "180 ml",
    deliveryTime: "17 MINS"
  },
  {
    id: "12",
    name: "Sunfeast Dark Fantasy Chocolate Milkshake",
    image: "/api/placeholder/200/200",
    price: 30,
    quantity: "150 ml",
    deliveryTime: "17 MINS"
  }
];

interface ProductGridProps {
  isChatOpen: boolean;
}

export const ProductGrid = ({ isChatOpen }: ProductGridProps) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-grocery-text mb-2">
          Lassi, Shakes & More
        </h2>
      </div>
      
      <div 
        className={`grid gap-4 transition-all duration-300 ${
          isChatOpen 
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
            : "grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        }`}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};