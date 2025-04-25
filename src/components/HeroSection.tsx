
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Привет, я <span className="text-primary">Дизайнер & Разработчик</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
              Создаю красивые и функциональные веб-сайты и приложения с фокусом на пользовательский опыт и современный дизайн.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base">
                Посмотреть работы
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-slate-300 hover:bg-slate-100 px-8 py-6 text-base">
                Обо мне
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square max-w-md relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3"
                alt="Портрет"
                className="rounded-2xl object-cover w-full h-full shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-6 scale-95 translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
