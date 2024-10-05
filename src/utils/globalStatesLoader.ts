import { loadYAMLFile } from "@/utils/yamlLoader";
import { MachineClass } from "@/models/Machine";
import { ProductClass } from "@/models/Product";
import { RecipeClass } from "@/models/Recipe";
import { setGlobalState } from "@/utils/globalStates";
import { MachineYAML, ProductYAML, RecipeYAML } from "@/models/types";

export const loadGlobalStateOnServer = async () => {
    // Only used on the server side
    const products = loadYAMLFile('products.yaml') as ProductYAML[];
    const machines = loadYAMLFile('machines.yaml') as MachineYAML[];
    const recipes = loadYAMLFile('recipes.yaml') as RecipeYAML[];

	// Initialize machines
	const machineMap = new Map<string, MachineClass>();
	machines.forEach((m: any) => {
		machineMap.set(m.id, new MachineClass(m.id, m.name, m.basePower));
	});

	// Initialize products
	const productMap = new Map<string, ProductClass>();
	products.forEach((p: any) => {
		productMap.set(p.id, new ProductClass(p.id, p.name, p.isIngredient, p.imagePath));
	});

	// Initialize recipeMap
	const recipeMap = new Map<string, RecipeClass[]>();
	recipes.forEach((r: any) => {
		const recipe = new RecipeClass(
			r.id,
			(r.inputs || []).map((input: any) => ({
				product: productMap.get(input.productId),
				quantity: input.quantity,
			})),
			(r.outputs || []).map((output: any) => ({
				product: productMap.get(output.productId),
				quantity: output.quantity,
			})),
			machineMap.get(r.machineId)!,
			r.isDefault || false,
		);

		// Map productId to list of recipes where it's used as an output
		(r.outputs || []).forEach((output: any) => {
			if (!recipeMap.has(output.productId)) {
				recipeMap.set(output.productId, []);
			}
			recipeMap.get(output.productId)!.push(recipe);
		});
	});

    setGlobalState(productMap, machineMap, recipeMap);

    // Return the maps for client-side use
    return { productMap, machineMap, recipeMap };
};