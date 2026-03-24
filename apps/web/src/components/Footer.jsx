
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border/40 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Arketika
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-prose">
              Muebles de diseño Japandi fabricados artesanalmente. Donde la arquitectura se vuelve hogar.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              Contacto
            </span>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <span>contacto@arketika.co</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              Legal
            </span>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer">
                Política de Privacidad
              </p>
              <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer">
                Términos de Servicio
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Arketika. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Diseño y fabricación artesanal en Colombia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
