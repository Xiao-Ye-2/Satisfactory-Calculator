import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { productList } from "@/config/items";
import { ProductClass } from "@/models/Product";
import { SearchDropdown } from "@/components/SearchDropDown";
import { RecipeTree, RecipeTreeNode } from "@/models/RecipeTree";
import { RecipeTreeComponent } from "@/components/RecipeTreeComponent";

export default function ProductSelector() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<ProductClass | null>(null);
  const [targetRate, setTargetRate] = useState<string>("");
  const [isRateDropdownVisible, setIsRateDropdownVisible] = useState<boolean>(false);
  const [autoExpand, setAutoExpand] = useState<boolean>(true);
  const [recipeTree, setRecipeTree] = useState<RecipeTree | null>(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState<Map<string, string>>(new Map());

  const rateDropdownRef = useRef<HTMLDivElement>(null);
  const targetRates = [1, 2, 5, 10, 15, 30, 60, 120, 180, 300, 480, 600, 720];

  const filteredProducts = productList.filter((product) => !product.isIngredient);

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

  const handleRecipeChange = (updatedNode: RecipeTreeNode, changeType: 'current' | 'all' | 'favorite' | 'unfavorite' | 'delete') => {
    if (recipeTree) {
      const updateNodeRecursively = (node: RecipeTreeNode, updatedNode: RecipeTreeNode) => {
        if (node.product.id === updatedNode.product.id && (changeType === 'all' || changeType === 'favorite' || changeType === 'unfavorite' || node === updatedNode)) {
          node.recipe = updatedNode.recipe;
          node.children = updatedNode.children;
          if (changeType !== 'delete') {
            node.updateQuantities(node.quantity);
          }
        }
        node.children.forEach(child => updateNodeRecursively(child, updatedNode));
      };
      updateNodeRecursively(recipeTree.root, updatedNode);

      if (changeType === 'favorite' || changeType === 'unfavorite') {
        const newFavoriteRecipes = new Map(favoriteRecipes);
        if (changeType === 'favorite') {
          newFavoriteRecipes.set(updatedNode.product.id, updatedNode.recipe?.id || '');
        } else {
          newFavoriteRecipes.delete(updatedNode.product.id);
        }
        setFavoriteRecipes(newFavoriteRecipes);
      }

      setRecipeTree({ ...recipeTree, expandAll: recipeTree.expandAll });
    }
  };

  useEffect(() => {
    if (recipeTree) {
      console.log("RecipeTree 更新");
    }
  }, [recipeTree]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">
        {t("productSelector.title")}
      </h1>

      <div className="flex space-x-4 mb-4 items-center">
        <div className="w-1/3 flex items-center">
          {selectedProduct && (
            <Image
              src={selectedProduct.imagePath}
              alt={t(selectedProduct.id)}
              width={32}
              height={32}
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

        <div className="w-1/3 relative">
          <input
            type="text"
            value={targetRate}
            onChange={(e) => setTargetRate(e.target.value)}
            onFocus={() => setIsRateDropdownVisible(true)}
            placeholder={t("productSelector.targetRatePlaceholder")}
            className={`w-full p-2 border rounded ${selectedProduct && !targetRate ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
          />
          {isRateDropdownVisible && (
            <div ref={rateDropdownRef} className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
              {targetRates.map((rate) => (
                <div
                  key={rate}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
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

        <div className="w-1/3 flex justify-end items-center">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={autoExpand}
              onChange={() => setAutoExpand(!autoExpand)}
              className="mr-2"
            />
            <span className="text-sm">{t("Auto expand")}</span>
          </label>
        </div>
      </div>

      {selectedProduct && !targetRate && (
        <div className="mb-4 text-red-500">
          {t("productSelector.rateReminder")}
        </div>
      )}

      {recipeTree && (
        <div className="mt-4 h-[calc(100vh-200px)] w-full overflow-y-auto">
          <RecipeTreeComponent
            node={recipeTree.root}
            autoExpand={autoExpand}
            onRecipeChange={handleRecipeChange}
            favoriteRecipes={favoriteRecipes}
          />
        </div>
      )}
    </div>
  );
}
