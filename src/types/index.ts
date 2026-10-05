export interface Product {
  id: string;
  name: string;
  size: string;
  volumeLabel: string;
  pricePKR: number;
  casePricePKR: number;
  unitsPerCase: number;
  caseLabel: string;
  description: string;
  idealFor: string;
  image: string;
  badge?: string;
  specs: {
    ph: string;
    tds: string;
    bottleType: string;
    recycleGrade: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  isCase: boolean;
}

export interface MineralFact {
  mineral: string;
  chemical: string;
  amount: string;
  benefit: string;
}
