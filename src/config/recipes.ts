import { RecipeYAML } from "@/models/types";

export const recipesYAML = [
    {
      "id": "iron_plate",
      "inputs": [
        {
          "productId": "IronIngot",
          "quantity": 1
        }
      ],
      "outputs": [
        {
          "productId": "IronPlates",
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
          "productId": "copper",
          "quantity": 1
        }
      ],
      "outputs": [
        {
          "productId": "Quickwire",
          "quantity": 1
        }
      ],
      "machineId": "smelter",
      "isDefault": true
    },
    {
      "id": "copper_wire22",
      "inputs": [
        {
          "productId": "copper",
          "quantity": 2
        }
      ],
      "outputs": [
        {
          "productId": "Quickwire",
          "quantity": 1
        },
        {
          "productId": "IronPlates",
          "quantity": 1
        }
      ],
      "machineId": "smelter",
      "isDefault": false
    }
] as RecipeYAML[];