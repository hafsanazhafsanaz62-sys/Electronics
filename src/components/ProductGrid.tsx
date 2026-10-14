import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Product, BuyerPersona } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  activePersona: BuyerPersona;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
  comparedProductIds: string[];
  onToggleCompare: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  activePersona,
  onSelectProduct,
  onAddToCart,
  onBuyNow,
  comparedProductIds,
  onToggleCompare
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'persona-match' | 'price-asc' | 'price-desc' | 'rating'>('persona-match');

  const categories = ['All', 'Laptops', 'Audio', 'Smart Home', 'Displays', 'Accessories'];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesSearch =
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'persona-match') {
          const matchA = a.personaAffinities[activePersona.id]?.matchScore ?? 0;
          const matchB = b.personaAffinities[activePersona.id]?.matchScore ?? 0;
          return matchB - matchA;
        }
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [products, selectedCategory, searchQuery, sortBy, activePersona]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header & Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Curated Catalog
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Precision Electronics Catalog
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Benchmarked performance with zero compromise. Ranked for {activePersona.name}'s priorities.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search specs, models, brands..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Interactive Category Segmented Tabs & Sorting Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
        
        {/* Interactive segmented controls for categories */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-3.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 shrink-0 text-xs">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-slate-500 hidden sm:inline">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-900"
          >
            <option value="persona-match">{activePersona.name.split(' ')[0]} Match Affinity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300 p-8">
          <p className="text-sm font-semibold text-slate-700 mb-1">No electronics found matching your filters</p>
          <p className="text-xs text-slate-500 mb-4">Try clearing your search term or selecting another category.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="py-2 px-4 bg-slate-900 text-white text-xs font-medium rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* 3-Column Desktop Product Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              activePersona={activePersona}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
              onBuyNow={onBuyNow}
              isCompared={comparedProductIds.includes(product.id)}
              onToggleCompare={onToggleCompare}
            />
          ))}
        </div>
      )}

    </section>
  );
};
