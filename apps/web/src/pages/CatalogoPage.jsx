
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { products } from '@/data/products.js';

const CatalogoPage = () => {
  return (
    <>
      <Helmet>
        <title>Catálogo - Arketika</title>
        <meta 
          name="description" 
          content="Explora nuestra colección completa de muebles Japandi: escritorios con LED, bibliotecas modulares y aparadores minimalistas en roble y hierro." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <WhatsAppButton variant="floating" />

        {/* Hero Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 
                className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Catálogo Lumina
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Descubre nuestra colección de muebles de diseño Japandi. Cada pieza combina materiales nobles con funcionalidad excepcional, creada artesanalmente para transformar tu espacio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Product Images Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {product.images.map((image, imgIndex) => (
                      <div 
                        key={imgIndex}
                        className="relative overflow-hidden rounded-2xl group"
                      >
                        <img
                          src={image.url}
                          alt={image.alt}
                          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                            imgIndex === 0 ? 'h-96' : 'h-64'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>

                  {/* Product Details */}
                  <div className="max-w-4xl">
                    <ProductCard product={product} index={index} featured={false} />
                  </div>

                  {/* Separator */}
                  {index < products.length - 1 && (
                    <div className="mt-24 border-t border-border/40" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-3xl md:text-4xl font-semibold text-foreground leading-snug mb-6"
                style={{ textWrap: 'balance' }}
              >
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Creamos piezas personalizadas adaptadas a tus necesidades específicas
              </p>
              <WhatsAppButton
                variant="inline"
                messageType="custom"
              >
                Solicitar diseño personalizado
              </WhatsAppButton>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CatalogoPage;
