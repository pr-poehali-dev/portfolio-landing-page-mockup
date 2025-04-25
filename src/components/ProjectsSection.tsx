
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Минималистичный сайт для ресторана",
    category: "Веб-дизайн",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3",
    link: "/projects/1",
  },
  {
    id: 2,
    title: "Мобильное приложение для путешествий",
    category: "UI/UX Дизайн",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3",
    link: "/projects/2",
  },
  {
    id: 3,
    title: "Интернет-магазин электроники",
    category: "Веб-разработка",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    link: "/projects/3",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои проекты</h2>
            <p className="text-slate-600 max-w-2xl">
              Подборка моих лучших работ в сфере веб-дизайна и разработки.
              Каждый проект — это уникальное решение поставленных задач.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0">
            Все проекты
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 relative">
                <div className="overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-4">{project.title}</h3>
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-sm font-medium text-slate-800 hover:text-primary"
                  >
                    Подробнее
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
