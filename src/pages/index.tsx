import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { productList } from "@/config/items";
import { ProductClass } from "@/models/Product";
import { SearchDropdown } from "@/components/SearchDropDown";
import { RecipeTree, RecipeTreeNode } from "@/models/RecipeTree";
import { RecipeTreeComponent } from "@/components/RecipeTreeComponent";
import { TotalComponent } from "@/components/TotalComponent";

export default function ProductSelector() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<ProductClass | null>(
    null,
  );
  const [targetRate, setTargetRate] = useState<string>("");
  const [isRateDropdownVisible, setIsRateDropdownVisible] =
    useState<boolean>(false);
  const [autoExpand, setAutoExpand] = useState<boolean>(true);
  const [recipeTree, setRecipeTree] = useState<RecipeTree | null>(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState<Map<string, string>>(
    new Map(),
  );
  const [totals, setTotals] = useState<{
    inputs: Map<string, number>;
    outputs: Map<string, number>;
    netInputs: Map<string, number>;
    netOutputs: Map<string, number>;
  } | null>(null);

  const rateDropdownRef = useRef<HTMLDivElement>(null);
  const targetRates = [1, 2, 5, 10, 15, 30, 60, 120, 180, 300, 480, 600, 720];

  const filteredProducts = productList.filter(
    (product) => !product.isIngredient,
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        rateDropdownRef.current &&
        !rateDropdownRef.current.contains(event.target as Node)
      ) {
        setIsRateDropdownVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedProduct && targetRate) {
      const tree = new RecipeTree(selectedProduct, parseFloat(targetRate));
      if (autoExpand) {
        tree.expandAll(favoriteRecipes);
      } else {
        tree.root.expand(false, favoriteRecipes);
      }
      setRecipeTree(tree);
    } else {
      setRecipeTree(null);
    }
  }, [selectedProduct, targetRate, autoExpand, favoriteRecipes]);

  useEffect(() => {
    if (recipeTree) {
      const { inputs, outputs } = calculateTotals(recipeTree.root);
      const { netInputs, netOutputs } = calculateNet(inputs, outputs);
      setTotals({ inputs, outputs, netInputs, netOutputs });
    } else {
      setTotals(null);
    }
  }, [recipeTree]);

  const handleRecipeChange = (
    updatedNode: RecipeTreeNode,
    changeType: "current" | "all" | "favorite" | "unfavorite" | "delete",
  ) => {
    if (recipeTree) {
      const updateNodeRecursively = (
        node: RecipeTreeNode,
        updatedNode: RecipeTreeNode,
      ) => {
        if (
          node.product.id === updatedNode.product.id &&
          (changeType === "all" ||
            changeType === "favorite" ||
            changeType === "unfavorite" ||
            node === updatedNode)
        ) {
          node.recipe = updatedNode.recipe;
          node.children = updatedNode.children;
          if (changeType !== "delete") {
            node.updateQuantities(node.quantity);
          }
          if (autoExpand) {
            node.expand(true, favoriteRecipes);
            node.children.forEach((child) =>
              child.expand(true, favoriteRecipes),
            );
          }
        }
        node.children.forEach((child) =>
          updateNodeRecursively(child, updatedNode),
        );
      };
      updateNodeRecursively(recipeTree.root, updatedNode);

      if (changeType === "favorite" || changeType === "unfavorite") {
        const newFavoriteRecipes = new Map(favoriteRecipes);
        if (changeType === "favorite") {
          newFavoriteRecipes.set(
            updatedNode.product.id,
            updatedNode.recipe?.id || "",
          );
        } else {
          newFavoriteRecipes.delete(updatedNode.product.id);
        }
        setFavoriteRecipes(newFavoriteRecipes);
      }

      const updatedRecipeTree = {
        ...recipeTree,
        expandAll: recipeTree.expandAll,
      };
      setRecipeTree(updatedRecipeTree);

      const { inputs, outputs } = calculateTotals(updatedRecipeTree.root);
      const { netInputs, netOutputs } = calculateNet(inputs, outputs);
      setTotals({ inputs, outputs, netInputs, netOutputs });
    }
  };

  const calculateTotals = (
    node: RecipeTreeNode,
  ): { inputs: Map<string, number>; outputs: Map<string, number> } => {
    const inputs = new Map<string, number>();
    const outputs = new Map<string, number>();
    const queue: RecipeTreeNode[] = [node];

    const addToMap = (
      map: Map<string, number>,
      product: string,
      quantity: number,
    ) => {
      map.set(product, (map.get(product) || 0) + quantity);
    };

    if (RecipeTreeNode) {
      addToMap(inputs, node.product.id, node.quantity);
      addToMap(outputs, node.product.id, node.quantity);
    }
    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      if (currentNode.recipe) {
        const outputIndex = currentNode.recipe.outputs.findIndex(
          (output) => output.product.id === currentNode.product.id,
        );
        const recipeQuantity = currentNode.recipe.outputs[outputIndex].quantity;
        currentNode.recipe.inputs.forEach((input) => {
          addToMap(
            inputs,
            input.product.id,
            (input.quantity * currentNode.quantity) / recipeQuantity,
          );
        });
        currentNode.recipe.outputs.forEach((output) => {
          const outputQuantity =
            (output.quantity * currentNode.quantity) / recipeQuantity;
          if (output.product.id === currentNode.product.id) {
            // 从输入中移除相应数量
            const remainingQuantity =
              inputs.get(output.product.id)! - outputQuantity;
            if (remainingQuantity > 0) {
              inputs.set(output.product.id, remainingQuantity);
            } else {
              inputs.delete(output.product.id);
              if (remainingQuantity < 0) {
                addToMap(outputs, output.product.id, -remainingQuantity);
              }
            }
          } else {
            // 向输出添加相应数量
            addToMap(outputs, output.product.id, outputQuantity);
          }
        });
        queue.push(...currentNode.children);
      }
    }

    return { inputs, outputs };
  };

  const calculateNet = (
    inputs: Map<string, number>,
    outputs: Map<string, number>,
  ): { netInputs: Map<string, number>; netOutputs: Map<string, number> } => {
    const netInputs = new Map<string, number>();
    const netOutputs = new Map<string, number>();

    for (const [product, quantity] of inputs) {
      const outputQuantity = outputs.get(product) || 0;
      const netQuantity = quantity - outputQuantity;
      if (netQuantity > 0) {
        netInputs.set(product, netQuantity);
      } else if (netQuantity < 0) {
        netOutputs.set(product, -netQuantity);
      }
    }

    for (const [product, quantity] of outputs) {
      if (!inputs.has(product)) {
        netOutputs.set(product, quantity);
      }
    }

    return { netInputs, netOutputs };
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4 flex-shrink-0">
        <h1 className="text-xl font-semibold mb-2 text-center">
          {t("productSelector.title")}
        </h1>

        <div className="flex justify-between items-center mb-2">
          <div className="w-1/4"></div>
          <div className="flex justify-center space-x-4 w-1/2">
            <div className="w-1/2 flex items-center">
              {selectedProduct && (
                <Image
                  src={`${selectedProduct.imagePath}`}
                  alt={t(selectedProduct.id)}
                  width={24}
                  height={24}
                  className="mr-2"
                />
              )}
              <div className="flex-grow">
                <SearchDropdown
                  items={filteredProducts}
                  placeholder={t("productSelector.searchPlaceholder")}
                  onSelect={(product) => setSelectedProduct(product)}
                  getItemName={(product) => t(product.id)}
                  getItemImage={(product) => product.imagePath}
                />
              </div>
            </div>

            <div className="w-1/2 relative">
              <input
                type="text"
                value={targetRate}
                onChange={(e) => setTargetRate(e.target.value)}
                onFocus={() => setIsRateDropdownVisible(true)}
                placeholder={t("productSelector.targetRatePlaceholder")}
                className={`w-full p-2 border rounded text-base ${selectedProduct && !targetRate ? "border-red-500 text-red-500" : "border-gray-300"}`}
              />
              {isRateDropdownVisible && (
                <div
                  ref={rateDropdownRef}
                  className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg"
                >
                  {targetRates.map((rate) => (
                    <div
                      key={rate}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-base"
                      onClick={() => {
                        setTargetRate(rate.toString());
                        setIsRateDropdownVisible(false);
                      }}
                    >
                      {rate}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-1/4 flex justify-end items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoExpand}
                onChange={() => setAutoExpand(!autoExpand)}
                className="mr-2"
              />
              <span className="text-base">{t("Auto expand")}</span>
            </label>
          </div>
        </div>

        {selectedProduct && !targetRate && (
          <div className="mb-2 text-red-500 text-sm text-center">
            {t("productSelector.rateReminder")}
          </div>
        )}
      </div>

      {recipeTree && (
        <div className="flex-grow flex flex-col overflow-hidden">
          <div className="flex-grow overflow-y-auto">
            <RecipeTreeComponent
              node={recipeTree.root}
              autoExpand={autoExpand}
              onRecipeChange={handleRecipeChange}
              favoriteRecipes={favoriteRecipes}
            />
          </div>
          {totals && (
            <TotalComponent
              inputs={totals.inputs}
              outputs={totals.outputs}
              netInputs={totals.netInputs}
              netOutputs={totals.netOutputs}
            />
          )}
        </div>
      )}
    </div>
  );
}
