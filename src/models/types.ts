export interface Product {
	id: string;
	name: string;
	image: string;
	isIngredient: boolean;
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


export interface ProductQuantity {
	product: Product;
	quantity: number;
}
// export class ProductQuantity {
// 	product: Product;
// 	quantity: number;

// 	constructor(product: Product, quantity: number) {
// 		this.product = product;
// 		this.quantity = quantity;
// 	}

// 	toJSON() {
// 		return {
// 			product: this.product.toJSON(),
// 			quantity: this.quantity,
// 		};
// 	}
// }


// export interface ProductYAML {
// 	id: string;
// 	name: string;
// 	isIngredient: boolean;
// 	imagePath: string;
// }

// export interface MachineYAML {
// 	id: string;
// 	name: string;
// 	basePower: number;
// }

export interface RecipeYAML {
	id: string;
	inputs: { productId: string; quantity: number }[];
	outputs: { productId: string; quantity: number }[];
	machineId: string;
	isDefault: boolean;
}