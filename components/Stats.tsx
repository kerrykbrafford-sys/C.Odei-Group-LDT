import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, Trophy, Building2 } from 'lucide-react';
import { Stat } from '../types';

const stats: Stat[] = [
  { id: 1, value: "20", label: "Years Experience", icon: <Building2 className="w-10 h-10 mb-2" /> },
  { id: 2, value: "1390", label: "Happy Clients", icon: <Users className="w-10 h-10 mb-2" /> },
  { id: 3, value: "85", label: "Certifications", icon: <Globe className="w-10 h-10 mb-2" /> },
  { id: 4, value: "30", label: "Awards Won", icon: <Trophy className="w-10 h-10 mb-2" /> },
];

export const Stats: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center p-4">
              <div className="text-secondary/80 mb-2">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                {inView ? <CountUp end={parseInt(stat.value)} duration={2.5} /> : '0'}
                <span className="text-secondary">+</span>
              </div>
              <div className="text-sm md:text-base font-medium tracking-wide uppercase text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};