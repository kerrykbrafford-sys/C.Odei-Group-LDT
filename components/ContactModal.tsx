import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const resetForm = () => {
    onClose();
    setTimeout(() => setFormState('idle'), 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="absolute inset-0 bg-dark/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
          >
            {/* Close Button */}
            <button
              onClick={resetForm}
              className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors md:text-white text-dark"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Side: Contact Info & Decor */}
            <div className="w-full md:w-2/5 bg-secondary text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />

              <div className="relative z-10">
                <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</h3>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Let's Build Together</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Have a project in mind or need supply of materials? 
                  Reach out to our team for a consultation or quote.
                </p>
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-start space-x-4">
                   <div className="bg-white/10 p-3 rounded-lg">
                     <Phone className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-gray-400">Call Us</p>
                     <p className="font-bold text-lg">+233 030 395 9318</p>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="bg-white/10 p-3 rounded-lg">
                     <Mail className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-gray-400">Email Us</p>
                     <p className="font-bold text-lg md:text-lg text-sm break-all">codeigrouplimited@yahoo.com</p>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="bg-white/10 p-3 rounded-lg">
                     <MapPin className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-gray-400">Visit Us</p>
                     <p className="font-medium">Kwabenya - C.Odei Group<br/>Accra-Ghana.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-3/5 p-10 md:p-12 bg-white relative">
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-dark">Message Sent!</h3>
                    <p className="text-gray-500 max-w-sm">
                      Thank you for contacting C.Odei Group. Our team will review your request and get back to you shortly.
                    </p>
                    <Button onClick={resetForm} variant="outline" className="mt-4">Close</Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 h-full flex flex-col justify-center"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-6">Send us a Message</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="+233 ..."
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Service Interest</label>
                      <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                        <option>General Inquiry</option>
                        <option>Construction Project</option>
                        <option>Material Purchase (Bulk)</option>
                        <option>Material Purchase (Retail)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Message</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Tell us about your project needs..."
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      fullWidth 
                      disabled={formState === 'submitting'}
                      className="flex items-center justify-center gap-2"
                    >
                      {formState === 'submitting' ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};