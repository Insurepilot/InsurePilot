import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FAB() {
  const handleClick = () => {
    window.open('https://wa.me/919795065443?text=Hello,%20I%20am%20looking%20for%20insurance%20advice.', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center isolation-auto border-4 border-white/20 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:animate-pulse" />
      <span className="absolute -top-10 -left-6 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with me
      </span>
    </motion.button>
  );
}
