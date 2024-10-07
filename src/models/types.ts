export interface Product {
  id: string;
  name: string;
  imagePath: string;
  isIngredient: boolean;
}

export interface ProductQuantity {
  product: Product;
  quantity: number;
}

export interface Recipe {
  id: string;
  inputs: ProductQuantity[];
  outputs: ProductQuantity[];
  machine: Machine;

  getPowerConsumption(efficiency: number): number;
}

export interface Machine {
  id: string;
  name: string;
  basePower: number; // Base power consumption in kW

  calculatePower(efficiency: number): number;
}

export interface RecipeYAML {
  id: string;
  inputs: { productId: string; quantity: number }[];
  outputs: { productId: string; quantity: number }[];
  machineId: string;
  isDefault: boolean;
  time: number;
  name: string;
  isVariablePower: boolean;
  minPower: number;
  maxPower: number;
}
