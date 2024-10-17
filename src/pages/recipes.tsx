import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { recipeMap } from "@/config/items";
import { RecipeClass } from "@/models/Recipe";
import { productList, machineList } from "@/config/items";
import { ProductClass } from "@/models/Product";
import { MachineClass } from "@/models/Machine";
import { SearchDropdown } from "@/components/SearchDropDown";

export default function RecipesPage() {
  const { t, i18n } = useTranslation();
  const [recipes, setRecipes] = useState<RecipeClass[]>([]);
  const [inputFilter, setInputFilter] = useState<ProductClass | null>(null);
  const [outputFilter, setOutputFilter] = useState<ProductClass | null>(null);
  const [machineFilter, setMachineFilter] = useState<MachineClass | null>(null);

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
          machine: { ...recipe.machine, name: t(recipe.machine.id) },
        }));
      setRecipes(updatedRecipes as RecipeClass[]);
    };

    updateRecipes();
  }, [i18n.language, t]);

  const filteredRecipes = recipes.filter((recipe) => {
    const inputMatch =
      !inputFilter ||
      recipe.inputs.some((input) => input.product.id === inputFilter.id);
    const outputMatch =
      !outputFilter ||
      recipe.outputs.some((output) => output.product.id === outputFilter.id);
    const machineMatch =
      !machineFilter || recipe.machine.id === machineFilter.id;
    return inputMatch && outputMatch && machineMatch;
  });

  const filteredProducts = productList.filter(
    (product) => !product.isIngredient,
  );

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 py-4 px-6 bg-white shadow-sm">
        {t("Recipes")}
      </h1>
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 mb-4">
          <SearchDropdown
            items={filteredProducts}
            placeholder={t("Filter by input")}
            onSelect={(product) => setInputFilter(product)}
            getItemName={(product) => t(product.id)}
            getItemImage={(product) => product.imagePath}
          />
          <SearchDropdown
            items={filteredProducts}
            placeholder={t("Filter by output")}
            onSelect={(product) => setOutputFilter(product)}
            getItemName={(product) => t(product.id)}
            getItemImage={(product) => product.imagePath}
          />
          <SearchDropdown
            items={[...machineList.values()]}
            placeholder={t("Filter by machine")}
            onSelect={(machine) => setMachineFilter(machine)}
            getItemName={(machine) => t(machine.id)}
            getItemImage={(machine) => `/machines/${machine.id}.png`}
          />
        </div>
        <ul className="space-y-6 pb-6">
          {filteredRecipes.map((recipe, index) => (
            <li
              key={`${recipe.id}-${index}`}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <div className="flex justify-between items-center">
                <div className="w-4/5">
                  <h2 className="text-xl font-semibold mb-4">{recipe.name}</h2>
                  <div className="flex justify-between mb-4">
                    <div className="w-5/12">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">
                        {t("Inputs")}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {recipe.inputs.map((input, index) => (
                          <div key={index} className="flex items-center">
                            <Image
                              src={input.product.imagePath}
                              alt={input.product.name}
                              width={24}
                              height={24}
                              className="mr-1"
                            />
                            <span className="text-xs">{input.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-2/12 flex items-center justify-center">
                      <span className="text-2xl">➔</span>
                    </div>
                    <div className="w-5/12">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">
                        {t("Outputs")}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {recipe.outputs.map((output, index) => (
                          <div key={index} className="flex items-center">
                            <Image
                              src={output.product.imagePath}
                              alt={output.product.name}
                              width={24}
                              height={24}
                              className="mr-1"
                            />
                            <span className="text-xs">{output.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-5/12">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">
                        {t("Inputs per minute")}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {recipe.inputs.map((input, index) => {
                          const quantityPerMinute =
                            (input.quantity * 60) / recipe.time;
                          const formattedQuantity = Number.isInteger(
                            quantityPerMinute,
                          )
                            ? quantityPerMinute.toString()
                            : quantityPerMinute.toFixed(2);
                          return (
                            <div key={index} className="flex items-center">
                              <Image
                                src={input.product.imagePath}
                                alt={input.product.name}
                                width={24}
                                height={24}
                                className="mr-1"
                              />
                              <span className="text-xs">
                                {formattedQuantity}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-2/12 flex items-center justify-center">
                      <span className="text-2xl">➔</span>
                    </div>
                    <div className="w-5/12">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">
                        {t("Outputs per minute")}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {recipe.outputs.map((output, index) => {
                          const quantityPerMinute =
                            (output.quantity * 60) / recipe.time;
                          const formattedQuantity = Number.isInteger(
                            quantityPerMinute,
                          )
                            ? quantityPerMinute.toString()
                            : quantityPerMinute.toFixed(2);
                          return (
                            <div key={index} className="flex items-center">
                              <Image
                                src={output.product.imagePath}
                                alt={output.product.name}
                                width={24}
                                height={24}
                                className="mr-1"
                              />
                              <span className="text-xs">
                                {formattedQuantity}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/5 flex flex-col items-end">
                  <Image
                    src={`/machines/${recipe.machine.id}.png`}
                    alt={t(recipe.machine.name)}
                    width={80}
                    height={80}
                    className="mb-2"
                  />
                  <span className="text-sm text-center">
                    {t(recipe.machine.name)}
                  </span>
                  <span className="text-sm text-gray-600 mt-2">
                    {t("Time")}: {recipe.time} {t("seconds")}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
