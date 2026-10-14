export type PersonaId = 'alex' | 'sophia' | 'marcus' | 'elena';

export interface PersonaDemographics {
  age: number;
  occupation: string;
  annualIncome: string;
  location: string;
  household: string;
  techBudgetAnnual: string;
  education: string;
}

export interface PersonaPsychographics {
  coreValues: string[];
  techPhilosophy: string;
  aestheticPreference: string;
  brandLoyalties: string[];
  trustSignals: string[];
}

export interface PersonaGoalsAndMotivations {
  primaryGoals: string[];
  purchaseTriggers: string[];
  aspirationalWorkflow: string;
  decisionPriority: string; // e.g., "Build Quality > Raw Value"
}

export interface PersonaPainPoints {
  specAnxieties: string[];
  compatibilityFriction: string[];
  postPurchaseDoubts: string[];
  storefrontFriction: string; // e.g. "Hates marketing buzzwords without real benchmark charts"
  howStorefrontSolvesIt: string[];
}

export interface PersonaDigitalBehavior {
  researchChannels: string[];
  decisionTimeframe: string;
  primaryDevice: 'Desktop' | 'Mobile' | 'Dual Screen';
  reviewScrutiny: 'Deep Technical Analysis' | 'Family Safety & Long-term Reliability' | 'Benchmark Head-to-Head' | 'Efficiency & Portability';
  paymentPreference: string;
  cartAbandonmentRisk: string;
}

export interface BuyerPersona {
  id: PersonaId;
  name: string;
  title: string;
  tagline: string;
  avatarUrl: string;
  colorTheme: string; // Tailwind color string for accent borders/badges
  demographics: PersonaDemographics;
  psychographics: PersonaPsychographics;
  goals: PersonaGoalsAndMotivations;
  painPoints: PersonaPainPoints;
  digitalBehavior: PersonaDigitalBehavior;
  heroHeadline: string;
  heroSubheadline: string;
  recommendedCategory: string;
}

export interface ProductSpecs {
  display?: string;
  processor?: string;
  memory?: string;
  storage?: string;
  battery?: string;
  connectivity?: string;
  weight?: string;
  noiseCancellation?: string;
  driverSize?: string;
  frequencyResponse?: string;
  impedance?: string;
  refreshRate?: string;
  responseTime?: string;
  panelType?: string;
  matterCompatible?: boolean;
  powerOutput?: string;
  warrantyYears: number;
}

export interface PersonaAffinity {
  matchScore: number; // 0-100
  reason: string;
  keyHighlight: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'Laptops' | 'Audio' | 'Smart Home' | 'Displays' | 'Accessories';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  image: string;
  inStock: boolean;
  isFeatured?: boolean;
  description: string;
  keyFeatures: string[];
  specs: ProductSpecs;
  personaAffinities: Record<PersonaId, PersonaAffinity>;
  compatibility: {
    macos: boolean;
    windows: boolean;
    linux: boolean;
    thunderbolt: boolean;
    matter: boolean;
    notes: string;
  };
  inTheBox: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  personaId: PersonaId;
  items: {
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
  }[];
  totalAmount: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  createdAt: string;
  shippingAddress: string;
  trackingNumber: string;
}

export interface AdminStats {
  totalRevenue: number;
  totalOrders: number;
  conversionRate: number;
  averageOrderValue: number;
  topPersona: string;
}
