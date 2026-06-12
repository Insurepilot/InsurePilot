import { motion } from 'motion/react';
import { Award, Users, TrendingUp, HeartHandshake } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Users className="w-6 h-6 text-sbi-blue" />, value: "500+", label: "Happy Families" },
    { icon: <Award className="w-6 h-6 text-sbi-blue" />, value: "10+ Years", label: "of Excellence" },
    { icon: <TrendingUp className="w-6 h-6 text-sbi-blue" />, value: "100%", label: "Commitment" },
    { icon: <HeartHandshake className="w-6 h-6 text-sbi-blue" />, value: "24/7", label: "Priority Support" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0 border-2 border-sbi-accent">
              <img 
                src="https://res.cloudinary.com/duddyuzey/image/upload/v1781262549/advisor-photo.jpg_dypn1c.jpg" 
                alt="Expert Insurance Advisor" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-sbi-dark/10 mix-blend-multiply" />
            </div>
            
            <div className="absolute -bottom-10 -right-4 lg:-right-10 bg-white p-6 rounded-3xl shadow-xl border border-blue-100 max-w-xs">
              <p className="text-xl font-bold text-sbi-dark mb-2">My Mission</p>
              <p className="text-gray-600 text-sm">To provide genuine, transparent, and lifelong financial security planning tailored to your family's needs.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-sbi-blue font-semibold text-sm mb-4">
              About Your Advisor
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-sbi-dark mb-6 leading-tight">
              Not just an agent, <span className="text-sbi-amber">your lifelong trust partner.</span>
              <span className="text-sm text-gray-400 ml-3">(Updated)</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hi, I'm Brijesh Kumar Shukla your local certified SBI Life Insurance advisor. My goal isn't just to sell policies, but to understand your life's aspirations and build a robust safety net around them.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Whether you are planning for your child's higher education, securing a peaceful retirement, or seeking comprehensive life cover, I am here to guide you every step of the way with honesty and expertise.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sbi-accent flex items-center justify-center shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-sbi-dark">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
