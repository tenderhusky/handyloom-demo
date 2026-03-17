'use client';

import productsData from '../data/products.json';

export default function Storefront() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans p-8">
      {/* Header */}
      <header className="mb-12 border-b border-neutral-800 pb-6">
        <h1 className="text-4xl font-black tracking-tighter uppercase text-white">TenderHusky Catalog</h1>
        <p className="text-neutral-400 mt-2 text-sm font-mono border-l-2 border-green-500 pl-3">
          STATUS: PRISTINE ACCESS | {productsData.length} ITEMS LOADED
        </p>
      </header>

      {/* The DOM Trap: All 600 items rendered simultaneously */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {productsData.map((product: any, index: number) => (
          <div key={index} className="bg-neutral-900 border border-neutral-800 p-4 flex flex-col hover:border-neutral-600 transition-colors">
            
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-mono text-neutral-500">{product.SKU}</span>
              <span className="text-[10px] font-mono bg-neutral-800 px-2 py-0.5 text-neutral-300">
                SIZE: {product['Attribute 1 value(s)']}
              </span>
            </div>
            
            <h2 className="text-sm font-bold leading-tight mb-2 text-white">{product.Name}</h2>
            
            {/* Attributes rendered as raw text tags */}
            <div className="text-[9px] text-neutral-400 mb-3 uppercase tracking-wider flex flex-wrap gap-1">
              <span className="border border-neutral-700 px-1">{product['Attribute 2 value(s)']}</span>
              <span className="border border-neutral-700 px-1">{product['Attribute 3 value(s)']}</span>
              <span className="border border-neutral-700 px-1">{product['Attribute 4 value(s)']}</span>
            </div>
            
            <p className="text-neutral-400 text-[10px] mb-4 flex-grow leading-relaxed">
              {product.Description}
            </p>

            <div className="flex justify-between items-center mt-auto pt-3 border-t border-neutral-800">
              <span className="font-mono text-green-400 text-sm font-bold">₹{product['Regular price']}</span>
              {parseInt(product.Stock) > 0 ? (
                <span className="text-[10px] font-mono text-neutral-300">STOCK: {product.Stock}</span>
              ) : (
                <span className="text-[10px] font-mono text-red-500 bg-red-950/30 px-1">SOLD OUT</span>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
