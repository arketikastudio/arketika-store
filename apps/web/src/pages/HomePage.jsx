
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Hammer, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { Button } from '@/components/ui/button.jsx';
import { getFeaturedProducts } from '@/data/products.js';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Helmet>
        <title>Arketika - Muebles de Diseño Japandi Artesanales</title>
        <meta 
          name="description" 
          content="Descubre muebles de diseño Japandi fabricados artesanalmente en Colombia. Roble natural, hierro negro y LED cálido en piezas únicas para tu hogar." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <WhatsAppButton variant="floating" />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600499273056-52b8a9f6859f"
              alt="Interior minimalista con muebles de diseño Japandi en roble natural"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Arquitectura que se vuelve hogar
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
                Muebles de diseño Japandi fabricados artesanalmente. Cada pieza combina la calidez del roble natural con la fortaleza del hierro negro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/catalogo">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-[0.98]"
                  >
                    Explorar catálogo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/bajo-pedido">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-200 active:scale-[0.98]"
                  >
                    Pedido personalizado
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-3xl md:text-4xl font-semibold text-foreground leading-snug mb-4"
                style={{ textWrap: 'balance' }}
              >
                Colección Lumina
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Descubre nuestras piezas destacadas que combinan funcionalidad y estética atemporal
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {featuredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  featured={true}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-16"
            >
              <Link to="/catalogo">
                <Button 
                  size="lg"
                  variant="outline"
                  className="transition-all duration-200 active:scale-[0.98]"
                >
                  Ver catálogo completo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Arketika */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-3xl md:text-4xl font-semibold text-foreground leading-snug mb-4"
                style={{ textWrap: 'balance' }}
              >
                Por qué elegir Arketika
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Diseño único
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada pieza es diseñada con atención al detalle, combinando estética Japandi con funcionalidad moderna
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                  <Hammer className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Fabricación artesanal
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trabajamos con materiales nobles y técnicas tradicionales para garantizar calidad excepcional
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Durabilidad atemporal
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Muebles diseñados para durar generaciones, con acabados resistentes y materiales de primera calidad
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-3xl md:text-4xl font-semibold leading-snug mb-6"
                style={{ textWrap: 'balance' }}
              >
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
                Creamos piezas personalizadas que se adaptan perfectamente a tu espacio y necesidades
              </p>
              <WhatsAppButton
                variant="inline"
                messageType="custom"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Iniciar conversación
              </WhatsAppButton>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
