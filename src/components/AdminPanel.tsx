import React, { useState } from 'react';
import { 
  BarChart3, 
  Package, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  Check, 
  ShieldCheck, 
  DollarSign, 
  X,
  Sparkles
} from 'lucide-react';
import { Product, Order, AdminStats, BuyerPersona } from '../types';
import { PERSONA_SEGMENT_PERFORMANCE } from '../data/mockOrders';

interface AdminPanelProps {
  products: Product[];
  orders: Order[];
  personas: BuyerPersona[];
  onUpdateProductStock: (productId: string, newStock: number) => void;
  onUpdateProductPrice: (productId: string, newPrice: number) => void;
  onAddProduct: (newProduct: Product) => void;
  onDeleteProduct: (productId: string) => void;
  onUpdateOrderStatus: (orderId: string, newStatus: Order['status']) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  products,
  orders,
  personas,
  onUpdateProductStock,
  onUpdateProductPrice,
  onAddProduct,
  onDeleteProduct,
  onUpdateOrderStatus
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'personas' | 'products' | 'orders'>('overview');
  const [searchProduct, setSearchProduct] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Product form state
  const [newProductName, setNewProductName] = useState('');
  const [newProductSubtitle, setNewProductSubtitle] = useState('');
  const [newProductCategory, setNewProductCategory] = useState<Product['category']>('Laptops');
  const [newProductPrice, setNewProductPrice] = useState(999);
  const [newProductStock, setNewProductStock] = useState(25);
  const [newProductImage, setNewProductImage] = useState('/src/assets/images/hero_flagship_laptop_1791953421969.jpg');
  const [newProductWarranty, setNewProductWarranty] = useState(2);
  const [newProductTargetPersona, setNewProductTargetPersona] = useState<string>('alex');

  // Compute live Admin Stats
  const totalRevenue = orders.reduce((sum, ord) => sum + ord.totalAmount, 0);
  const totalOrders = orders.length;
  const avgOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;

  // Filtered orders
  const filteredOrders = orders.filter((ord) => {
    if (orderStatusFilter === 'All') return true;
    return ord.status === orderStatusFilter;
  });

  // Filtered products
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
      p.category.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName.trim()) return;

    const created: Product = {
      id: `prod-${Date.now()}`,
      name: newProductName,
      subtitle: newProductSubtitle || 'High-performance electronics hardware',
      category: newProductCategory,
      price: Number(newProductPrice),
      rating: 5.0,
      reviewCount: 1,
      stock: Number(newProductStock),
      image: newProductImage,
      inStock: true,
      description: 'Engineered for uncompromising technical workflows with precision components.',
      keyFeatures: [
        'Benchmarked high-efficiency operation',
        'Certified hardware build quality',
        'Universal system compatibility'
      ],
      specs: {
        warrantyYears: Number(newProductWarranty),
        weight: '1.2 kg'
      },
      personaAffinities: {
        alex: { matchScore: newProductTargetPersona === 'alex' ? 98 : 75, reason: 'Engineered for studio workflow stability', keyHighlight: 'Precision Hardware' },
        sophia: { matchScore: newProductTargetPersona === 'sophia' ? 98 : 75, reason: 'Local network control and clean aesthetic', keyHighlight: 'Sustainable Design' },
        marcus: { matchScore: newProductTargetPersona === 'marcus' ? 98 : 75, reason: 'Low input latency and thermal headroom', keyHighlight: 'High Performance' },
        elena: { matchScore: newProductTargetPersona === 'elena' ? 98 : 75, reason: 'Featherweight travel portability', keyHighlight: 'Executive Mobility' }
      },
      compatibility: {
        macos: true,
        windows: true,
        linux: true,
        thunderbolt: true,
        matter: newProductCategory === 'Smart Home',
        notes: 'Universal hardware certification.'
      },
      inTheBox: [newProductName, 'Power / Data Cable', 'Documentation']
    };

    onAddProduct(created);
    setIsAddModalOpen(false);
    setNewProductName('');
    setNewProductSubtitle('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Admin Panel Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Store Administration & Persona Telemetry
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Lumina Commerce Operations Console
          </h1>
        </div>

        {/* Action button */}
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-2 shadow-sm shrink-0 self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Electronic SKU</span>
        </button>
      </div>

      {/* Admin Subnav Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-8 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('overview')}
          className={`py-2 px-4 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 shrink-0 ${
            activeTab === 'overview'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>KPI Executive Dashboard</span>
        </button>

        <button
          onClick={() => setActiveTab('personas')}
          className={`py-2 px-4 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 shrink-0 ${
            activeTab === 'personas'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Persona Segment Telemetry</span>
        </button>

        <button
          onClick={() => setActiveTab('products')}
          className={`py-2 px-4 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 shrink-0 ${
            activeTab === 'products'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Product Inventory CRUD ({products.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('orders')}
          className={`py-2 px-4 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 shrink-0 ${
            activeTab === 'orders'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Order Management ({orders.length})</span>
        </button>
      </div>

      {/* TAB 1: KPI OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          
          {/* KPI Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="text-xs font-medium text-slate-500 mb-1">Gross Revenue</div>
              <div className="text-2xl font-extrabold text-slate-900 font-mono-numbers">
                ${totalRevenue.toLocaleString()}
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-2 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+24.8% vs last month</span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="text-xs font-medium text-slate-500 mb-1">Total Orders Processed</div>
              <div className="text-2xl font-extrabold text-slate-900 font-mono-numbers">
                {totalOrders}
              </div>
              <div className="text-[11px] text-slate-500 mt-2">
                100% fulfillment on-time
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="text-xs font-medium text-slate-500 mb-1">Average Order Value (AOV)</div>
              <div className="text-2xl font-extrabold text-slate-900 font-mono-numbers">
                ${avgOrderValue.toLocaleString()}
              </div>
              <div className="text-[11px] text-indigo-600 font-medium mt-2">
                Boosted by multi-device bundles
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="text-xs font-medium text-slate-500 mb-1">Top Buyer Persona Segment</div>
              <div className="text-xl font-bold text-slate-900 truncate">
                Alex Chen
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-2">
                49.5% of total revenue volume
              </div>
            </div>
          </div>

          {/* Persona Revenue Share Bar Chart Visualizer */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 mb-1">
              Revenue Volume by Buyer Persona Segment
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Breakdown of purchase transactions attributed to specific customer archetypes.
            </p>

            <div className="space-y-4 text-xs">
              {PERSONA_SEGMENT_PERFORMANCE.map((seg) => (
                <div key={seg.personaId} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">{seg.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono-numbers text-slate-500">${seg.revenue.toLocaleString()}</span>
                      <span className="font-mono-numbers font-bold text-slate-900">{seg.sharePercent}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-slate-900 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${seg.sharePercent}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Key conversion driver: <strong className="text-slate-700">{seg.topPainPointResolved}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: PERSONA TELEMETRY & PAIN POINT AUDIT */}
      {activeTab === 'personas' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 mb-1">
              Buyer Persona Pain Point Resolution Audit
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              How specific design decisions in Lumina storefront directly removed purchase friction for each persona:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {personas.map((p) => (
                <div key={p.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                    <img
                      src={p.avatarUrl}
                      alt={p.name}
                      className="w-10 h-10 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{p.name}</div>
                      <div className="text-[11px] text-slate-500">{p.title}</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                      Identified Friction Point:
                    </span>
                    <p className="text-slate-700 italic">
                      "{p.painPoints.storefrontFriction}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                      Engineered Storefront Solution:
                    </span>
                    <ul className="space-y-1 text-slate-600">
                      {p.painPoints.howStorefrontSolvesIt.map((sol, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PRODUCT INVENTORY CRUD TABLE */}
      {activeTab === 'products' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          
          {/* Table Header Controls */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
                placeholder="Search catalog SKUs..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>
            
            <div className="text-xs text-slate-500">
              Showing {filteredProducts.length} active SKUs
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Product / Hardware</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Unit Price</th>
                  <th className="p-3.5">Stock Level</th>
                  <th className="p-3.5">Target Persona</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map((prod) => (
                  <tr key={prod.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5">
                      <div className="flex items-center gap-3">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-10 h-10 rounded-lg object-cover bg-slate-100 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <div className="font-bold text-slate-900 truncate max-w-xs">{prod.name}</div>
                          <div className="text-[11px] text-slate-400 font-mono truncate">ID: {prod.id}</div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-3.5">
                      <span className="font-medium text-slate-700">{prod.category}</span>
                    </td>

                    {/* Price with inline edit */}
                    <td className="p-3.5 font-mono-numbers">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400">$</span>
                        <input
                          type="number"
                          value={prod.price}
                          onChange={(e) => onUpdateProductPrice(prod.id, Number(e.target.value))}
                          className="w-20 px-2 py-1 bg-white border border-slate-200 rounded text-slate-900 font-bold focus:outline-none focus:ring-1 focus:ring-slate-900"
                        />
                      </div>
                    </td>

                    {/* Stock level with inline edit */}
                    <td className="p-3.5 font-mono-numbers">
                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          value={prod.stock}
                          onChange={(e) => onUpdateProductStock(prod.id, Number(e.target.value))}
                          className={`w-16 px-2 py-1 bg-white border rounded font-semibold focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                            prod.stock <= 15 ? 'border-amber-300 text-amber-800 bg-amber-50' : 'border-slate-200 text-slate-900'
                          }`}
                        />
                        {prod.stock <= 15 && (
                          <span className="text-[10px] text-amber-700 font-sans font-medium">Low Stock</span>
                        )}
                      </div>
                    </td>

                    <td className="p-3.5">
                      <span className="text-slate-600 font-medium">
                        {prod.personaAffinities.alex.matchScore >= 95 ? 'Alex (Audio/Pro)' :
                         prod.personaAffinities.sophia.matchScore >= 95 ? 'Sophia (Smart Home)' :
                         prod.personaAffinities.marcus.matchScore >= 95 ? 'Marcus (Gamer)' : 'Elena (Nomad)'}
                      </span>
                    </td>

                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => onDeleteProduct(prod.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Delete product SKU"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: ORDER MANAGEMENT */}
      {activeTab === 'orders' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          
          {/* Order Status Filters */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50">
            <div className="flex items-center gap-1">
              {['All', 'Pending', 'Processing', 'Shipped', 'Delivered'].map((st) => (
                <button
                  key={st}
                  onClick={() => setOrderStatusFilter(st)}
                  className={`py-1 px-3 text-xs font-semibold rounded-lg transition-colors ${
                    orderStatusFilter === st
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-mono-numbers">
              {filteredOrders.length} orders
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Order ID & Date</th>
                  <th className="p-3.5">Customer & Persona</th>
                  <th className="p-3.5">Purchased Hardware</th>
                  <th className="p-3.5">Total Amount</th>
                  <th className="p-3.5">Fulfillment Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5">
                      <div className="font-bold text-slate-900 font-mono-numbers">{ord.id}</div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {new Date(ord.createdAt).toLocaleDateString()}
                      </div>
                      <div className="text-[10px] text-indigo-600 font-mono">{ord.trackingNumber}</div>
                    </td>

                    <td className="p-3.5">
                      <div className="font-semibold text-slate-900">{ord.customerName}</div>
                      <div className="text-[11px] text-slate-500">{ord.customerEmail}</div>
                      <span className="inline-block mt-1 text-[10px] bg-slate-100 text-slate-700 font-bold px-1.5 py-0.5 rounded uppercase">
                        Persona: {ord.personaId}
                      </span>
                    </td>

                    <td className="p-3.5">
                      <ul className="space-y-0.5">
                        {ord.items.map((it, idx) => (
                          <li key={idx} className="text-slate-700">
                            {it.quantity}x {it.productName}
                          </li>
                        ))}
                      </ul>
                    </td>

                    <td className="p-3.5 font-mono-numbers font-bold text-slate-900 text-sm">
                      ${ord.totalAmount.toLocaleString()}
                    </td>

                    <td className="p-3.5">
                      <select
                        value={ord.status}
                        onChange={(e) => onUpdateOrderStatus(ord.id, e.target.value as any)}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-lg border focus:outline-none focus:ring-1 focus:ring-slate-900 ${
                          ord.status === 'Delivered'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : ord.status === 'Shipped'
                            ? 'bg-blue-50 text-blue-800 border-blue-300'
                            : 'bg-amber-50 text-amber-800 border-amber-300'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL: ADD NEW ELECTRONIC SKU */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 className="text-base font-bold text-slate-900">Add New Electronics Hardware SKU</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Studio Monoblock DAC / AMP"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Key Spec Subtitle</label>
                <input
                  type="text"
                  placeholder="e.g. 32-bit/768kHz / Dual ES9038PRO / Balanced XLR"
                  value={newProductSubtitle}
                  onChange={(e) => setNewProductSubtitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={newProductCategory}
                    onChange={(e) => setNewProductCategory(e.target.value as any)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="Laptops">Laptops</option>
                    <option value="Audio">Audio</option>
                    <option value="Smart Home">Smart Home</option>
                    <option value="Displays">Displays</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Target Persona</label>
                  <select
                    value={newProductTargetPersona}
                    onChange={(e) => setNewProductTargetPersona(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="alex">Alex (Audio / Creative Pro)</option>
                    <option value="sophia">Sophia (Smart Home & Family)</option>
                    <option value="marcus">Marcus (Esports & Modder)</option>
                    <option value="elena">Elena (Executive Nomad)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Retail Price ($)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={newProductPrice}
                    onChange={(e) => setNewProductPrice(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 font-mono-numbers focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Initial Stock Units</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={newProductStock}
                    onChange={(e) => setNewProductStock(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 font-mono-numbers focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg"
                >
                  Save & Publish SKU
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
