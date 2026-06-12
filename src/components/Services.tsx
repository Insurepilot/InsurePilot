import { motion, AnimatePresence } from 'motion/react';
import { Shield, PiggyBank, GraduationCap, HeartPulse, TrendingUp, HandCoins, Check } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'protection', name: 'Term & Protection', icon: <Shield className="w-5 h-5" /> },
  { id: 'savings', name: 'Savings & Income', icon: <PiggyBank className="w-5 h-5" /> },
  { id: 'wealth', name: 'Wealth Creation (ULIP)', icon: <TrendingUp className="w-5 h-5" /> },
  { id: 'child', name: 'Child Plans', icon: <GraduationCap className="w-5 h-5" /> },
  { id: 'retirement', name: 'Retirement Plans', icon: <HandCoins className="w-5 h-5" /> },
  { id: 'health', name: 'Health Insurance', icon: <HeartPulse className="w-5 h-5" /> },
];

const plans: Record<string, { title: string; desc: string; features: string[] }[]> = {
  protection: [
    { title: "SBI Life - eShield Next", desc: "A customizable term plan that evolves with your changing life stages.", features: ["Level/Increasing Cover", "Whole Life Option", "Better Half Benefit"] },
    { title: "SBI Life - Saral Swadhan Supreme", desc: "Affordable protection with return of premium upon maturity.", features: ["Return of Premium", "Guaranteed Protection", "Easy Setup"] },
    { title: "SBI Life - Smart Shield", desc: "Pure term insurance offering financial security against the unexpected.", features: ["Affordable Premium", "Large Sum Assured Rebates", "Rider Options"] }
  ],
  savings: [
    { title: "SBI Life - Smart Platina Assure", desc: "Enjoy guaranteed returns with life cover for a worry-free future.", features: ["Guaranteed Additions", "Limited Premium Payment", "Life Cover"] },
    { title: "SBI Life - Smart Platina Plus", desc: "A plan that provides regular guaranteed income to fulfill your life's needs.", features: ["Regular Income", "Guaranteed Benefits", "Payout period flexibility"] },
    { title: "SBI Life - New Endowment Plan", desc: "A traditional participating life insurance plan offering growth and security.", features: ["Bonus Participations", "Dual Protection", "Loan Facility"] }
  ],
  wealth: [
    { title: "SBI Life - eWealth Insurance", desc: "An easy-to-manage online ULIP offering a dual advantage of life cover and wealth creation.", features: ["Automatic Asset Allocation", "No Allocation Charges", "Market Linked Returns"] },
    { title: "SBI Life - Smart Wealth Builder", desc: "Enhanced investment opportunities to help your wealth grow over time.", features: ["Guaranteed Additions", "No Policy Admin Fee initially", "Flexible Premium"] },
    { title: "SBI Life - Smart Privilege", desc: "A premium ULIP for the privileged few to maximize wealth creation.", features: ["Unlimited Free Switches", "Premium Fund Options", "Loyalty Additions"] }
  ],
  retirement: [
    { title: "SBI Life - Retire Smart", desc: "Ensure your standard of living never drops after you stop working.", features: ["Guaranteed Additions", "Fund Value Protection", "Market linked returns"] },
    { title: "SBI Life - Saral Pension", desc: "A standard immediate annuity plan providing regular income for life.", features: ["Immediate Annuity", "Lifelong Income", "Joint Life Option"] },
    { title: "SBI Life - Annuity Plus", desc: "A versatile annuity plan offering extensive choices of annuity payouts.", features: ["Multiple Annuity Options", "Regular Income", "Higher Annuity Rates"] }
  ],
  child: [
    { title: "SBI Life - Smart Champ Insurance", desc: "Protect your child's educational needs even in your absence.", features: ["Education Payouts", "Premium Waiver", "Guaranteed Benefits"] },
    { title: "SBI Life - Smart Scholar", desc: "A unit-linked child plan protecting your child's future while growing your investments.", features: ["Dual Protection", "Premium Waiver Benefit", "Market Linked Returns"] }
  ],
  health: [
    { title: "SBI Life - Poorna Suraksha", desc: "Comprehensive protection spanning life cover and critical illness.", features: ["Critical Illness Cover", "Life Cover Rebalancing", "Premium Waiver on CI"] }
  ]
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-sbi-blue/10 text-sbi-blue font-semibold text-sm mb-4">
            Our Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-sbi-dark mb-6 tracking-tight">
            Comprehensive Plans for <br/>Every Stage of Life
          </h2>
          <p className="text-lg text-gray-600">
            Backed by SBI Life, we offer a wide spectrum of insurance products tailored to your unique financial goals. Select a category below to explore available plans.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id 
                  ? 'bg-sbi-dark text-white shadow-md transform scale-105' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-sbi-blue hover:text-sbi-blue'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Plans Grid layout */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {plans[activeTab].map((plan, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full hover:border-sbi-blue/30 group"
                >
                  <h3 className="text-xl font-bold text-sbi-dark mb-3">{plan.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-sm">
                    {plan.desc}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => window.open(`https://wa.me/919795065443?text=I%20am%20interested%20in%20knowing%20more%20about%20${encodeURIComponent(plan.title)}`, '_blank')}
                    className="w-full bg-slate-50 group-hover:bg-sbi-dark text-sbi-dark group-hover:text-white border border-slate-200 group-hover:border-sbi-dark py-3 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    Enquire on WhatsApp
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}
