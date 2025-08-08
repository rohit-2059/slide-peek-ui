import { X, Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ReactNode } from "react";

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const ChatSidebar = ({ isOpen, onClose, children }: ChatSidebarProps) => {
  return (
    <div
      className={`fixed right-0 top-0 h-full bg-white border-l border-grocery-gray shadow-lg transition-all duration-300 ease-out z-40 ${
        isOpen ? "w-[30%] translate-x-0" : "w-0 translate-x-full"
      }`}
    >
      {isOpen && (
        <div className="flex flex-col h-full">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-grocery-gray">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-grocery-yellow rounded-full">
                <Bot className="h-5 w-5 text-grocery-text" />
              </div>
              <div>
                <h3 className="font-semibold text-grocery-text">Shopping Assistant</h3>
                <p className="text-xs text-muted-foreground">Online now</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4">
            {typeof children !== "undefined" ? (
              <div className="h-full">{children}</div>
            ) : (
              <div className="space-y-4">
                {/* Welcome Message */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-grocery-light-gray rounded-full">
                    <Bot className="h-4 w-4 text-grocery-text" />
                  </div>
                  <div className="bg-grocery-light-gray rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-grocery-text">
                      Hi! I'm your shopping assistant. I can help you find products, check delivery times, and answer any questions about your order!
                    </p>
                  </div>
                </div>

                {/* Suggested Actions */}
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-medium">Quick Actions:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      "Find organic vegetables",
                      "Check dairy products",
                      "Show breakfast cereals",
                      "Track my order",
                    ].map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="justify-start text-left h-auto p-2 text-xs"
                      >
                        {action}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>

          {/* Chat Input */}
          <div className="p-4 border-t border-grocery-gray">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button variant="chat" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};