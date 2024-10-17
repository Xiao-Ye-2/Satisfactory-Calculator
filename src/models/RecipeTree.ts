import { ProductClass } from "./Product";
import { RecipeClass } from "./Recipe";
import { recipeMap } from "@/config/items";

export class RecipeTreeNode {
  product: ProductClass;
  quantity: number;
  recipe: RecipeClass | null;
  children: RecipeTreeNode[];

  constructor(
    product: ProductClass,
    quantity: number,
    recipe: RecipeClass | null = null,
  ) {
    this.product = product;
    this.quantity = quantity;
    this.recipe = recipe;
    this.children = [];
  }

  expand(autoExpand: boolean = true, favoriteRecipes: Map<string, string>) {
    if (this.recipe || this.product.isIngredient) return;

    const recipes = recipeMap.get(this.product.id);
    if (!recipes || recipes.length === 0) {
      return;
    }

    const favoriteRecipeId = favoriteRecipes.get(this.product.id);
    const selectedRecipe = favoriteRecipeId
      ? recipes.find((r) => r.id === favoriteRecipeId)
      : recipes.find((r) => r.isDefault) || recipes[0];
    if (selectedRecipe) {
      this.setRecipe(selectedRecipe);
    }

    if (autoExpand) {
      this.children.forEach((child) =>
        child.expand(autoExpand, favoriteRecipes),
      );
    }
  }

  setRecipe(recipe: RecipeClass) {
    this.recipe = recipe;
    this.children = recipe.inputs.map((input) => {
      const outputIndex = this.recipe!.outputs.findIndex(
        (output) => output.product.id === this.product.id,
      );
      const outputQuantity = this.recipe!.outputs[outputIndex].quantity;
      const childQuantity = (input.quantity / outputQuantity) * this.quantity;
      return new RecipeTreeNode(input.product, childQuantity);
    });
  }

  updateQuantities(newQuantity: number) {
    this.quantity = newQuantity;
    if (this.recipe) {
      this.children = this.recipe.inputs.map((input) => {
        const outputIndex = this.recipe!.outputs.findIndex(
          (output) => output.product.id === this.product.id,
        );
        const outputQuantity = this.recipe!.outputs[outputIndex].quantity;
        const childQuantity = (input.quantity / outputQuantity) * this.quantity;
        return new RecipeTreeNode(input.product, childQuantity);
      });
      this.children.forEach((child) => child.updateQuantities(child.quantity));
    }
  }
}

export class RecipeTree {
  root: RecipeTreeNode;

  constructor(product: ProductClass, quantity: number) {
    this.root = new RecipeTreeNode(product, quantity);
  }

  expandAll(favoriteRecipes: Map<string, string>) {
    const expandNode = (node: RecipeTreeNode) => {
      node.expand(true, favoriteRecipes);
      node.children.forEach(expandNode);
    };
    expandNode(this.root);
  }

  updateQuantities(newRootQuantity: number) {
    const updateNode = (node: RecipeTreeNode, factor: number) => {
      node.quantity *= factor;
      if (node.recipe) {
        node.children.forEach(child => updateNode(child, factor));
      }
    };

    const factor = newRootQuantity / this.root.quantity;
    updateNode(this.root, factor);
  }

  updateTreeQuantities(newRootQuantity: number) {
    const updateNode = (node: RecipeTreeNode, factor: number) => {
      node.quantity *= factor;
      if (node.recipe) {
        node.children.forEach(child => updateNode(child, factor));
      }
    };

    const factor = newRootQuantity / this.root.quantity;
    updateNode(this.root, factor);
  }
}
