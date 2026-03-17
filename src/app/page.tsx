'use client';

import productsData from '../data/products.json';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const mono = JetBrains_Mono({ subsets: ['latin'] });

export default function Storefront() {
  return (
    <div className={`${inter.className} min-h-screen bg-[#050505] text-neutral-200 p-6 md:p-12`}>
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      
      {/* HEADER SECTION */}
      <header className="relative z-10 mb-16 border-l-4 border-white pl-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-6xl font-black tracking-tighter uppercase leading-none text-white">
              Tender<span className="text-neutral-500">Husky</span>
            </h1>
            <p className={`${mono.className} text-xs uppercase tracking-[0.3em] text-neutral-500 mt-4`}>
              Infrastructural Intelligence / v1.0.4-Stable
            </p>
          </div>
          <div className={`${mono.className} text-[10px] text-neutral-600 bg-neutral-900/50 p-3 border border-neutral-800`}>
            [ DATA_FEED: PRISTINE ]<br />
            [ NODES: {productsData.length} ]<br />
            [ STATUS: LLM_ACCESSIBLE ]
          </div>
        </div>
      </header>

      {/* PRODUCT GRID */}
      <main className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-px bg-neutral-800 border border-neutral-800">
        {productsData.map((product: any, index: number) => {
          const isSoldOut = parseInt(product.Stock) === 0;
          
          return (
            <div 
              key={index} 
              className="group bg-[#0a0a0a] p-6 flex flex-col transition-all duration-500 hover:bg-[#111] relative overflow-hidden"
            >
              {/* CORNER ACCENT */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-neutral-800 group-hover:border-neutral-500 transition-colors" />
              
              {/* TOP METADATA */}
              <div className={`${mono.className} flex justify-between items-start mb-6 text-[9px] uppercase tracking-widest text-neutral-500`}>
                <span>{product.SKU}</span>
                <span className="bg-neutral-900 px-2 py-0.5 border border-neutral-800 text-neutral-400">
                  SZ: {product['Attribute 1 value(s)']}
                </span>
              </div>
              
              {/* PRODUCT TITLE */}
              <h2 className="text-xl font-bold leading-none mb-4 group-hover:text-white transition-colors uppercase italic tracking-tight">
                {product.Name}
              </h2>
              
              {/* ATTRIBUTE TAGS */}
              <div className={`${mono.className} flex flex-wrap gap-1.5 mb-6`}>
                {[product['Attribute 2 value(s)'], product['Attribute 3 value(s)'], product['Attribute 4 value(s)']].map((attr, i) => (
                  <span key={i} className="text-[8px] border border-neutral-800 px-1.5 py-0.5 bg-neutral-900/30 text-neutral-500">
                    {attr}
                  </span>
                ))}
              </div>
              
              {/* DESCRIPTION - THE LLM TRAP */}
              <p className="text-neutral-500 text-xs leading-relaxed mb-8 flex-grow line-clamp-4 group-hover:text-neutral-400 transition-colors">
                {product.Description}
              </p>

              {/* FOOTER: PRICE & STOCK */}
              <div className="mt-auto pt-6 border-t border-neutral-900 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className={`${mono.className} text-[9px] text-neutral-600 uppercase`}>Price</span>
                  <span className="text-2xl font-black text-white italic">
                    ₹{Number(product['Regular price']).toLocaleString()}
                  </span>
                </div>
                
                <div className="text-right">
                  {isSoldOut ? (
                    <span className={`${mono.className} text-[10px] text-red-500 bg-red-950/20 border border-red-900/50 px-2 py-1 uppercase`}>
                      Sold Out
                    </span>
                  ) : (
                    <span className={`${mono.className} text-[10px] text-emerald-400 bg-emerald-950/20 border border-emerald-900/50 px-2 py-1 uppercase animate-pulse`}>
                      In Stock
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* FOOTER STAMP */}
      <footer className={`${mono.className} mt-20 text-center text-neutral-700 text-[10px] uppercase tracking-[0.5em]`}>
        // TENDERHUSKY_LLM_VALIDATION_PROTOCOL // EST_2026
      </footer>
    </div>
  );
}
