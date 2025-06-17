
const Heritage = () => {
  return (
    <section className="py-20 bg-white" id="historia">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <span className="text-stetson-gold text-sm font-semibold uppercase tracking-wider mb-4 block">
              Desde 1865
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stetson-dark-brown mb-8">
              Una Herencia de 
              <span className="text-gradient block">Excelencia</span>
            </h2>
            
            <div className="space-y-6 text-stetson-brown text-lg leading-relaxed">
              <p>
                Durante más de 150 años, Stetson ha sido sinónimo de calidad, artesanía y 
                tradición americana. Cada sombrero es una obra maestra creada por artesanos 
                expertos que han perfeccionado su oficio a lo largo de generaciones.
              </p>
              
              <p>
                Desde los vastos ranchos del oeste americano hasta las calles modernas de 
                Latinoamérica, los sombreros Stetson han acompañado a hombres y mujeres que 
                valoran la autenticidad y el estilo atemporal.
              </p>
              
              <p>
                En Stetson Latam, honramos esta tradición llevando la excelencia de Stetson 
                a toda América Latina, manteniendo los más altos estándares de calidad que 
                han hecho famosa a la marca.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-stetson-gold mb-2">1865</div>
                <div className="text-sm text-stetson-brown uppercase tracking-wider">Fundación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-stetson-gold mb-2">100%</div>
                <div className="text-sm text-stetson-brown uppercase tracking-wider">Artesanal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-stetson-gold mb-2">∞</div>
                <div className="text-sm text-stetson-brown uppercase tracking-wider">Calidad</div>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Artesano trabajando sombrero Stetson"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-western-gradient opacity-20 rounded-lg"></div>
              
              {/* Badge flotante */}
              <div className="absolute -bottom-6 -left-6 bg-stetson-gold text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm uppercase tracking-wider">Años de Historia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
