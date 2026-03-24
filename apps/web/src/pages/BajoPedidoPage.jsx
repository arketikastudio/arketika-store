
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Ruler, Palette, Clock, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const BajoPedidoPage = () => {
  const benefits = [
    {
      icon: Ruler,
      title: 'Dimensiones exactas',
      description: 'Cada pieza se fabrica según las medidas específicas de tu espacio, aprovechando cada centímetro disponible.'
    },
    {
      icon: Palette,
      title: 'Personalización total',
      description: 'Elige acabados, materiales y detalles que reflejen tu estilo personal y se integren perfectamente con tu decoración.'
    },
    {
      icon: Sparkles,
      title: 'Diseño exclusivo',
      description: 'Tu mueble será una pieza única, diseñada específicamente para ti, que no encontrarás en ningún otro lugar.'
    },
    {
      icon: CheckCircle2,
      title: 'Calidad garantizada',
      description: 'Supervisamos cada etapa del proceso artesanal para asegurar los más altos estándares de calidad y durabilidad.'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Consulta inicial',
      description: 'Conversamos sobre tus necesidades, espacio disponible y preferencias de diseño. Compartimos ideas y referencias.',
      duration: '1-2 días'
    },
    {
      number: '02',
      title: 'Diseño y cotización',
      description: 'Creamos un diseño personalizado con renders 3D y especificaciones técnicas. Te enviamos una cotización detallada.',
      duration: '3-5 días'
    },
    {
      number: '03',
      title: 'Fabricación artesanal',
      description: 'Una vez aprobado el diseño, nuestros artesanos comienzan la fabricación con materiales de primera calidad.',
      duration: '3-6 semanas'
    },
    {
      number: '04',
      title: 'Entrega e instalación',
      description: 'Coordinamos la entrega y, si es necesario, realizamos la instalación profesional en tu espacio.',
      duration: '1 día'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bajo Pedido - Arketika</title>
        <meta 
          name="description" 
          content="Muebles personalizados fabricados artesanalmente. Diseño exclusivo adaptado a tus necesidades y espacio. Proceso transparente de 4-8 semanas." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <WhatsAppButton variant="floating" />

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Muebles hechos a tu medida
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Transformamos tus ideas en piezas únicas de mobiliario. Cada mueble bajo pedido es fabricado artesanalmente con atención excepcional al detalle.
              </p>
              <WhatsAppButton
                variant="inline"
                messageType="custom"
                className="text-lg px-8 py-6"
              >
                Iniciar cotización
              </WhatsAppButton>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
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
                Ventajas de un pedido personalizado
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Invierte en muebles que se adaptan perfectamente a tu vida y espacio
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl font-semibold">
                          {benefit.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {benefit.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Proceso de fabricación
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Un proceso transparente y colaborativo de principio a fin
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary">
                              {step.number}
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-xl font-semibold">
                              {step.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{step.duration}</span>
                            </div>
                          </div>
                          <CardDescription className="text-base leading-relaxed">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-sm text-muted-foreground mb-6">
                Tiempo total estimado: 4-8 semanas desde la consulta inicial hasta la entrega
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <MessageSquare className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h2 
                className="text-3xl md:text-4xl font-semibold leading-snug mb-6"
                style={{ textWrap: 'balance' }}
              >
                Comienza tu proyecto hoy
              </h2>
              <p className="text-lg text-secondary-foreground/80 leading-relaxed mb-8">
                Cuéntanos sobre tu espacio y tus ideas. Te responderemos en menos de 24 horas con una propuesta inicial sin compromiso.
              </p>
              <WhatsAppButton
                variant="inline"
                messageType="custom"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
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

export default BajoPedidoPage;
