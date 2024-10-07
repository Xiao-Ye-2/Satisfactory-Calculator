import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { recipeMap } from "@/config/items";
import { RecipeClass } from "@/models/Recipe";

export default function RecipesPage() {
  const { t, i18n } = useTranslation();
  const [recipes, setRecipes] = useState<RecipeClass[]>([]);

  useEffect(() => {
    const updateRecipes = () => {
      const updatedRecipes = Array.from(recipeMap.values())
        .flat()
        .map((recipe) => ({
          ...recipe,
          name: t(recipe.id),
          inputs: recipe.inputs.map((input) => ({
            ...input,
            product: {
              ...input.product,
              name: t(input.product.id),
            },
          })),
          outputs: recipe.outputs.map((output) => ({
            ...output,
            product: {
              ...output.product,
              name: t(output.product.id),
            },
          })),
        }));
      setRecipes(updatedRecipes as RecipeClass[]);
    };

    updateRecipes();
  }, [i18n.language, t]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
          {t("Recipes")}
        </h1>
        <ul className="space-y-6">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center justify-between">
                <div className="w-1/4 flex">
                  <p className="font-semibold">{recipe.name}:</p>
                </div>
                <div className="flex items-center w-full">
                  <ul className="list-none flex space-x-2 flex-grow w-2/5 pr-2">
                    {recipe.inputs.map((prodQuant, index) => (
                      <li
                        key={`${prodQuant.product.id}-${index}`}
                        className="flex items-center"
                      >
                        <Image
                          src={prodQuant.product.imagePath}
                          alt={prodQuant.product.name}
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                        {prodQuant.product.name} ({prodQuant.quantity})
                      </li>
                    ))}
                  </ul>
                  <span className="text-gray-600 text-center w-1/12"> ➔ </span>
                  <ul className="list-none flex space-x-2 flex-grow w-1/4 pl-2">
                    {recipe.outputs.map((prodQuant, index) => (
                      <li
                        key={`${prodQuant.product.id}-${index}`}
                        className="flex items-center"
                      >
                        <Image
                          src={prodQuant.product.imagePath}
                          alt={prodQuant.product.name}
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                        {prodQuant.product.name} ({prodQuant.quantity})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
