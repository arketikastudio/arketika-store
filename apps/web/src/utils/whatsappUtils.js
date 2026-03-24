/**
 * WhatsApp integration utilities for Arketika
 * Generates WhatsApp message links with pre-filled professional messages
 */

const WHATSAPP_PHONE = '573005379464'; // Colombia phone number format

/**
 * Generate WhatsApp link with pre-filled message
 * @param {string} messageType - Type of message (general, product, custom)
 * @param {object} data - Additional data for message customization
 * @returns {string} WhatsApp URL
 */
export const generateWhatsAppLink = (messageType = 'general', data = {}) => {
  let message = '';

  switch (messageType) {
    case 'product':
      message = `Hola Arketika, me interesa cotizar la pieza: ${data.productName || 'producto del catálogo'}. Me gustaría conocer más detalles sobre disponibilidad, precio y opciones de personalización.`;
      break;
    
    case 'custom':
      message = `Hola Arketika, estoy interesado en realizar un pedido personalizado. Me gustaría discutir mis necesidades específicas y conocer el proceso de fabricación artesanal.`;
      break;
    
    case 'contact':
      message = `Hola Arketika, me gustaría obtener más información sobre sus productos y servicios.`;
      break;
    
    case 'general':
    default:
      message = `Hola Arketika, me gustaría conocer más sobre sus muebles de diseño Japandi.`;
      break;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
};

/**
 * Open WhatsApp link in new tab
 * @param {string} messageType - Type of message
 * @param {object} data - Additional data
 */
export const openWhatsApp = (messageType, data) => {
  const link = generateWhatsAppLink(messageType, data);
  window.open(link, '_blank', 'noopener,noreferrer');
};