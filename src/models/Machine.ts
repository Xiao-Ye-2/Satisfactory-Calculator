import { Machine } from './types';

export class MachineClass implements Machine {
	id: string;
	name: string;
	basePower: number;

	constructor(id: string, name: string, basePower: number) {
		this.id = id;
		this.name = name;
		this.basePower = basePower;
	}

	calculatePower(efficiency: number): number {
		// Efficiency ranges from 0 (0%) to 2.5 (250%), multiply by basePower
		return this.basePower * efficiency;
	}

	toJSON() {
		return {
			id: this.id,
			name: this.name,
			basePower: this.basePower,
		};
	}
}
