import { Order, AdminStats } from '../types';

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ORD-8941',
    customerName: 'Alex Chen',
    customerEmail: 'alex.chen@soundcraft.io',
    personaId: 'alex',
    items: [
      { productId: 'apex-reference-headphones', productName: 'Apex Reference Pro Studio Headphones', quantity: 1, unitPrice: 799 },
      { productId: 'titan-x-laptop', productName: 'Titan X Ultra Pro 16', quantity: 1, unitPrice: 3299 }
    ],
    totalAmount: 4098,
    status: 'Shipped',
    createdAt: '2026-10-12T14:32:00Z',
    shippingAddress: '42 Water Street, Studio 4B, Brooklyn, NY 11201',
    trackingNumber: 'TRK-90214-US'
  },
  {
    id: 'ORD-8938',
    customerName: 'Sophia Martinez',
    customerEmail: 'sophia@archstudio.design',
    personaId: 'sophia',
    items: [
      { productId: 'aura-ceramic-hub', productName: 'Aura Core Ceramic Smart Home Hub', quantity: 2, unitPrice: 249 }
    ],
    totalAmount: 498,
    status: 'Delivered',
    createdAt: '2026-10-11T09:15:00Z',
    shippingAddress: '782 Evergreen Way, Seattle, WA 98103',
    trackingNumber: 'TRK-88194-US'
  },
  {
    id: 'ORD-8935',
    customerName: 'Marcus Vance',
    customerEmail: 'marcus.v@fpspros.net',
    personaId: 'marcus',
    items: [
      { productId: 'odyssey-curved-display', productName: 'Odyssey Pro 34" Curved QD-OLED Monitor', quantity: 1, unitPrice: 1199 },
      { productId: 'apex-magnetic-keyboard', productName: 'Apex Velocity Magnetic Hall-Effect Keyboard', quantity: 1, unitPrice: 199 }
    ],
    totalAmount: 1398,
    status: 'Processing',
    createdAt: '2026-10-13T08:44:00Z',
    shippingAddress: '110 Brazos St, Apt 1802, Austin, TX 78701',
    trackingNumber: 'TRK-77401-US'
  },
  {
    id: 'ORD-8929',
    customerName: 'Elena Rostova',
    customerEmail: 'elena.rostova@globalsequence.com',
    personaId: 'elena',
    items: [
      { productId: 'volt-gan-140-charger', productName: 'VoltStream Nomad 140W GaN Travel Hub', quantity: 2, unitPrice: 99 },
      { productId: 'titan-x-laptop', productName: 'Titan X Ultra Pro 16', quantity: 1, unitPrice: 3299 }
    ],
    totalAmount: 3497,
    status: 'Delivered',
    createdAt: '2026-10-10T19:20:00Z',
    shippingAddress: '15 Berkeley Square, Mayfair, London W1J 6BD, UK',
    trackingNumber: 'TRK-66120-UK'
  },
  {
    id: 'ORD-8921',
    customerName: 'David K. (Creator)',
    customerEmail: 'david.k@mediaworks.tv',
    personaId: 'alex',
    items: [
      { productId: 'odyssey-curved-display', productName: 'Odyssey Pro 34" Curved QD-OLED Monitor', quantity: 1, unitPrice: 1199 }
    ],
    totalAmount: 1199,
    status: 'Shipped',
    createdAt: '2026-10-09T11:05:00Z',
    shippingAddress: '900 N Michigan Ave, Chicago, IL 60611',
    trackingNumber: 'TRK-55209-US'
  }
];

export const INITIAL_ADMIN_STATS: AdminStats = {
  totalRevenue: 10690,
  totalOrders: 5,
  conversionRate: 3.84,
  averageOrderValue: 2138,
  topPersona: 'Alex Chen (Pro Audio & Creative)'
};

export const PERSONA_SEGMENT_PERFORMANCE = [
  {
    personaId: 'alex',
    name: 'Alex Chen (Pro Audio / Creative)',
    revenue: 5297,
    orders: 2,
    sharePercent: 49.5,
    avgCartValue: 2648,
    conversionRate: 4.6,
    topPainPointResolved: 'Full DAC / THD spec matrix transparency prevented audio setup return churn'
  },
  {
    personaId: 'elena',
    name: 'Elena Rostova (Executive Nomad)',
    revenue: 3497,
    orders: 1,
    sharePercent: 32.7,
    avgCartValue: 3497,
    conversionRate: 4.1,
    topPainPointResolved: 'TSA compliance & travel weight display boosted checkout completion by 38%'
  },
  {
    personaId: 'marcus',
    name: 'Marcus Vance (Esports & Overclocker)',
    revenue: 1398,
    orders: 1,
    sharePercent: 13.1,
    avgCartValue: 1398,
    conversionRate: 3.5,
    topPainPointResolved: '3-Year Zero-Burn-In guarantee overcame QD-OLED purchase hesitation'
  },
  {
    personaId: 'sophia',
    name: 'Sophia Martinez (Eco-Smart Home)',
    revenue: 498,
    orders: 1,
    sharePercent: 4.7,
    avgCartValue: 498,
    conversionRate: 2.8,
    topPainPointResolved: 'Zero-Subscription badge directly addressed cloud subscription fatigue'
  }
];
