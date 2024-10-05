import { RecipeClass } from "@/models/Recipe";
import { recipesYAML } from "./recipes";
import { MachineClass } from "@/models/Machine";
import { ProductClass } from "@/models/Product";
import { machineList } from "./machines";
import { productList } from "./products";


export const machineMap = new Map<string, MachineClass>();
machineList.forEach((m: any) => {
    machineMap.set(m.id, new MachineClass(m.id, m.name, m.basePower));
});

export const productMap = new Map<string, ProductClass>();
productList.forEach((p: any) => {
    productMap.set(p.id, new ProductClass(p.id, p.name, p.isIngredient, p.imagePath));
});

export const recipeMap = new Map<string, RecipeClass[]>();
recipesYAML.forEach((r: any) => {
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