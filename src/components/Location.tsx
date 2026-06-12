import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  const lat = "26.030771575516308";
  const lng = "82.34204069000849";
  const address = "Ramnagar, Koirepur, Sultanpur 222301";
  const iframeUrl = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-sbi-dark mb-4 tracking-tight">
            Visit Our <span className="text-sbi-amber">Office</span>
          </h2>
          <p className="text-lg text-slate-600">
            Drop by for a cup of tea and a detailed discussion about your financial goals.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-4 md:p-6 rounded-3xl shadow-sm">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="w-6 h-6 text-sbi-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-sbi-dark text-xl mb-1">Office Address</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Ramnagar, <br />
                    Koirepur, <br />
                    Sultanpur 222301
                  </p>
                </div>
              </div>
              
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-sbi-dark hover:bg-sbi-blue text-white px-6 py-3 rounded-2xl font-bold transition-all active:scale-95 shadow-md"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>
            
            <div className="lg:col-span-2">
              <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <iframe 
                  src={iframeUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
