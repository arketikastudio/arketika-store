
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { generateWhatsAppLink } from '@/utils/whatsappUtils.js';

const WhatsAppButton = ({ 
  variant = 'floating', 
  messageType = 'general', 
  data = {},
  className = '',
  children 
}) => {
  const handleClick = () => {
    const link = generateWhatsAppLink(messageType, data);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'floating') {
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 active:scale-95"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-200 active:scale-[0.98] ${className}`}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      {children || 'Contactar por WhatsApp'}
    </Button>
  );
};

export default WhatsAppButton;
