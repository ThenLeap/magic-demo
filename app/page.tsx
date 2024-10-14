import { OrbitingCirclesDemo } from "@/components/shadcn/OrbitingCirclesDemo";
import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ui/shiny-button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">欢迎来到我的Next.js应用</h1>
      
      <div className="space-y-4">
        <Button variant="default" size="lg">
          默认按钮
        </Button>
        
        <Button variant="destructive" size="lg">
          危险按钮
        </Button>
        
        <Button variant="outline" size="lg">
          轮廓按钮
        </Button>
        
        <Button variant="secondary" size="lg">
          次要按钮
        </Button>
        
        <Button variant="ghost" size="lg">
          幽灵按钮
        </Button>
        
        <Button variant="link" size="lg">
          链接按钮
        </Button>
        
        <ShinyButton>
          闪亮按钮
        </ShinyButton>

        <OrbitingCirclesDemo />
      </div>
    </div>
  );
}
