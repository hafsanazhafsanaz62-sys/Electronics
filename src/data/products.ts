import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'titan-x-laptop',
    name: 'Titan X Ultra Pro 16',
    subtitle: 'M4 Max / 64GB Unified RAM / 2TB NVMe PCIe 5.0 / Liquid XDR 120Hz',
    category: 'Laptops',
    price: 3299,
    originalPrice: 3499,
    rating: 4.9,
    reviewCount: 142,
    stock: 18,
    image: '/src/assets/images/hero_flagship_laptop_1791953421969.jpg',
    inStock: true,
    isFeatured: true,
    description: 'Precision machined from a solid block of aerospace-grade magnesium-aluminum alloy. Engineered for sustained creative workflows and real-time audio computation with dual vapor-chamber cooling that maintains whisper-quiet acoustics under peak workloads.',
    keyFeatures: [
      'Liquid Retina XDR mini-LED with 1,600 nits peak brightness and 100% DCI-P3 wide color gamut',
      'Dual Thunderbolt 5 ports capable of bidirectional 80Gbps transfer speed and triple 6K external monitor output',
      'Whisper-quiet dual-fan vapor chamber maintaining chassis thermals under 38°C during full render loops',
      'Studio-fidelity 6-speaker sound system with force-cancelling woofers and high-impedance 3.5mm DAC output'
    ],
    specs: {
      display: '16.2" Liquid XDR (3456 x 2234), 120Hz ProMotion, 100% DCI-P3',
      processor: '16-Core M-Series Pro Processor with 40-Core GPU',
      memory: '64GB Unified High-Bandwidth Memory (400 GB/s)',
      storage: '2TB PCIe 5.0 NVMe SSD (7,400 MB/s read speed)',
      battery: '99.6Wh Flight-Approved Lithium-Polymer, up to 18 hours web browsing',
      connectivity: '3x Thunderbolt 5 (USB-C), HDMI 2.1, SDXC Card Slot, MagSafe 3',
      weight: '1.98 kg (4.37 lbs)',
      warrantyYears: 2
    },
    personaAffinities: {
      alex: {
        matchScore: 99,
        reason: 'Built-in 3.5mm jack drives high-impedance headphones up to 300 ohms directly without an external amplifier. Color gamut covers 100% DCI-P3 with factory Delta E < 0.8.',
        keyHighlight: 'Studio DAC Output & DCI-P3 Certified'
      },
      elena: {
        matchScore: 94,
        reason: '99.6Wh battery is precisely calibrated for maximum legal TSA international carry-on limit, delivering 18 hours of real continuous productivity.',
        keyHighlight: '18hr Flight Battery & TSA Certified'
      },
      marcus: {
        matchScore: 86,
        reason: 'High-speed 120Hz panel and 40-core GPU provide solid mobile gaming performance, though desktop battlestation remains his primary choice.',
        keyHighlight: '120Hz Low Response Display'
      },
      sophia: {
        matchScore: 78,
        reason: 'Exceptional build longevity and energy efficiency (Energy Star certified), but higher computing power than typical family architectural planning requires.',
        keyHighlight: '100% Recycled Aluminum Unibody'
      }
    },
    compatibility: {
      macos: true,
      windows: false,
      linux: false,
      thunderbolt: true,
      matter: false,
      notes: 'Native macOS Sonoma with universal Thunderbolt 4/5 backwards compatibility.'
    },
    inTheBox: ['Titan X Ultra Pro 16 Laptop', '140W GaN USB-C Power Adapter', 'Braided USB-C to MagSafe 3 Cable (2m)', 'Microfiber Polishing Cloth', 'Quick Start Guide']
  },
  {
    id: 'apex-reference-headphones',
    name: 'Apex Reference Pro Studio Headphones',
    subtitle: 'Open-Back 50mm Planar Magnetic Drivers / CNC Aluminum / Pure Balanced Cable',
    category: 'Audio',
    price: 799,
    originalPrice: 899,
    rating: 4.95,
    reviewCount: 88,
    stock: 24,
    image: '/src/assets/images/product_studio_headphones_1791953422627.jpg',
    inStock: true,
    isFeatured: true,
    description: 'Mastered for uncompromised acoustic transparency. Hand-assembled in Germany with custom 50mm planar magnetic transducers that reproduce sub-bass down to 5Hz with vanishingly low 0.05% total harmonic distortion.',
    keyFeatures: [
      '50mm Planar Magnetic Drivers delivering ultra-fast transient response and spacious three-dimensional soundstage',
      'Ultra-low 0.05% Total Harmonic Distortion (THD+N) verified across the entire 5Hz - 48kHz frequency spectrum',
      'Breathable perforated Italian lambskin earpads and floating spring-steel suspension headband for all-day fatigue-free mixing',
      'Detachable 4.4mm Pentaconn balanced braided silver-plated copper cable with 6.35mm gold-plated studio adapter'
    ],
    specs: {
      driverSize: '50mm Planar Magnetic with Neodymium N52 Magnets',
      frequencyResponse: '5 Hz – 48,000 Hz',
      impedance: '32 Ohms (Easily driven by pro interfaces and laptops)',
      weight: '385 grams',
      connectivity: 'Detachable dual 3.5mm to 4.4mm Balanced + 6.35mm Studio Adapter',
      warrantyYears: 3
    },
    personaAffinities: {
      alex: {
        matchScore: 100,
        reason: 'Flattest measured target response curve in the industry. Zero artificial bass boost, allowing surgical EQ decisions for broadcast and vinyl masters.',
        keyHighlight: 'Acoustic Reference Target & 0.05% THD'
      },
      elena: {
        matchScore: 68,
        reason: 'Open-back design leaks sound in public transit and airplane cabins; exceptional home listening but unsuited for high-altitude travel isolation.',
        keyHighlight: 'Acoustic Open-Back (Home Studio)'
      },
      marcus: {
        matchScore: 91,
        reason: 'Spacious soundstage and pin-point binaural imaging allow precise audio cue placement in competitive tactical shooters.',
        keyHighlight: '3D Positional Imaging for FPS'
      },
      sophia: {
        matchScore: 72,
        reason: 'Outstanding sound quality for enjoying high-resolution jazz and classical music during peaceful evening hours.',
        keyHighlight: 'True Lossless Audiophile Craftsmanship'
      }
    },
    compatibility: {
      macos: true,
      windows: true,
      linux: true,
      thunderbolt: false,
      matter: false,
      notes: 'Analog audio interface. Compatible with all 3.5mm, 4.4mm balanced, and 6.35mm headphone jacks.'
    },
    inTheBox: ['Apex Reference Pro Headphones', '3m Braided 4.4mm Balanced Silver Cable', '1.5m 3.5mm Single-Ended Cable', '6.35mm Gold-Plated Adapter', 'Hard Shell Travel Carry Case', 'Individual Acoustic Calibration Certificate']
  },
  {
    id: 'aura-ceramic-hub',
    name: 'Aura Core Ceramic Smart Home Hub',
    subtitle: 'Matter 1.3 & Thread Border Router / Local AI Processing / Circular OLED Glass',
    category: 'Smart Home',
    price: 249,
    originalPrice: 289,
    rating: 4.88,
    reviewCount: 215,
    stock: 45,
    image: '/src/assets/images/product_smart_hub_1791953423825.jpg',
    inStock: true,
    isFeatured: true,
    description: 'An architectural centerpiece for modern living. Encased in warm acoustic ceramic with an intuitive touch-sensitive OLED display, Aura orchestrates your lighting, climate, and security locally without cloud dependencies or recurring fees.',
    keyFeatures: [
      '100% Local Processing with on-device edge neural engine: keeps all automations and camera clips private inside your home',
      'Universal Matter 1.3 & Thread Border Router uniting Apple Home, Google Home, SmartThings, and Home Assistant seamlessly',
      'Zero Subscription Required: full video recording timeline and smart sensor logging stored on expandable internal flash',
      'Integrated ambient sensors measuring indoor VOC air quality, humidity, temperature, and circadian natural lighting'
    ],
    specs: {
      matterCompatible: true,
      connectivity: 'Thread, Zigbee 3.0, Wi-Fi 6E (2.4/5GHz), Bluetooth 5.3, Gigabit Ethernet',
      storage: '128GB On-Device Encrypted Flash (Expandable via MicroSD)',
      powerOutput: '15W Low-Energy Standby / USB-C PD Powered',
      weight: '620 grams',
      warrantyYears: 2
    },
    personaAffinities: {
      sophia: {
        matchScore: 100,
        reason: 'Solves the fragmentation nightmare: works with both iOS and Android in the household, requires zero subscriptions, and features a warm ceramic aesthetic.',
        keyHighlight: 'Zero Subscription & Matter Certified'
      },
      alex: {
        matchScore: 82,
        reason: 'Local network control integrates with studio lighting presets (e.g. "Recording Mode" turns off all background HVAC and changes studio lights to red).',
        keyHighlight: 'Local API & Studio Scene Automation'
      },
      elena: {
        matchScore: 79,
        reason: 'Remote access from abroad without monthly cloud fees allows quick temperature check of home residence before returning from flights.',
        keyHighlight: 'Remote Secure Tunnel Without Subscription'
      },
      marcus: {
        matchScore: 65,
        reason: 'Useful for syncing ambient smart bias lighting with PC game states, but not his core performance priority.',
        keyHighlight: 'Ecosystem Lighting Control'
      }
    },
    compatibility: {
      macos: true,
      windows: true,
      linux: true,
      thunderbolt: false,
      matter: true,
      notes: 'Certified for Apple HomeKit, Google Home, Amazon Alexa, Home Assistant, and Matter 1.3.'
    },
    inTheBox: ['Aura Core Ceramic Hub', 'Braided Linen USB-C Power Cable', '18W Compact Power Adapter', 'Flat Ethernet Cable (1.5m)', 'Quick Setup Card with Matter QR code']
  },
  {
    id: 'odyssey-curved-display',
    name: 'Odyssey Pro 34" Curved QD-OLED Monitor',
    subtitle: '3440 x 1440 Ultrawide / 240Hz / 0.03ms Response / 99.3% DCI-P3 / USB-C 90W PD',
    category: 'Displays',
    price: 1199,
    originalPrice: 1399,
    rating: 4.92,
    reviewCount: 94,
    stock: 12,
    image: '/src/assets/images/product_curved_monitor_1791953424318.jpg',
    inStock: true,
    isFeatured: true,
    description: 'The pinnacle of visual immersion and pixel speed. Quantum Dot OLED panel technology delivers infinite contrast with true blacks, 240Hz refresh rate with 0.03ms pixel response time, and 3-Year Zero-Burn-In hardware warranty.',
    keyFeatures: [
      '34-inch 1800R curved QD-OLED panel with 3440 x 1440 resolution and factory Delta E < 1 calibration sheet',
      'True 0.03ms Gray-to-Gray response time eliminating ghosting and smearing in fast-paced competitive esports titles',
      'Single-cable USB-C connectivity with 90W Power Delivery and integrated KVM switch for 2 PCs on one keyboard/mouse',
      'Graphene thermal heat spreader and intelligent pixel refresh algorithm backed by a comprehensive 3-Year Burn-In Warranty'
    ],
    specs: {
      display: '34" 21:9 Curved 1800R QD-OLED (3440 x 1440)',
      refreshRate: '240 Hz',
      responseTime: '0.03 ms (GtG)',
      panelType: 'QD-OLED with Anti-Reflective Coating',
      connectivity: '2x DisplayPort 1.4 DSC, 1x HDMI 2.1, 1x USB-C (90W PD), 4x USB 3.2 Hub',
      weight: '7.8 kg (with stand)',
      warrantyYears: 3
    },
    personaAffinities: {
      marcus: {
        matchScore: 99,
        reason: '240Hz QD-OLED with 0.03ms instantaneous response time delivers zero motion blur in fast tracking. Graphene cooling prevents OLED thermal degradation.',
        keyHighlight: '0.03ms True OLED & 240Hz Refresh'
      },
      alex: {
        matchScore: 96,
        reason: 'Massive ultrawide timeline real-estate for DAWs and video suites. 99.3% DCI-P3 color reproduction calibrated right out of the box.',
        keyHighlight: '99.3% DCI-P3 & Massive DAW Timeline'
      },
      sophia: {
        matchScore: 84,
        reason: 'Dual architectural drawings fit side-by-side without a center bezel break. Clean single-cable desk setup reduces visual clutter.',
        keyHighlight: 'Single-Cable Clean Workstation'
      },
      elena: {
        matchScore: 70,
        reason: 'Phenomenal monitor for the home office executive desk, but not portable for hotel or travel workflows.',
        keyHighlight: 'Stationary Executive Command Center'
      }
    },
    compatibility: {
      macos: true,
      windows: true,
      linux: true,
      thunderbolt: true,
      matter: false,
      notes: 'Native 240Hz over DisplayPort 1.4 / HDMI 2.1. 144Hz-240Hz over USB-C Alt Mode with DSC.'
    },
    inTheBox: ['Odyssey Pro 34" Monitor', 'Ergonomic Counterbalance Desk Arm', 'High-Speed DisplayPort 1.4 Cable', 'Ultra-High-Speed HDMI 2.1 Cable', 'USB-C 100W Video/Data Cable', 'Factory Color Calibration Report']
  },
  {
    id: 'volt-gan-140-charger',
    name: 'VoltStream Nomad 140W GaN Travel Hub',
    subtitle: '3x USB-C PD 3.1 + 1x USB-A / Foldable International Prongs (US/UK/EU/AU)',
    category: 'Accessories',
    price: 99,
    originalPrice: 119,
    rating: 4.86,
    reviewCount: 310,
    stock: 65,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    inStock: true,
    isFeatured: false,
    description: 'The definitive all-in-one charging solution for modern mobility. Utilizing next-gen Gallium Nitride (GaN IV) semiconductors to pack 140W of dynamic power delivery into a chassis 45% smaller than standard manufacturer bricks.',
    keyFeatures: [
      'GaN IV Semiconductor Architecture delivering 96% energy conversion efficiency with cool touch thermals',
      'PD 3.1 140W single-port output capable of charging a 16" laptop to 50% in just 28 minutes',
      'Intelligent Power Allocation dynamically splitting wattage when 4 devices are charged simultaneously',
      'Includes interchangeable locking slide adapters for UK, EU, AU, and US wall sockets'
    ],
    specs: {
      powerOutput: '140W Total (Single Port Max: 140W PD 3.1)',
      connectivity: '3x USB-C, 1x USB-A',
      weight: '265 grams (Featherweight Travel)',
      warrantyYears: 2
    },
    personaAffinities: {
      elena: {
        matchScore: 100,
        reason: 'Replaces 4 separate chargers and international plug converters in one 265g brick. Solves transcontinental power worries completely.',
        keyHighlight: 'All-in-One Global Power & 265g Weight'
      },
      alex: {
        matchScore: 88,
        reason: 'Powers laptop and audio field recorders simultaneously on location without lugging heavy multi-outlet strips.',
        keyHighlight: 'Location Audio Clean Power'
      },
      marcus: {
        matchScore: 75,
        reason: 'Useful for tournament travel bag, delivering quick charging between LAN brackets.',
        keyHighlight: 'Fast Bag-Drop Charging'
      },
      sophia: {
        matchScore: 82,
        reason: 'Charges the whole family tablet and phone station at home cleanly without power strip spaghetti.',
        keyHighlight: 'Family Multi-Device Charging'
      }
    },
    compatibility: {
      macos: true,
      windows: true,
      linux: true,
      thunderbolt: false,
      matter: false,
      notes: 'Universal compatibility: supports USB-PD 3.1, QC 4.0+, PPS, and Apple 140W fast-charge protocols.'
    },
    inTheBox: ['VoltStream Nomad 140W Charger', 'Interchangeable UK, EU, AU Slide Plugs', '2m 240W E-Mark Braided Silicone USB-C Cable', 'Travel Pouch']
  },
  {
    id: 'apex-magnetic-keyboard',
    name: 'Apex Velocity Magnetic Hall-Effect Keyboard',
    subtitle: 'Rapid Trigger 0.1mm - 4.0mm Adjustable Actuation / CNC Billet Aluminum / 8000Hz Polling',
    category: 'Accessories',
    price: 199,
    originalPrice: 229,
    rating: 4.91,
    reviewCount: 167,
    stock: 28,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80',
    inStock: true,
    isFeatured: false,
    description: 'Engineered for absolute competitive superiority. Features frictionless magnetic Hall-effect switches with continuous dynamic rapid-trigger reset, allowing instant direction changes without waiting for mechanical spring return.',
    keyFeatures: [
      'Hall-Effect Magnetic Switches with per-key adjustable actuation points from 0.1mm to 4.0mm in 0.05mm increments',
      'True Rapid Trigger: key resets immediately upon upward finger release for instant counter-strafing and rapid keypresses',
      '8,000Hz (0.125ms) true hardware polling rate with onboard web-driver configuration (no background bloatware)',
      'Double-gasket mounted sound profile with poron foam dampening for a deep, satisfying acoustic thock'
    ],
    specs: {
      refreshRate: '8000 Hz Polling Rate (0.125ms latency)',
      weight: '1.15 kg (Solid CNC Aluminum Base)',
      connectivity: 'Detachable USB-C Braided Cable',
      warrantyYears: 2
    },
    personaAffinities: {
      marcus: {
        matchScore: 100,
        reason: 'Instant counter-strafing with 0.1mm actuation and 8,000Hz polling rate gives tangible tournament advantage in FPS titles. Zero background software bloat.',
        keyHighlight: 'Rapid Trigger & 8000Hz Polling'
      },
      alex: {
        matchScore: 84,
        reason: 'Heavy anodized aluminum chassis stays planted on the studio desk; quiet poron sound dampening prevents mic bleed.',
        keyHighlight: 'Heavy CNC Chassis & Quiet Thock'
      },
      elena: {
        matchScore: 60,
        reason: '1.15kg solid metal keyboard is too heavy for frequent travel, although exceptional for a permanent desk setup.',
        keyHighlight: 'Stationary Desktop Build'
      },
      sophia: {
        matchScore: 68,
        reason: 'Clean aesthetic and satisfying feel, but rapid-trigger magnetic gaming switches exceed typical architectural drafting needs.',
        keyHighlight: 'Durable Mechanical Feel'
      }
    },
    compatibility: {
      macos: true,
      windows: true,
      linux: true,
      thunderbolt: false,
      matter: false,
      notes: 'Web-based GUI configuration works in any browser. Onboard memory saves all profile settings permanently.'
    },
    inTheBox: ['Apex Velocity Keyboard', 'Coiled Braided USB-C Cable', 'Keycap & Switch Puller Tool', '4x Extra Magnetic Switches', 'Quick Reference Card']
  }
];
