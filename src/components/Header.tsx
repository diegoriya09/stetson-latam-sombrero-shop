
import { useState } from 'react';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-stetson-cream sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-western-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-stetson-dark-brown">STETSON</span>
              <span className="text-stetson-gold text-xs font-semibold tracking-wider">LATAM</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-stetson-brown hover:text-stetson-gold transition-colors font-medium">
              Inicio
            </a>
            <a href="#productos" className="text-stetson-brown hover:text-stetson-gold transition-colors font-medium">
              Productos
            </a>
            <a href="#colecciones" className="text-stetson-brown hover:text-stetson-gold transition-colors font-medium">
              Colecciones
            </a>
            <a href="#historia" className="text-stetson-brown hover:text-stetson-gold transition-colors font-medium">
              Historia
            </a>
            <a href="#contacto" className="text-stetson-brown hover:text-stetson-gold transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-stetson-brown hover:text-stetson-gold">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-stetson-brown hover:text-stetson-gold">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-stetson-brown hover:text-stetson-gold relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-stetson-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-stetson-brown"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-stetson-cream bg-white animate-fade-in">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#home" className="text-stetson-brown hover:text-stetson-gold transition-colors font-medium">
                Inicio
              </a>
              <a href="#productos" className="text-stetson-brown hover:text-stetson-gold transition-colors font-medium">
                Productos
              </a>
              <a href="#colecciones" className="text-stetson-brown hover:text-stetson-gold transition-colors font-medium">
                Colecciones
              </a>
              <a href="#historia" className="text-stetson-brown hover:text-stetson-gold transition-colors font-medium">
                Historia
              </a>
              <a href="#contacto" className="text-stetson-brown hover:text-stetson-gold transition-colors font-medium">
                Contacto
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-stetson-cream">
                <Button variant="ghost" size="sm" className="text-stetson-brown">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-stetson-brown">
                  <User className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-stetson-brown relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-stetson-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
