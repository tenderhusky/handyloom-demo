import productsData from '../data/products.json';

export default function Page() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      {/* HEADER */}
      <div className="border-l-4 border-white pl-6 mb-16">
        <h1 className="text-6xl font-black uppercase tracking-tighter text-white">
          Tender<span className="text-neutral-600">Husky</span>
        </h1>
        <div className="mt-4 font-mono text-[10px] text-neutral-500 flex gap-4 uppercase">
          <span>[ Status: Data_Live ]</span>
          <span>[ Total_Items: {productsData.length} ]</span>
          <span>[ Protocol: Pristine_Access ]</span>
        </div>
      </div>

      {/* THE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-neutral-900 border border-neutral-800">
        {productsData.map((item: any, i: number) => (
          <div key={i} className="bg-[#0a0a0a] p-6 border border-neutral-800 hover:border-neutral-500 transition-all flex flex-col">
            <div className="flex justify-between font-mono text-[9px] text-neutral-600 mb-4 uppercase">
              <span>{item.SKU}</span>
              <span className="bg-neutral-900 px-1 border border-neutral-800">Size: {item['Attribute 1 value(s)']}</span>
            </div>
            
            <h2 className="text-xl font-bold text-white mb-2 italic">{item.Name}</h2>
            
            {/* TAGS */}
            <div className="flex flex-wrap gap-1 mb-4">
              {[item['Attribute 2 value(s)'], item['Attribute 3 value(s)'], item['Attribute 4 value(s)']].map((attr, idx) => (
                <span key={idx} className="text-[8px] font-mono border border-neutral-800 px-1.5 py-0.5 text-neutral-500 uppercase">
                  {attr}
                </span>
              ))}
            </div>

            <p className="text-neutral-500 text-xs leading-relaxed mb-6 flex-grow">
              {item.Description}
            </p>

            <div className="flex justify-between items-end border-t border-neutral-900 pt-4 mt-auto">
              <span className="text-2xl font-black text-white italic">₹{item['Regular price']}</span>
              {parseInt(item.Stock) > 0 ? (
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/20 px-2 py-1 border border-emerald-900/40 uppercase tracking-widest">In Stock</span>
              ) : (
                <span className="text-[9px] font-mono text-red-500 bg-red-950/20 px-2 py-1 border border-red-900/40 uppercase tracking-widest">Sold Out</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
