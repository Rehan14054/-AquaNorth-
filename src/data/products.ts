import bottle330ml from '../assets/images/bottle_330ml_aquanorth_1791201765473.jpg';
import bottle1500ml from '../assets/images/bottle_1500ml_aquanorth_1791201777077.jpg';
import bottle189l from '../assets/images/bottle_189l_aquanorth_1791201789183.jpg';
import { Product, MineralFact } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'aquanorth-330ml',
    name: 'AquaNorth Artisan Glass',
    size: '330 ml',
    volumeLabel: '330 ml / 11.2 fl oz',
    pricePKR: 85,
    casePricePKR: 1950,
    unitsPerCase: 24,
    caseLabel: 'Case of 24 Bottles',
    description: 'A compact, sculpted silhouette tailored for fine dining, executive boardrooms, and travel hydration.',
    idealFor: 'Executive Dining & Hospitality',
    image: bottle330ml,
    badge: 'Fine Dining Edition',
    specs: {
      ph: '7.6 Alkaline',
      tds: '118 mg/L',
      bottleType: 'Recyclable Ultra-Clear PET / Glass',
      recycleGrade: '100% Recyclable'
    }
  },
  {
    id: 'aquanorth-1500ml',
    name: 'AquaNorth Daily Classic',
    size: '1.5 L',
    volumeLabel: '1.5 Liters / 50.7 fl oz',
    pricePKR: 160,
    casePricePKR: 1800,
    unitsPerCase: 12,
    caseLabel: 'Case of 12 Bottles',
    description: 'Our flagship daily hydration bottle. Crisp, silky mountain spring water providing essential electrolytes for your active lifestyle.',
    idealFor: 'Daily Wellness & Active Living',
    image: bottle1500ml,
    badge: 'Most Popular',
    specs: {
      ph: '7.6 Alkaline',
      tds: '118 mg/L',
      bottleType: 'Lightweight BPA-Free Polymer',
      recycleGrade: '100% Recyclable'
    }
  },
  {
    id: 'aquanorth-189l',
    name: 'AquaNorth Reserve Jar',
    size: '18.9 L',
    volumeLabel: '18.9 Liters / 5 Gallons',
    pricePKR: 450,
    casePricePKR: 1200,
    unitsPerCase: 1,
    caseLabel: 'Refill Jar / Jar + Deposit',
    description: 'Heavy-duty 5-gallon container with ergonomic grip handle. Designed for modern water dispensers in homes and corporate headquarters.',
    idealFor: 'Home & Corporate Dispensers',
    image: bottle189l,
    badge: 'Bulk Dispenser',
    specs: {
      ph: '7.6 Alkaline',
      tds: '118 mg/L',
      bottleType: 'Medical Grade Multi-Use Polycarbonate',
      recycleGrade: 'Closed-Loop Circular System'
    }
  }
];

export const MINERAL_PROFILE: MineralFact[] = [
  {
    mineral: 'Natural pH Level',
    chemical: 'pH',
    amount: '7.6',
    benefit: 'Slightly alkaline balance that neutralizes internal acidity and smooths mouthfeel.'
  },
  {
    mineral: 'Total Dissolved Solids',
    chemical: 'TDS',
    amount: '118 mg/L',
    benefit: 'Optimal light mineral density offering a crisp, refreshing, feather-light finish.'
  },
  {
    mineral: 'Calcium',
    chemical: 'Ca²⁺',
    amount: '28.4 mg/L',
    benefit: 'Supports bone strength, neuromuscular transmission, and metabolic resilience.'
  },
  {
    mineral: 'Magnesium',
    chemical: 'Mg²⁺',
    amount: '12.1 mg/L',
    benefit: 'Essential electrolyte supporting cardiovascular health, recovery, and cellular hydration.'
  },
  {
    mineral: 'Silica',
    chemical: 'SiO₂',
    amount: '14.8 mg/L',
    benefit: 'Glacial granite mineral known for promoting collagen synthesis and vibrant skin elasticity.'
  },
  {
    mineral: 'Bicarbonates',
    chemical: 'HCO₃⁻',
    amount: '84.0 mg/L',
    benefit: 'Natural digestive aid and biological buffer against cellular oxidative fatigue.'
  }
];
