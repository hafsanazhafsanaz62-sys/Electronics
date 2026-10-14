import { BuyerPersona } from '../types';

export const BUYER_PERSONAS: BuyerPersona[] = [
  {
    id: 'alex',
    name: 'Alex Chen',
    title: 'Creative Technologist & Audio Director',
    tagline: 'Precision-obsessed, latency-intolerant studio craftsman',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    colorTheme: 'blue',
    heroHeadline: 'Studio-Grade Precision. Absolute Zero Latency.',
    heroSubheadline: 'Engineered for color accuracy, 32-bit float audio workflows, and continuous Thunderbolt 4 throughput.',
    recommendedCategory: 'Audio',
    demographics: {
      age: 29,
      occupation: 'Lead Audio Producer & Creative Director',
      annualIncome: '$135,000 / year',
      location: 'Brooklyn, NY (Metro Creative Hub)',
      household: 'Single / Dedicated Home Studio',
      techBudgetAnnual: '$8,500 / year',
      education: 'B.S. in Sound Recording Technology'
    },
    psychographics: {
      coreValues: ['Acoustic Purity', 'Material Durability', 'Right to Repair', 'Zero Gimmicks'],
      techPhilosophy: 'Tools should disappear and never throttle the creative flow.',
      aestheticPreference: 'Minimalist industrial matte dark anodized aluminum, tactile dials, quiet stealth branding',
      brandLoyalties: ['Sennheiser', 'Universal Audio', 'Apple', 'Genelec'],
      trustSignals: ['Verified THD+N audio graphs', 'Independent color calibration sheets (Delta E < 1)', 'Metal chassis teardowns']
    },
    goals: {
      primaryGoals: [
        'Eliminate audio buffer underruns and buffer latency under 3ms in heavy DAW projects',
        'Accurate DCI-P3 99% color grading for master delivery without external LUT boxes',
        'Invest in long-life gear that retains trade-in value for 4+ years'
      ],
      purchaseTriggers: [
        'Hardware throttling during client review sessions',
        'DAC output distortion on high-impedance studio planar headphones',
        'Release of certified Thunderbolt 4 daisy-chainable hardware'
      ],
      aspirationalWorkflow: 'A unified single-cable desk setup that powers high-impedance headphones, calibrated 4K OLED, and 40Gbps RAID drives seamlessly.',
      decisionPriority: 'Build Quality & Benchmark Verification > Price'
    },
    painPoints: {
      specAnxieties: [
        'Marketing jargon ("Spatial Surround 3D") masking mediocre frequency response',
        'Vague driver impedance and power output milliwatt ratings'
      ],
      compatibilityFriction: [
        'Kernel-level audio driver crashes on macOS updates',
        'Dongle daisy chains inducing signal interference and high ground noise'
      ],
      postPurchaseDoubts: [
        'Buyer remorse over micro-stuttering or coil whine under heavy rendering loads',
        'Fears of unserviceable sealed batteries and unibody glue'
      ],
      storefrontFriction: 'Frustrated by e-commerce stores hiding detailed spec sheets beneath generic lifestyle photos.',
      howStorefrontSolvesIt: [
        'Dedicated Technical Spec Matrix with raw hardware measurements (impedance, DCI-P3, THD)',
        'Interactive Hardware Compatibility Checker (OS, Thunderbolt version, Port power)',
        'Audiophile & Creator Verified Reviews with signal path configurations'
      ]
    },
    digitalBehavior: {
      researchChannels: ['Reddit r/audiophile', 'Head-Fi forums', 'Rtings lab measurements', 'YouTube deep-dive teardowns'],
      decisionTimeframe: '2 to 3 weeks of thorough benchmark cross-referencing',
      primaryDevice: 'Desktop',
      reviewScrutiny: 'Deep Technical Analysis',
      paymentPreference: 'Apple Pay / 0% APR 12-month financing for hardware over $1,500',
      cartAbandonmentRisk: 'High if return policy is restrictive or restocking fees are charged on opened gear'
    }
  },
  {
    id: 'sophia',
    name: 'Sophia Martinez',
    title: 'Architect & Tech-Forward Parent',
    tagline: 'Designing tranquil, sustainable, automated home sanctuaries',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    colorTheme: 'emerald',
    heroHeadline: 'Harmonious Intelligence for Mindful Modern Living.',
    heroSubheadline: 'Matter-certified, privacy-first smart home ecosystem designed to conserve energy and simplify family routines.',
    recommendedCategory: 'Smart Home',
    demographics: {
      age: 38,
      occupation: 'Principal Architect & Partner at Studio Arch',
      annualIncome: '$175,000 / year',
      location: 'Seattle, WA (Suburban Modern)',
      household: 'Married, 2 Children (Ages 7 & 10) + Family Pet',
      techBudgetAnnual: '$6,000 / year',
      education: 'Master of Architecture'
    },
    psychographics: {
      coreValues: ['Family Privacy', 'Energy Conservation', 'Quiet Design', 'Child-Safe Reliability'],
      techPhilosophy: 'Technology should serve humans quietly in the background without constant notifications or subscription traps.',
      aestheticPreference: 'Warm Scandinavian ceramic textures, matte bone white, textured fabrics, flush wall integration',
      brandLoyalties: ['Sonos', 'Philips Hue', 'Eve Home', 'Nest'],
      trustSignals: ['Matter & Thread official certifications', 'End-to-end local encryption guarantees', 'Energy Star & Carbon Neutral badges']
    },
    goals: {
      primaryGoals: [
        'Automate climate and ambient lighting based on natural circadian daylight cycles',
        'Consolidate smart devices onto a single local hub that keeps working when internet goes down',
        'Reduce household electricity consumption by 20% through intelligent idle-cutoff sensors'
      ],
      purchaseTriggers: [
        'Moving into a new home or renovation milestone',
        'Frustration with fragmented smart apps that family members cannot easily use',
        'High winter heating bills prompting smart climate upgrades'
      ],
      aspirationalWorkflow: 'One elegant wall/counter console that anyone in the family can touch to dim lights, check security, or stream relaxing music without opening an app.',
      decisionPriority: 'Ease of Use & Family Reliability > Cutting-edge Specs'
    },
    painPoints: {
      specAnxieties: [
        'Confusion over Matter, Thread, Zigbee, and Z-Wave compatibility',
        'Fear of buying obsolete devices right before a major protocol switch'
      ],
      compatibilityFriction: [
        'Smart plugs and cameras that only work inside proprietary closed apps',
        'Devices requiring 2.4GHz only Wi-Fi that fail on modern mesh networks'
      ],
      postPurchaseDoubts: [
        'Hidden monthly cloud subscription fees required just to view doorbell recordings',
        'Data privacy anxiety: microphones and cameras sending data to foreign servers'
      ],
      storefrontFriction: 'Annoyed by stores that don’t disclose required recurring subscription fees before checkout.',
      howStorefrontSolvesIt: [
        '"Zero Subscription Required" badge prominently displayed',
        'One-click Ecosystem Matcher (Certified for Apple Home, Google Home, Alexa & Home Assistant)',
        'Eco-Packaging & Carbon-Neutral delivery guarantees with simple 5-minute setup guides'
      ]
    },
    digitalBehavior: {
      researchChannels: ['Wirecutter guides', 'Architectural Digest tech features', 'Modern home YouTube tours', 'Parenting tech blogs'],
      decisionTimeframe: '1 to 2 weeks, often discussed with partner before purchase',
      primaryDevice: 'Mobile',
      reviewScrutiny: 'Family Safety & Long-term Reliability',
      paymentPreference: 'Credit Card with purchase protection and extended warranty benefits',
      cartAbandonmentRisk: 'High if setup looks overly complex or returns are difficult'
    }
  },
  {
    id: 'marcus',
    name: 'Marcus Vance',
    title: 'Esports Competitor & Hardware Modder',
    tagline: 'Chasing pure frame-time consistency and sub-millisecond actuation',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    colorTheme: 'amber',
    heroHeadline: 'Uncapped Frame Clarity. Pure Mechanical Actuation.',
    heroSubheadline: '360Hz refresh rates, Hall-effect magnetic switches, and thermal vapor chambers engineered for esports podiums.',
    recommendedCategory: 'Displays',
    demographics: {
      age: 24,
      occupation: 'Computer Science Graduate & Competitive FPS Player',
      annualIncome: '$88,000 / year',
      location: 'Austin, TX (Tech Corridor)',
      household: 'Shared High-Rise Apartment with Teammates',
      techBudgetAnnual: '$5,200 / year',
      education: 'B.S. in Computer Science'
    },
    psychographics: {
      coreValues: ['Competitive Edge', 'Raw Benchmarks', 'Overclocking Headroom', 'Thermal Discipline'],
      techPhilosophy: 'Every millisecond of latency is a potential loss. Hardware must never be the bottleneck.',
      aestheticPreference: 'Sleek stealth matte black, aggressive geometric lines, customizable RGB bias lighting, visible heatsinks',
      brandLoyalties: ['ASUS ROG', 'Wooting', 'NVIDIA', 'ZOWIE'],
      trustSignals: ['OLED 0.03ms pixel response benchmarks', '1% low FPS frametime graphs', 'Independent teardown review by tech channels']
    },
    goals: {
      primaryGoals: [
        'Lock minimum 1% frametimes above 240 FPS in tournament titles (Valorant, CS2, Apex)',
        'Eliminate motion blur with true 360Hz refresh panels and magnetic analog rapid trigger keys',
        'Maintain system temperatures below 65°C under sustained competitive sessions'
      ],
      purchaseTriggers: [
        'Noticing micro-stutter during crucial ranked match clutch moments',
        'A competitor upgrading to rapid-trigger Hall-effect keyboards',
        'Upgrading to a 34" curved QD-OLED battle-station display'
      ],
      aspirationalWorkflow: 'A battle-station where input-to-display motion latency is indistinguishable from zero, with zero screen tearing or thermal drop.',
      decisionPriority: 'Pure Performance & Lowest Latency > Brand Prestige'
    },
    painPoints: {
      specAnxieties: [
        'Marketing claims of "0.5ms GTG" that actually require severe overdrive with horrible ghosting',
        'Sub-pixel rendering fringing on cheap OLED panels causing eye fatigue'
      ],
      compatibilityFriction: [
        'DisplayPort 1.4 vs 2.1 DSC compression limitations limiting maximum refresh rates',
        'Bloated RGB companion software causing background CPU usage and frame drops'
      ],
      postPurchaseDoubts: [
        'OLED burn-in risk on static game HUD elements',
        'Paying scalper/inflated prices for new release hardware'
      ],
      storefrontFriction: 'Dislikes vague ratings; wants to see verified benchmark tests and overdrive tuning details.',
      howStorefrontSolvesIt: [
        'Frametime stability & input latency spec callouts verified in lab conditions',
        '3-Year Zero-Burn-In & Zero-Dead-Pixel replacement guarantee',
        'Side-by-side refresh rate and response time spec comparison engine'
      ]
    },
    digitalBehavior: {
      researchChannels: ['Gamers Nexus', 'Hardware Unboxed', 'Reddit r/buildapc', 'Optimum Tech'],
      decisionTimeframe: 'Rapid (often within 48 hours once reputable benchmark proves performance superiority)',
      primaryDevice: 'Dual Screen',
      reviewScrutiny: 'Benchmark Head-to-Head',
      paymentPreference: 'PayPal / Instant Debit Card checkout',
      cartAbandonmentRisk: 'High if checkout experiences slow loading or out-of-stock baiting occurs'
    }
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    title: 'International Strategy Partner & Nomad',
    tagline: 'Ultralight, high-power mobility for transcontinental leaders',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    colorTheme: 'violet',
    heroHeadline: 'Ultralight Engineering. Transcontinental Stamina.',
    heroSubheadline: 'GaN rapid power distribution, 18-hour battery longevity, and active noise isolation crafted for the global journey.',
    recommendedCategory: 'Laptops',
    demographics: {
      age: 34,
      occupation: 'Senior Strategy Partner & Cross-Border Consultant',
      annualIncome: '$195,000 / year',
      location: 'London / Zurich / In-Transit Global Nomad',
      household: 'Solo Metropolitan Residence',
      techBudgetAnnual: '$9,200 / year (Expensed & Personal)',
      education: 'MBA & International Economics'
    },
    psychographics: {
      coreValues: ['Frictionless Portability', 'Executive Reliability', 'Time Efficiency', 'Understated Elegance'],
      techPhilosophy: 'Simplicity is the highest form of luxury. One universal charger, zero travel anxiety.',
      aestheticPreference: 'Featherweight titanium & magnesium alloys, champagne & space gray finishes, compact form factors',
      brandLoyalties: ['Apple', 'Sony', 'Anker Prime', 'Rimowa Tech'],
      trustSignals: ['Flight-approved battery watt-hour ratings', 'TSA checkpoint ease', 'International worldwide priority warranty']
    },
    goals: {
      primaryGoals: [
        'Consolidate all devices (laptop, phone, tablet, watch) onto a single 140W GaN travel charger',
        'Ensure 16+ hours of untethered battery life during long-haul transcontinental flights',
        'Crystal clear dual-beamforming AI microphones for board calls from bustling airport lounges'
      ],
      purchaseTriggers: [
        'Luggage weight restrictions during international tours',
        'Having a heavy power brick fail during an overseas conference',
        'Need for active noise cancellation that silences airplane jet engine drone completely'
      ],
      aspirationalWorkflow: 'Opening an ultralight laptop at 35,000 feet, effortlessly switching audio between smartphone and laptop, knowing battery will easily outlast the flight.',
      decisionPriority: 'Portability & Battery Endurance > Raw Peak Graphics Power'
    },
    painPoints: {
      specAnxieties: [
        'Laptops claiming "20 hour battery" that drop to 4 hours under actual spreadsheet and video call usage',
        'Fragile USB-C ports that loosen up after 6 months of bag vibration'
      ],
      compatibilityFriction: [
        'International voltage and plug adapter incompatibility during sudden hotel layovers',
        'Bluetooth multipoint pairing dropping audio when an incoming phone call rings'
      ],
      postPurchaseDoubts: [
        'Difficulty getting international warranty service outside the home country',
        'Heavier real-world carry weight than advertised on the box'
      ],
      storefrontFriction: 'Tired of stores that don’t clearly state exact travel weight and carry-on TSA compliance.',
      howStorefrontSolvesIt: [
        'Prominent Real-World Battery Benchmark (Simulated 50-tab web + Zoom video endurance)',
        'Exact travel weight and TSA carry-on compliance certification on product headers',
        'Global Priority 48-Hour International Replacement Guarantee option'
      ]
    },
    digitalBehavior: {
      researchChannels: ['Financial Times Tech reviews', 'Verge Executive Mobility guides', 'Frequent flyer business forums', 'Curated boutique recommendations'],
      decisionTimeframe: 'Decisive (often within 24 hours when replacing travel hardware)',
      primaryDevice: 'Mobile',
      reviewScrutiny: 'Efficiency & Portability',
      paymentPreference: 'Corporate Amex Platinum with automated digital VAT tax invoice',
      cartAbandonmentRisk: 'High if shipping takes more than 2 business days or express delivery is not guaranteed'
    }
  }
];

export const PERSONA_COMPARISON_METRICS = [
  {
    category: 'Demographics',
    attributes: [
      { name: 'Average Age', alex: '29 years', sophia: '38 years', marcus: '24 years', elena: '34 years' },
      { name: 'Primary Occupation', alex: 'Creative Audio Director', sophia: 'Principal Architect', marcus: 'Esports Player / CS Grad', elena: 'Global Strategy Partner' },
      { name: 'Annual Tech Budget', alex: '$8,500', sophia: '$6,000', marcus: '$5,200', elena: '$9,200' },
      { name: 'Household Archetype', alex: 'Home Studio (Single)', sophia: 'Suburban Family (Kids)', marcus: 'Shared Apartment (Roommates)', elena: 'Solo Nomad / Frequent Traveler' }
    ]
  },
  {
    category: 'Psychographics',
    attributes: [
      { name: 'Core Driver', alex: 'Acoustic & Color Purity', sophia: 'Tranquil Privacy & Simplicity', marcus: 'Lowest Frametimes & Edge', elena: 'Frictionless Executive Mobility' },
      { name: 'Aesthetic Lean', alex: 'Industrial Dark Matte', sophia: 'Warm Ceramic Scandinavian', marcus: 'Stealth Angular Matte Black', elena: 'Minimal Titanium & Magnesium' },
      { name: 'Key Trust Signal', alex: 'Lab THD & Calibration Data', sophia: 'Matter & Privacy Certification', marcus: '1% Low Frametime Proof', elena: 'TSA & Worldwide Warranty' }
    ]
  },
  {
    category: 'Goals & Motivations',
    attributes: [
      { name: 'Ultimate Goal', alex: 'Zero latency in DAW rendering', sophia: 'Unified smart home without apps', marcus: '360Hz motion clarity in FPS', elena: '18hr battery & single GaN charger' },
      { name: 'Decision Priority', alex: 'Build Quality > Price', sophia: 'Reliability > Raw Speed', marcus: 'Latency > Brand Name', elena: 'Weight & Battery > GPU power' }
    ]
  },
  {
    category: 'Pain Points & Friction',
    attributes: [
      { name: 'Biggest Annoyance', alex: 'Marketing jargon hiding specs', sophia: 'Mandatory paid subscriptions', marcus: 'Thermal throttling & ghosting', elena: 'Heavy bricks & fake battery claims' },
      { name: 'E-commerce Remedy', alex: 'Full technical spec matrix', sophia: '"Zero Subscription" badge', marcus: 'Verified latency benchmarks', elena: 'Real-world travel weight specs' }
    ]
  },
  {
    category: 'Digital Behavior',
    attributes: [
      { name: 'Research Cycle', alex: '2-3 weeks (Forums, Rtings)', sophia: '1-2 weeks (Wirecutter, Tours)', marcus: '48 hours (Tech Benchmarks)', elena: '24 hours (Decisive on-the-go)' },
      { name: 'Primary Device', alex: 'Desktop Workstation', sophia: 'Mobile Phone', marcus: 'Dual-Monitor PC', elena: 'Mobile Browser' },
      { name: 'Payment Preference', alex: 'Apple Pay / 0% APR Fin.', sophia: 'Protected Credit Card', marcus: 'Instant PayPal / Debit', elena: 'Corporate Amex + VAT Invoice' }
    ]
  }
];
