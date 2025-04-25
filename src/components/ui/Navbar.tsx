
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">Портфолио</Link>
        
        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-primary transition-colors font-medium">Главная</Link>
          <Link to="/projects" className="hover:text-primary transition-colors font-medium">Проекты</Link>
          <Link to="/about" className="hover:text-primary transition-colors font-medium">Обо мне</Link>
          <Link to="/contact" className="hover:text-primary transition-colors font-medium">Контакты</Link>
          <Button className="bg-primary hover:bg-primary/90">Связаться</Button>
        </nav>
        
        {/* Мобильная кнопка меню */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white z-50 border-b border-slate-200 animate-fade-in">
          <nav className="flex flex-col py-4 px-4">
            <Link 
              to="/" 
              className="py-3 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/projects" 
              className="py-3 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Проекты
            </Link>
            <Link 
              to="/about" 
              className="py-3 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Обо мне
            </Link>
            <Link 
              to="/contact" 
              className="py-3 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button 
              className="mt-4 bg-primary hover:bg-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Связаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
