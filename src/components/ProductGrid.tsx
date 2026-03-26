import { motion } from 'motion/react';

const PRODUCTS = [
  {
    id: 1,
    name: "Aurelia Silk Gown",
    price: "$2,450",
    category: "Evening Wear",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Midnight Velvet Slip",
    price: "$1,200",
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Ivory Lace Bridal",
    price: "$4,800",
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1546167108-8395d2df9ac7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Crimson Satin Wrap",
    price: "$1,850",
    category: "Evening Wear",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-md">
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Curated Selection</h3>
          <h2 className="text-4xl md:text-5xl font-serif italic">The Signature Collection</h2>
        </div>
        <a href="#" className="text-xs uppercase tracking-widest border-b border-gold pb-1 hover:text-gold transition-colors">
          View All Pieces
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {PRODUCTS.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-ivory/5">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
              <button className="absolute bottom-0 left-0 right-0 py-4 bg-ivory text-ink text-[10px] uppercase tracking-widest font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                Quick Add
              </button>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-ivory/40">{product.category}</span>
              <div className="flex justify-between items-baseline">
                <h4 className="font-serif text-lg italic">{product.name}</h4>
                <span className="text-sm font-light text-gold">{product.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
