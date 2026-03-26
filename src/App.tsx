/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-ink selection:bg-gold selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        
        {/* Featured Section */}
        <section className="py-24 px-6 bg-ivory/5 border-y border-ivory/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/20" />
            </div>
            <div className="space-y-8">
              <h3 className="text-xs uppercase tracking-[0.4em] text-gold">Our Philosophy</h3>
              <h2 className="text-5xl md:text-6xl font-serif italic leading-tight">
                Timeless Silhouettes, <br />
                Modern Sensibilities.
              </h2>
              <p className="text-lg text-ivory/70 font-light leading-relaxed">
                Each piece at La Viewtique is a testament to the art of dressmaking. 
                We combine traditional couture techniques with contemporary design 
                to create garments that empower and inspire.
              </p>
              <div className="pt-4">
                <button className="px-10 py-4 border border-gold text-gold text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-ink transition-all duration-500">
                  Discover Our Story
                </button>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid />

        {/* Newsletter */}
        <section className="py-32 px-6 text-center bg-ink">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif italic">Join the Inner Circle</h2>
            <p className="text-ivory/60 font-light tracking-wide">
              Be the first to experience our new collections and exclusive events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-transparent border-b border-ivory/30 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="text-xs uppercase tracking-widest font-bold border-b border-gold pb-1 hover:text-gold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-ivory/10 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-ivory/30">
          © 2026 La Viewtique. All Rights Reserved.
        </p>
      </footer>

      <Chatbot />
    </div>
  );
}
