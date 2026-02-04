import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, User, Phone, Mail, MapPin, Truck, Send, CheckCircle, ShoppingBag, ChevronDown } from 'lucide-react';
import { Button } from './Button';

interface OrderFormProps {
    isOpen: boolean;
    onClose: () => void;
    preSelectedProduct?: string;
}

const products = [
    { id: 'iron-rods', name: 'Iron Rods', specs: ['1/2 inch', '5/8 inch', '3/8 inch', '5/16 inch'] },
    { id: 'iron-nails', name: 'Iron Nails', specs: ['Common Nails', 'Masonry Nails', 'Roofing Nails', 'Skirting Nails'] },
    { id: 'cement', name: 'Cement', specs: ['Ghacem', 'Dzata', 'Supacem'] },
    { id: 'binding-wires', name: 'Binding Wires', specs: ['Black Annealed', 'Galvanized', 'PVC Coated'] },
    { id: 'cement-blocks', name: 'Cement Blocks', specs: ['5-Inch', '6-Inch', '9-Inch'] },
];

export const OrderForm: React.FC<OrderFormProps> = ({ isOpen, onClose, preSelectedProduct }) => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        product: preSelectedProduct || '',
        specification: '',
        quantity: '',
        fullName: '',
        phone: '',
        email: '',
        deliveryAddress: '',
        city: '',
        additionalNotes: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Reset specification when product changes
        if (name === 'product') {
            setFormData(prev => ({ ...prev, specification: '' }));
        }
    };

    const selectedProduct = products.find(p => p.id === formData.product);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate network request
        setTimeout(() => {
            setFormState('success');
        }, 2000);
    };

    const resetForm = () => {
        onClose();
        setTimeout(() => {
            setFormState('idle');
            setCurrentStep(1);
            setFormData({
                product: '',
                specification: '',
                quantity: '',
                fullName: '',
                phone: '',
                email: '',
                deliveryAddress: '',
                city: '',
                additionalNotes: '',
            });
        }, 500);
    };

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const canProceedStep1 = formData.product && formData.specification && formData.quantity;
    const canProceedStep2 = formData.fullName && formData.phone && formData.email;

    // Animation variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 100 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', damping: 25, stiffness: 300 }
        },
        exit: { opacity: 0, scale: 0.8, y: 100 }
    };

    const stepVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, x: -50, transition: { duration: 0.2 } }
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
                    {/* Backdrop with animated gradient */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={resetForm}
                        className="absolute inset-0 bg-gradient-to-br from-dark/95 via-secondary/90 to-primary/80 backdrop-blur-md"
                    >
                        {/* Animated floating shapes */}
                        <motion.div
                            animate={floatingAnimation}
                            className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
                            className="absolute bottom-40 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
                            className="absolute top-1/2 left-1/3 w-24 h-24 bg-tertiary/20 rounded-full blur-2xl"
                        />
                    </motion.div>

                    {/* Modal Container */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8"
                    >
                        {/* Header with gradient */}
                        <div className="relative bg-gradient-to-r from-secondary to-secondary/90 text-white p-8 overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

                            {/* Close Button */}
                            <button
                                onClick={resetForm}
                                className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all hover:rotate-90 duration-300"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 mb-2"
                                >
                                    <div className="bg-primary p-3 rounded-xl shadow-lg">
                                        <ShoppingBag className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-heading text-3xl font-bold">Place Your Order</h2>
                                </motion.div>
                                <p className="text-gray-300 text-sm">Fill in the details below and we'll get back to you shortly</p>
                            </div>

                            {/* Progress Steps */}
                            <div className="flex items-center justify-center gap-4 mt-6 relative z-10">
                                {[1, 2, 3].map((step) => (
                                    <div key={step} className="flex items-center">
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                scale: currentStep === step ? 1.2 : 1,
                                                backgroundColor: currentStep >= step ? '#E35E26' : 'rgba(255,255,255,0.3)'
                                            }}
                                            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
                                        >
                                            {currentStep > step ? (
                                                <CheckCircle className="w-5 h-5" />
                                            ) : (
                                                step
                                            )}
                                        </motion.div>
                                        {step < 3 && (
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    backgroundColor: currentStep > step ? '#E35E26' : 'rgba(255,255,255,0.3)'
                                                }}
                                                className="w-12 h-1 mx-2 rounded-full"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between text-xs mt-2 px-2 text-gray-300">
                                <span>Product</span>
                                <span>Contact</span>
                                <span>Delivery</span>
                            </div>
                        </div>

                        {/* Form Content */}
                        <div className="p-8">
                            <AnimatePresence mode="wait">
                                {formState === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', delay: 0.2 }}
                                            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                        >
                                            <CheckCircle className="w-12 h-12 text-green-600" />
                                        </motion.div>
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-3xl font-heading font-bold text-dark mb-3"
                                        >
                                            Order Submitted!
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-gray-500 max-w-sm mx-auto mb-8"
                                        >
                                            Thank you for your order! Our team will contact you within 24 hours to confirm details and arrange delivery.
                                        </motion.p>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <Button onClick={resetForm} variant="primary">Close</Button>
                                        </motion.div>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        {/* Step 1: Product Selection */}
                                        {currentStep === 1 && (
                                            <motion.div
                                                key="step1"
                                                variants={stepVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="space-y-6"
                                            >
                                                <div className="text-center mb-6">
                                                    <Package className="w-10 h-10 text-primary mx-auto mb-2" />
                                                    <h3 className="text-xl font-bold text-dark">Select Your Product</h3>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="relative">
                                                        <label className="text-sm font-medium text-gray-700 block mb-2">Product *</label>
                                                        <div className="relative">
                                                            <select
                                                                name="product"
                                                                value={formData.product}
                                                                onChange={handleInputChange}
                                                                required
                                                                className="w-full px-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer text-dark font-medium"
                                                            >
                                                                <option value="">Choose a product...</option>
                                                                {products.map(product => (
                                                                    <option key={product.id} value={product.id}>{product.name}</option>
                                                                ))}
                                                            </select>
                                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                                        </div>
                                                    </div>

                                                    {selectedProduct && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            className="relative"
                                                        >
                                                            <label className="text-sm font-medium text-gray-700 block mb-2">Specification *</label>
                                                            <div className="relative">
                                                                <select
                                                                    name="specification"
                                                                    value={formData.specification}
                                                                    onChange={handleInputChange}
                                                                    required
                                                                    className="w-full px-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer text-dark font-medium"
                                                                >
                                                                    <option value="">Choose specification...</option>
                                                                    {selectedProduct.specs.map(spec => (
                                                                        <option key={spec} value={spec}>{spec}</option>
                                                                    ))}
                                                                </select>
                                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                                            </div>
                                                        </motion.div>
                                                    )}

                                                    <div>
                                                        <label className="text-sm font-medium text-gray-700 block mb-2">Quantity *</label>
                                                        <input
                                                            type="text"
                                                            name="quantity"
                                                            value={formData.quantity}
                                                            onChange={handleInputChange}
                                                            placeholder="e.g., 100 pieces, 50 bags, 200 blocks"
                                                            required
                                                            className="w-full px-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="pt-4">
                                                    <Button
                                                        type="button"
                                                        onClick={nextStep}
                                                        disabled={!canProceedStep1}
                                                        fullWidth
                                                        className="py-4"
                                                    >
                                                        Continue to Contact Info
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Step 2: Contact Information */}
                                        {currentStep === 2 && (
                                            <motion.div
                                                key="step2"
                                                variants={stepVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="space-y-6"
                                            >
                                                <div className="text-center mb-6">
                                                    <User className="w-10 h-10 text-primary mx-auto mb-2" />
                                                    <h3 className="text-xl font-bold text-dark">Your Contact Information</h3>
                                                </div>

                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="text-sm font-medium text-gray-700 block mb-2">Full Name *</label>
                                                        <div className="relative">
                                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                            <input
                                                                type="text"
                                                                name="fullName"
                                                                value={formData.fullName}
                                                                onChange={handleInputChange}
                                                                placeholder="John Doe"
                                                                required
                                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="text-sm font-medium text-gray-700 block mb-2">Phone Number *</label>
                                                        <div className="relative">
                                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleInputChange}
                                                                placeholder="+233 XX XXX XXXX"
                                                                required
                                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="text-sm font-medium text-gray-700 block mb-2">Email Address *</label>
                                                        <div className="relative">
                                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleInputChange}
                                                                placeholder="john@example.com"
                                                                required
                                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4 pt-4">
                                                    <Button type="button" onClick={prevStep} variant="outline" className="flex-1 py-4">
                                                        Back
                                                    </Button>
                                                    <Button
                                                        type="button"
                                                        onClick={nextStep}
                                                        disabled={!canProceedStep2}
                                                        className="flex-1 py-4"
                                                    >
                                                        Continue to Delivery
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Step 3: Delivery Information */}
                                        {currentStep === 3 && (
                                            <motion.div
                                                key="step3"
                                                variants={stepVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="space-y-6"
                                            >
                                                <div className="text-center mb-6">
                                                    <Truck className="w-10 h-10 text-primary mx-auto mb-2" />
                                                    <h3 className="text-xl font-bold text-dark">Delivery Details</h3>
                                                </div>

                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="text-sm font-medium text-gray-700 block mb-2">Delivery Address *</label>
                                                        <div className="relative">
                                                            <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                                            <textarea
                                                                name="deliveryAddress"
                                                                value={formData.deliveryAddress}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter your full delivery address..."
                                                                required
                                                                rows={3}
                                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all resize-none"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="text-sm font-medium text-gray-700 block mb-2">City/Region *</label>
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            value={formData.city}
                                                            onChange={handleInputChange}
                                                            placeholder="e.g., Accra, Kumasi, Takoradi"
                                                            required
                                                            className="w-full px-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="text-sm font-medium text-gray-700 block mb-2">Additional Notes</label>
                                                        <textarea
                                                            name="additionalNotes"
                                                            value={formData.additionalNotes}
                                                            onChange={handleInputChange}
                                                            placeholder="Any special instructions or requests..."
                                                            rows={2}
                                                            className="w-full px-4 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all resize-none"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Order Summary */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="bg-gradient-to-r from-light to-tertiary/30 rounded-xl p-4 border border-orange-100"
                                                >
                                                    <h4 className="font-bold text-dark mb-2 text-sm">Order Summary</h4>
                                                    <div className="text-sm text-gray-600 space-y-1">
                                                        <p><span className="font-medium">Product:</span> {selectedProduct?.name}</p>
                                                        <p><span className="font-medium">Specification:</span> {formData.specification}</p>
                                                        <p><span className="font-medium">Quantity:</span> {formData.quantity}</p>
                                                    </div>
                                                </motion.div>

                                                <div className="flex gap-4 pt-4">
                                                    <Button type="button" onClick={prevStep} variant="outline" className="flex-1 py-4">
                                                        Back
                                                    </Button>
                                                    <Button
                                                        type="submit"
                                                        disabled={formState === 'submitting' || !formData.deliveryAddress || !formData.city}
                                                        className="flex-1 py-4 flex items-center justify-center gap-2"
                                                    >
                                                        {formState === 'submitting' ? (
                                                            <motion.span
                                                                animate={{ opacity: [1, 0.5, 1] }}
                                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                            >
                                                                Processing...
                                                            </motion.span>
                                                        ) : (
                                                            <>
                                                                Submit Order <Send className="w-4 h-4" />
                                                            </>
                                                        )}
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
