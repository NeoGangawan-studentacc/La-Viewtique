import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Parallax-like effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Fashion" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xs uppercase tracking-[0.4em] text-gold mb-6 block"
        >
          Spring / Summer 2026
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif italic mb-8 leading-tight"
        >
          The Art of <br />
          <span className="not-italic font-light">Elegance</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-4 bg-ivory text-ink text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-ivory transition-all duration-500">
            Shop Collection
          </button>
          <button className="px-10 py-4 border border-ivory/30 text-xs uppercase tracking-widest font-bold hover:border-gold hover:text-gold transition-all duration-500">
            Book Appointment
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-ivory/30" />
      </motion.div>
    </section>
  );
}
