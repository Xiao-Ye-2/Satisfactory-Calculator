// models/Recipe.ts
import { Recipe, ProductQuantity, Machine } from './types';

export class RecipeClass implements Recipe {
	id: string;
	inputs: ProductQuantity[];
	outputs: ProductQuantity[];
	machine: Machine;
	isDefault: boolean;
	time: number;
	name: string;
	isVariablePower: boolean;
	minPower: number;
	maxPower: number;

	constructor(
		id: string,
		inputs: ProductQuantity[],
		outputs: ProductQuantity[],
		machine: Machine,
		isDefault: boolean,
		time: number,
		name: string,
		isVariablePower: boolean,
		minPower: number,
		maxPower: number
	) {
		this.id = id;
		this.inputs = inputs;
		this.outputs = outputs;
		this.machine = machine;
		this.isDefault = isDefault;
		this.time = time;
		this.name = name;
		this.isVariablePower = isVariablePower;
		this.minPower = minPower;
		this.maxPower = maxPower;
	}

	getPowerConsumption(efficiency: number): number {
		return this.machine.calculatePower(efficiency);
	}
}
