
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import SpecificationBadge from '@/components/SpecificationBadge.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const ProductCard = ({ product, index = 0, featured = false }) => {
  const mainImage = product.images[0];
  const displaySpecs = featured ? product.specifications.slice(0, 3) : product.specifications;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden group">
          <img
            src={mainImage.url}
            alt={mainImage.alt}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-tight" style={{ textWrap: 'balance' }}>
            {product.name}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed mt-2">
            {featured ? product.description : product.longDescription}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {displaySpecs.map((spec, idx) => (
              <SpecificationBadge
                key={idx}
                label={spec.label}
                value={spec.value}
              />
            ))}
          </div>

          {!featured && product.features && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">
                Características destacadas
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>

        <CardFooter className="mt-auto">
          <WhatsAppButton
            variant="inline"
            messageType="product"
            data={{ productName: product.name }}
            className="w-full"
          >
            Cotizar esta pieza
          </WhatsAppButton>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
