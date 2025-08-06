import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Me gustaría obtener más información sobre sus servicios digitales.");
    window.open(`https://wa.me/34123456789?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float animate-pulse-glow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </button>
  );
};

export default WhatsAppFloat;