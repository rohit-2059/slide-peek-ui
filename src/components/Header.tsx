import { Search, MapPin, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onToggleChat: () => void;
  isChatOpen: boolean;
}

export const Header = ({ onToggleChat, isChatOpen }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-grocery-gray sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-grocery-yellow">blinkit</div>
          </div>

          {/* Delivery Info */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 text-grocery-text">
              <span className="font-semibold">Delivery in 17 minutes</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>New Delhi, Delhi 110001, India</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder='Search "butter"'
              className="pl-10 bg-grocery-light-gray border-grocery-gray"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant={isChatOpen ? "chat" : "ghost"}
              size="icon"
              onClick={onToggleChat}
              className="relative"
            >
              <MessageCircle className="h-5 w-5" />
              {!isChatOpen && (
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></div>
              )}
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" className="hidden md:flex">
              Account
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};