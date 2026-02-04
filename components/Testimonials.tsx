import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Alex Adeniyi-ojo",
    role: "Homeowner",
    content: "We hired C.Odei Group for urgent renovation services. Our house looks admirable and we are certainly surprised with the delivery. The team completed the renovation within the time-frame, which was impressive.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Mrs. Pamela Frimpong",
    role: "Real Estate Developer",
    content: "Hiring C.Odei Construction Company was a brilliant decision. We were impressed by the process they followed, especially the feasibility study before starting. The construction was hassle-free.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Kingsley Kwakye",
    role: "Contractor",
    content: "Our project required a large supply of iron rods and cement. Sourcing from C.Odei Group ensured we got high-quality materials delivered on time to our site. Highly recommended for bulk supplies.",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
            <div className="mb-12 text-center">
                <h4 className="text-primary font-bold uppercase tracking-wider mb-2">Testimonials</h4>
                <h2 className="text-4xl font-heading font-bold">What Our Clients Say</h2>
            </div>

            <div className="w-full max-w-4xl relative">
                <div className="overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out" 
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {testimonials.map((t) => (
                            <div key={t.id} className="w-full flex-shrink-0 px-4">
                                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 text-center">
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/40">
                                            <Quote className="w-8 h-8 fill-current" />
                                        </div>
                                    </div>
                                    <p className="text-lg md:text-xl text-gray-300 italic mb-8 leading-relaxed">"{t.content}"</p>
                                    <div className="flex flex-col items-center">
                                        <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-primary mb-3" />
                                        <h4 className="font-bold text-lg">{t.name}</h4>
                                        <span className="text-primary text-sm">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrows */}
                <button 
                    onClick={prev} 
                    className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white/10 hover:bg-primary text-white p-3 rounded-full transition-all backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                    onClick={next} 
                    className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white/10 hover:bg-primary text-white p-3 rounded-full transition-all backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="flex justify-center space-x-2 mt-8">
                    {testimonials.map((_, idx) => (
                        <button 
                            key={idx} 
                            onClick={() => setCurrent(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${current === idx ? "w-8 bg-primary" : "w-2 bg-gray-600"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};