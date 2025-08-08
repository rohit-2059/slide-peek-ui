import { ProductCard } from "./ProductCard";
import { useProducts } from "@/context/ProductsContext";

// Products are now managed via ProductsContext.


interface ProductGridProps {
  isChatOpen: boolean;
}

export const ProductGrid = ({ isChatOpen }: ProductGridProps) => {
  const { products } = useProducts();
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
        {products.length === 0 ? (
          <div className="col-span-full text-center text-muted-foreground">
            No products yet.
          </div>
        ) : (
          products.map((product) => <ProductCard key={product.id} {...product} />)
        )}
      </div>
    </div>
  );
};