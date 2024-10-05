import { Product } from "./types";

export class ProductClass {
    id: string;
    name: string;
    isIngredient: boolean;
    imagePath: string;

    constructor(id: string, name: string, isIngredient: boolean, imagePath: string) {
        this.id = id;
        this.name = name;
        this.isIngredient = isIngredient;
        this.imagePath = imagePath;
    }
}