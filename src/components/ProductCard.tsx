import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity: string;
  deliveryTime: string;
  offer?: string;
}

export const ProductCard = ({
  name,
  image,
  price,
  originalPrice,
  quantity,
  deliveryTime,
  offer,
}: ProductCardProps) => {
  return (
    <Card className="p-3 hover:shadow-md transition-shadow bg-white border border-grocery-gray">
      <div className="space-y-3">
        {/* Delivery Time & Offer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">⏱ {deliveryTime}</span>
          {offer && (
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
              {offer}
            </span>
          )}
        </div>

        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg bg-grocery-light-gray">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-medium text-sm text-grocery-text line-clamp-2 leading-tight">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground">{quantity}</p>
          
          {/* Price & Add Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-grocery-text">₹{price}</span>
              {originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  ₹{originalPrice}
                </span>
              )}
            </div>
            <Button variant="add" size="add">
              ADD
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};