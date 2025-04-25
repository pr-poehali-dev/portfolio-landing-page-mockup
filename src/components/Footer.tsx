
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="text-xl font-bold text-primary">Портфолио</Link>
            <p className="mt-4 text-slate-600 max-w-md">
              Создание современных веб-сайтов и приложений с фокусом на уникальный дизайн и отличный пользовательский опыт.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:hello@example.com" className="text-slate-600 hover:text-primary">hello@example.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+79001234567" className="text-slate-600 hover:text-primary">+7 (900) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span className="text-slate-600">Москва, Россия</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ссылки</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-slate-200 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Портфолио. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
