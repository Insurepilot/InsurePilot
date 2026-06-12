import { ShieldCheck, Mail, Phone, MapPin, PlaneTakeoff } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sbi-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-sbi-dark font-heading font-bold text-xl">
                <PlaneTakeoff size={24} />
              </div>
              <span className="font-heading font-black text-2xl tracking-tight uppercase">
                Insure<span className="text-sbi-amber">Pilot</span>
              </span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Your trusted local SBI Life Insurance agent. Dedicated to bringing financial security and peace of mind to every household in our community.
            </p>
            <div className="flex gap-4">
              {/* Added generic social icons placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sbi-blue transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sbi-blue transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.8a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.88 0z"/></svg>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-200">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">About Me</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-white transition-colors">Insurance Plans</a></li>
              <li><button onClick={() => window.open('https://wa.me/919795065443', '_blank')} className="text-blue-100 hover:text-white transition-colors">Chat on WhatsApp</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-200">Insurance Plans</h4>
            <ul className="space-y-4">
              <li><span className="text-blue-100 hover:text-white transition-colors cursor-pointer">Term Insurance</span></li>
              <li><span className="text-blue-100 hover:text-white transition-colors cursor-pointer">Retirement Plans</span></li>
              <li><span className="text-blue-100 hover:text-white transition-colors cursor-pointer">Child Plans</span></li>
              <li><span className="text-blue-100 hover:text-white transition-colors cursor-pointer">ULIPs</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-200">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sbi-blue shrink-0 mt-0.5" />
                <span className="text-blue-100">Ramnagar,<br/>Koirepur, Sultanpur 222301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sbi-blue shrink-0" />
                <a href="tel:+919795065443" className="text-blue-100 hover:text-white">+91 97950 65443</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sbi-blue shrink-0" />
                <a href="mailto:brijeshji025@gmail.com" className="text-blue-100 hover:text-white">brijeshji025@gmail.com</a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-200 text-center md:text-left">
            &copy; {new Date().getFullYear()} InsurePilot. All rights reserved. <br className="md:hidden"/> NOT an official SBI Life website. Designed for marketing purposes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="flex flex-col">
              <span className="font-semibold text-white/50 text-xs">Standard T&C Apply.</span>
              <span className="text-[10px] max-w-[250px]">Insurance is the subject matter of solicitation. For more details on benefits, terms & conditions, please read sales brochure carefully before concluding a sale.</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
