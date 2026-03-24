
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Button } from '@/components/ui/button.jsx';
import { useToast } from '@/hooks/use-toast.js';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+57 300 123 4567',
      link: 'tel:+573001234567'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contacto@arketika.co',
      link: 'mailto:contacto@arketika.co'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Bogotá, Colombia',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Arketika</title>
        <meta 
          name="description" 
          content="Contáctanos para cotizaciones, consultas o pedidos personalizados. Estamos en Bogotá, Colombia. Respuesta en menos de 24 horas." 
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
              className="max-w-3xl mx-auto text-center"
            >
              <h1 
                className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Hablemos de tu proyecto
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Estamos aquí para ayudarte a crear el espacio que imaginas. Contáctanos y te responderemos en menos de 24 horas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-border/50 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">
                      Envíanos un mensaje
                    </CardTitle>
                    <CardDescription className="text-base">
                      Completa el formulario y nos pondremos en contacto contigo
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Nombre completo
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          className="text-gray-900 placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          className="text-gray-900 placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">
                          Mensaje
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Cuéntanos sobre tu proyecto o consulta..."
                          rows={6}
                          className="text-gray-900 placeholder:text-gray-400 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full transition-all duration-200 active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <>Enviando...</>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Enviar mensaje
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    Información de contacto
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      const content = (
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-200">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">
                              {info.label}
                            </p>
                            <p className="text-base text-foreground">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      );

                      return info.link ? (
                        <a
                          key={index}
                          href={info.link}
                          className="block"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={index}>
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Card className="border-border/50 shadow-sm bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      Preferimos WhatsApp
                    </CardTitle>
                    <CardDescription className="text-base">
                      Para una respuesta más rápida y directa, contáctanos por WhatsApp
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <WhatsAppButton
                      variant="inline"
                      messageType="contact"
                      className="w-full"
                    >
                      Abrir WhatsApp
                    </WhatsAppButton>
                  </CardContent>
                </Card>

                <div className="p-6 rounded-xl bg-muted/30">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Horario de atención
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábados: 10:00 AM - 2:00 PM</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
