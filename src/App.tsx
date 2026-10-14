import React, { useState } from 'react';
import { BUYER_PERSONAS } from './data/personas';
import { INITIAL_PRODUCTS } from './data/products';
import { INITIAL_ORDERS } from './data/mockOrders';
import { BuyerPersona, Product, CartItem, Order } from './types';
import { Header } from './components/Header';
import { PersonaBar } from './components/PersonaBar';
import { HeroSection } from './components/HeroSection';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SpecCompareDrawer } from './components/SpecCompareDrawer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { PersonaAnatomyView } from './components/PersonaAnatomyView';
import { AdminPanel } from './components/AdminPanel';
import { Check, ShieldCheck, RefreshCw, Cpu, Award } from 'lucide-react';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'store' | 'anatomy' | 'compare' | 'admin'>('store');
  
  // Personas State
  const [personas] = useState<BuyerPersona[]>(BUYER_PERSONAS);
  const [activePersona, setActivePersona] = useState<BuyerPersona>(BUYER_PERSONAS[0]);

  // Products State (supports Admin CRUD)
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Compare State
  const [comparedProductIds, setComparedProductIds] = useState<string[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Checkout State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Orders State (supports Admin updates)
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Cart Handlers
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to bag`);
  };

  const handleBuyNow = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev;
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
    showToast(`Instant Buyer Checkout for ${product.name}`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Compare Handlers
  const handleToggleCompare = (product: Product) => {
    setComparedProductIds((prev) => {
      if (prev.includes(product.id)) {
        return prev.filter((id) => id !== product.id);
      }
      if (prev.length >= 3) {
        showToast('Maximum 3 items can be compared at once.');
        return prev;
      }
      showToast(`Added to spec comparison matrix`);
      return [...prev, product.id];
    });
  };

  const handleRemoveFromCompare = (productId: string) => {
    setComparedProductIds((prev) => prev.filter((id) => id !== productId));
  };

  const handleClearCompare = () => {
    setComparedProductIds([]);
  };

  // Checkout & Order Completion
  const handleOrderCompleted = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
    showToast(`Order ${newOrder.id} confirmed and saved to Admin database.`);
  };

  // Admin CRUD Handlers
  const handleUpdateProductStock = (productId: string, newStock: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, stock: newStock, inStock: newStock > 0 } : p))
    );
    showToast('Inventory level updated');
  };

  const handleUpdateProductPrice = (productId: string, newPrice: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, price: newPrice } : p))
    );
    showToast('Product pricing updated');
  };

  const handleAddProduct = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
    showToast(`SKU "${newProduct.name}" added to catalog.`);
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    setComparedProductIds((prev) => prev.filter((id) => id !== productId));
    showToast('Product SKU removed from catalog.');
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, status: newStatus } : ord))
    );
    showToast(`Order status updated to ${newStatus}`);
  };

  const comparedProducts = products.filter((p) => comparedProductIds.includes(p.id));
  const featuredProduct = products.find((p) => p.isFeatured) || products[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-slate-900 selection:text-white">
      
      {/* Primary Top Bar Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activePersona={activePersona}
        personas={personas}
        onSelectPersona={setActivePersona}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        compareCount={comparedProductIds.length}
        onOpenCompare={() => setIsCompareOpen(true)}
      />

      {/* Sub-Header Persona Lens Bar (visible on Storefront) */}
      {activeTab === 'store' && (
        <PersonaBar
          activePersona={activePersona}
          personas={personas}
          onSelectPersona={setActivePersona}
          onOpenAnatomy={() => setActiveTab('anatomy')}
          onOpenQuiz={() => setActiveTab('anatomy')}
        />
      )}

      {/* MAIN VIEW CONTROLLER */}
      <main className="flex-1">
        
        {/* VIEW 1: STOREFRONT */}
        {activeTab === 'store' && (
          <div>
            {/* Hero Section */}
            <HeroSection
              activePersona={activePersona}
              featuredProduct={featuredProduct}
              onSelectProduct={setSelectedProduct}
              onExploreAnatomy={() => setActiveTab('anatomy')}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />

            {/* Product Grid Catalog */}
            <ProductGrid
              products={products}
              activePersona={activePersona}
              onSelectProduct={setSelectedProduct}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              comparedProductIds={comparedProductIds}
              onToggleCompare={handleToggleCompare}
            />

            {/* Persona Custom Workstation Bundle Promo Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
              <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                    {activePersona.name}'s Recommended Workstation Bundle
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Complete Your {activePersona.title.split('&')[0]} Rig & Save 15%
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                    Get the {featuredProduct.name} paired with the VoltStream 140W GaN Travel Hub.
                    Use coupon code <code className="bg-slate-800 text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">CREATOR15</code> in your bag.
                  </p>
                </div>

                <button
                  onClick={() => {
                    handleAddToCart(featuredProduct);
                    const accessory = products.find(p => p.id === 'volt-gan-140-charger');
                    if (accessory) handleAddToCart(accessory);
                    setIsCartOpen(true);
                  }}
                  className="py-3 px-6 bg-white text-slate-950 font-bold text-xs rounded-xl hover:bg-slate-100 transition-colors shrink-0 shadow-sm"
                >
                  Add Bundle to Bag
                </button>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: PERSONA ANATOMY EXPLORER */}
        {activeTab === 'anatomy' && (
          <PersonaAnatomyView
            personas={personas}
            activePersona={activePersona}
            onSelectPersona={setActivePersona}
            onApplyLensAndShop={(persona) => {
              setActivePersona(persona);
              setActiveTab('store');
              showToast(`Storefront re-aligned for ${persona.name}`);
            }}
          />
        )}

        {/* VIEW 3: ADMIN PANEL */}
        {activeTab === 'admin' && (
          <AdminPanel
            products={products}
            orders={orders}
            personas={personas}
            onUpdateProductStock={handleUpdateProductStock}
            onUpdateProductPrice={handleUpdateProductPrice}
            onAddProduct={handleAddProduct}
            onDeleteProduct={handleDeleteProduct}
            onUpdateOrderStatus={handleUpdateOrderStatus}
          />
        )}

      </main>

      {/* Global Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          activePersona={activePersona}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          isCompared={comparedProductIds.includes(selectedProduct.id)}
          onToggleCompare={handleToggleCompare}
        />
      )}

      {/* Global Spec Comparison Drawer */}
      <SpecCompareDrawer
        comparedProducts={comparedProducts}
        activePersona={activePersona}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onRemoveProduct={handleRemoveFromCompare}
        onClearAll={handleClearCompare}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        activePersona={activePersona}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        activePersona={activePersona}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-800 text-xs font-semibold flex items-center gap-2 animate-bounce-subtle">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Quiet, Compliant E-Commerce Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs text-slate-500">
            <div>
              <div className="font-extrabold text-slate-900 text-sm tracking-tight mb-2">
                LUMINA ELECTRONICS
              </div>
              <p className="leading-relaxed">
                Precision-engineered hardware curated through empirical buyer persona psychology.
                Demographics · Psychographics · Goals · Pain Points · Digital Behavior.
              </p>
            </div>

            <div>
              <div className="font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px]">
                Active Persona Archetypes
              </div>
              <ul className="space-y-1.5">
                {personas.map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => {
                        setActivePersona(p);
                        setActiveTab('store');
                      }}
                      className="hover:text-slate-900 transition-colors text-left"
                    >
                      {p.name} ({p.title.split('&')[0]})
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px]">
                Store Guarantees
              </div>
              <ul className="space-y-1.5">
                <li>3-Year Zero-Burn-In Protection</li>
                <li>30-Day Studio Acoustic Trial</li>
                <li>Carbon-Neutral Insured Delivery</li>
                <li>Universal OS Hardware Certification</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px]">
                Operations & Systems
              </div>
              <ul className="space-y-1.5">
                <li>
                  <button onClick={() => setActiveTab('admin')} className="hover:text-slate-900 font-semibold text-slate-700">
                    Admin Operations Console →
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('anatomy')} className="hover:text-slate-900">
                    Buyer Persona Anatomy Lab →
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsCompareOpen(true)} className="hover:text-slate-900">
                    Interactive Spec Comparison Matrix →
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
            <div>
              © 2026 Lumina Electronics Inc. Engineered for precision workflows.
            </div>
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span aria-hidden="true">·</span>
              <span>Hardware Compliance</span>
              <span aria-hidden="true">·</span>
              <span>Terms of Sale</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
