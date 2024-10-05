import { MachineClass } from "@/models/Machine";
import { ProductClass } from "@/models/Product";
import { RecipeClass } from "@/models/Recipe";

export let productMap: Map<string, ProductClass> = new Map();
export let machineMap: Map<string, MachineClass> = new Map();
export let recipeMap: Map<string, RecipeClass[]> = new Map();

// Utility to set global variables
export const setGlobalState = (
    newProductMap: Map<string, ProductClass>,
    newMachineMap: Map<string, MachineClass>,
    newRecipeMap: Map<string, RecipeClass[]>
) => {
    productMap = newProductMap;
    machineMap = newMachineMap;
    recipeMap = newRecipeMap;
};

export const getGlobalState = () => {
    console.log("getGlobalState");
    console.log(productMap);
    console.log(machineMap);
    console.log(recipeMap);
    console.log("getGlobalState finish");
    return {
        productMap,
        machineMap,
        recipeMap,
    };
};
