
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con gradiente y textura */}
      <div className="absolute inset-0 bg-western-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-leather-texture opacity-10"></div>
      
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Contenido */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 animate-fade-in">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block">STETSON</span>
          <span className="block text-stetson-gold text-3xl md:text-4xl lg:text-5xl font-medium tracking-wider">
            LATAM
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-stetson-cream font-light max-w-3xl mx-auto">
          Desde 1865, la tradición americana de los mejores sombreros
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
          Descubre la colección auténtica de sombreros Stetson, donde la herencia se encuentra con la excelencia artesanal
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-stetson text-lg px-10 py-4 bg-stetson-gold hover:bg-stetson-brown border-2 border-stetson-gold hover:border-stetson-brown"
          >
            Explorar Colección
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-stetson-brown transition-all duration-300"
          >
            Nuestra Historia
          </Button>
        </div>
        
        {/* Indicadores de calidad */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-stetson-gold mb-2">150+</div>
            <div className="text-stetson-cream text-sm uppercase tracking-wider">Años de Tradición</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold text-stetson-gold mb-2">100%</div>
            <div className="text-stetson-cream text-sm uppercase tracking-wider">Artesanía Auténtica</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-bold text-stetson-gold mb-2">∞</div>
            <div className="text-stetson-cream text-sm uppercase tracking-wider">Estilo Atemporal</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
