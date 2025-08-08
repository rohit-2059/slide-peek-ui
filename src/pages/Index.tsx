import { useState } from "react";
import { Header } from "@/components/Header";
import { CategorySidebar } from "@/components/CategorySidebar";
import { ProductGrid } from "@/components/ProductGrid";
import { ChatSidebar } from "@/components/ChatSidebar";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen bg-grocery-light-gray">
      <Header onToggleChat={handleToggleChat} isChatOpen={isChatOpen} />
      
      <div className="flex">
        <CategorySidebar />
        
        {/* Main Content Area */}
        <main 
          className={`flex-1 transition-all duration-300 ${
            isChatOpen ? "mr-[30%]" : "mr-0"
          }`}
        >
          <ProductGrid isChatOpen={isChatOpen} />
        </main>
      </div>

      {/* Chat Sidebar */}
      <ChatSidebar isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
