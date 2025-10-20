import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <img src={logo} alt="Ваш Пријател" className="h-16 w-16" />
            <p className="text-sm text-muted-foreground">
              Вашиот партнер за сигурна иднина
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Брзи Врски</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">
                  Дома
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  За Нас
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/representatives" className="text-muted-foreground hover:text-primary">
                  Застапници
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
          <h3 className="mb-4 text-sm font-semibold">Контакт</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>048 400 098</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@vashprijatel.mk</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>ул. Кузман Јосифоски Питу бр. 8 Прилеп</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Работно Време</h3>
            <p className="text-sm text-muted-foreground">
              Понеделник - Петок: 08:00 - 16:00
              <br />
              Сабота: 09:00 - 13:00
              <br />
              Недела: Затворено
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.facebook.com/vash.prijatel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="http://www.linkedin.com/company/ваш-пријател-ад-прилеп" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ваш Пријател АД-Осигурување. Сите права задржани.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
