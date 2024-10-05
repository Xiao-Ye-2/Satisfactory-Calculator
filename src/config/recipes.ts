import { RecipeClass } from "@/models/Recipe";
import { RecipeYAML } from "@/models/types";

const recipesYAML = [
    {
      "id": "iron_plate",
      "inputs": [
        {
          "productId": "iron_ore",
          "quantity": 1
        }
      ],
      "outputs": [
        {
          "productId": "iron_plate",
          "quantity": 1
        }
      ],
      "machineId": "assembler",
      "isDefault": true
    },
    {
      "id": "copper_wire",
      "inputs": [
        {
          "productId": "copper_ore",
          "quantity": 1
        }
      ],
      "outputs": [
        {
          "productId": "copper_wire",
          "quantity": 1
        }
      ],
      "machineId": "smelter",
      "isDefault": true
    },
    {
      "id": "copper_wire",
      "inputs": [
        {
          "productId": "copper_ore",
          "quantity": 1
        }
      ],
      "outputs": [
        {
          "productId": "copper_wire",
          "quantity": 1
        },
        {
          "productId": "iron_plate",
          "quantity": 1
        }
      ],
      "machineId": "smelter",
      "isDefault": false
    }
] as RecipeYAML[];

export const recipes = recipesYAML.map((recipeYAML) => new RecipeClass(recipeYAML));