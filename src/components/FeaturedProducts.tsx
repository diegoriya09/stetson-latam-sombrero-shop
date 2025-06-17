
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Cattleman",
    category: "Clásico",
    price: "$299.99",
    originalPrice: "$349.99",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    bestseller: true
  },
  {
    id: 2,
    name: "Open Road",
    category: "Vintage",
    price: "$279.99",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    bestseller: false
  },
  {
    id: 3,
    name: "Stallion",
    category: "Premium",
    price: "$459.99",
    originalPrice: "$499.99",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 5.0,
    bestseller: true
  },
  {
    id: 4,
    name: "Rancher",
    category: "Trabajo",
    price: "$199.99",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    bestseller: false
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-stetson-cream/30" id="productos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stetson-dark-brown mb-6">
            Productos Destacados
          </h2>
          <p className="text-stetson-brown text-lg max-w-2xl mx-auto">
            Descubre nuestra selección cuidadosamente curada de sombreros Stetson, 
            cada uno representa décadas de maestría artesanal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="card-hover bg-white border-stetson-light-brown/20 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.bestseller && (
                  <div className="absolute top-4 left-4 bg-stetson-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Bestseller
                  </div>
                )}
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Oferta
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-stetson-gold fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm text-stetson-brown ml-1">({product.rating})</span>
                </div>
                
                <span className="text-stetson-gold text-sm font-medium uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-stetson-dark-brown mb-3">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-stetson-brown">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                
                <Button className="w-full btn-stetson bg-stetson-brown hover:bg-stetson-dark-brown group">
                  <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Agregar al Carrito
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-stetson-brown text-stetson-brown hover:bg-stetson-brown hover:text-white transition-all duration-300"
          >
            Ver Toda la Colección
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
