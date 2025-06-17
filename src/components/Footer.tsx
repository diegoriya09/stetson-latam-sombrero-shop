
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stetson-dark-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-western-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl">STETSON</span>
                <span className="text-stetson-gold text-xs font-semibold tracking-wider">LATAM</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              La tradición americana de los mejores sombreros, ahora en Latinoamérica. 
              Calidad, estilo y herencia desde 1865.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-stetson-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-stetson-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-stetson-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-stetson-gold">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Productos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Colecciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Historia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Atención al cliente */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-stetson-gold">Atención al Cliente</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mi Cuenta</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rastrear Pedido</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Guía de Tallas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Devoluciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-stetson-gold">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-stetson-gold" />
                <span className="text-gray-300 text-sm">
                  Ciudad de México, México
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-stetson-gold" />
                <span className="text-gray-300 text-sm">
                  +52 55 1234 5678
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-stetson-gold" />
                <span className="text-gray-300 text-sm">
                  info@stetsonlatam.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Stetson Latam. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
