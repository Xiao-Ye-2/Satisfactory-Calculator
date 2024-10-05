// models/Recipe.ts
import { Recipe, ProductQuantity, Machine } from './types';

export class RecipeClass implements Recipe {
	id: string;
	inputs: ProductQuantity[];
	outputs: ProductQuantity[];
	machine: Machine;
	isDefault: boolean;

	constructor(
		id: string,
		inputs: ProductQuantity[],
		outputs: ProductQuantity[],
		machine: Machine,
		isDefault: boolean
	) {
		this.id = id;
		this.inputs = inputs;
		this.outputs = outputs;
		this.machine = machine;
		this.isDefault = isDefault;
	}

	getPowerConsumption(efficiency: number): number {
		return this.machine.calculatePower(efficiency);
	}
}