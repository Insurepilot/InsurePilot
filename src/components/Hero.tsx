import { motion } from 'motion/react';
import { Phone, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919795065443?text=Hello%20InsurePilot,%20I%20am%20interested%20in%20SBI%20Life%20Insurance%20plans.', '_blank');
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute top-0 right-0 w-64 h-64 lg:w-[600px] lg:h-[600px] bg-sbi-accent rounded-bl-full opacity-60" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sbi-blue/10 text-sbi-blue font-medium text-sm mb-6">
              <CheckCircle2 size={16} />
              <span>Authorized SBI Life Insurance Agent</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-sbi-dark leading-tight mb-6">
              Secure Your Family's Future with <br className="hidden lg:block"/><span className="text-sbi-amber">Confidence.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              I provide personalized financial protection and wealth creation plans to ensure your loved ones are always protected. Let's find the right plan for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transform transition active:scale-95 flex items-center justify-center gap-3"
              >
                <MessageCircleIcon className="w-6 h-6" />
                Chat on WhatsApp
              </button>
              <a 
                href="#services"
                className="border-2 border-sbi-dark text-sbi-dark hover:bg-sbi-dark hover:text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center"
              >
                Explore Plans
              </a>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-gray-500 font-medium text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                24/7 Support
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sbi-blue" />
                Claim Assistance
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-sbi-dark border border-sbi-accent">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                alt="Family Insurance Protection"
                className="w-full h-full object-cover opacity-90 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sbi-dark/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white">
                  <h3 className="font-bold text-lg mb-1">Trusted Local Advisor</h3>
                  <p className="text-sm text-white/80">Helping families in our community secure their dreams.</p>
                </div>
              </div>
            </div>
            
            {/* Floating decoration card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheckIcon />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Claim Settlement</p>
                <p className="text-xl font-bold text-sbi-dark">Fast & Easy</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ShieldCheckIcon() {
  return <CheckCircle2 className="w-6 h-6" />;
}

function MessageCircleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
