import { motion } from 'motion/react';
import { ShoppingBag, Menu, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-ink/80 backdrop-blur-md border-b border-ivory/10"
    >
      <div className="flex items-center gap-8">
        <button className="p-2 hover:text-gold transition-colors">
          <Menu size={20} />
        </button>
        <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-gold transition-colors">Collections</a>
          <a href="#" className="hover:text-gold transition-colors">Bespoke</a>
          <a href="#" className="hover:text-gold transition-colors">About</a>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl md:text-3xl font-serif tracking-tighter italic">La Viewtique</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:text-gold transition-colors hidden sm:block">
          <Search size={20} />
        </button>
        <button className="p-2 hover:text-gold transition-colors">
          <User size={20} />
        </button>
        <button className="p-2 hover:text-gold transition-colors relative">
          <ShoppingBag size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-gold rounded-full" />
        </button>
      </div>
    </motion.nav>
  );
}
