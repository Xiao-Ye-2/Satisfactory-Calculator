import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { RecipeClass } from "@/models/Recipe";
import { useTranslation } from "react-i18next";
import { formatQuantity } from "@/utils/formatQuantity";

interface CustomRecipeSelectProps {
  recipes: RecipeClass[];
  selectedRecipe: RecipeClass | null;
  onSelect: (recipe: RecipeClass) => void;
}

export const CustomRecipeSelect: React.FC<CustomRecipeSelectProps> = ({
  recipes,
  selectedRecipe,
  onSelect,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderRecipeContent = (recipe: RecipeClass) => (
    <div className="flex items-center justify-between w-full">
      <span>{t(`${recipe.id}`)}</span>
      <div className="flex items-center">
        {recipe.inputs.map((input, index) => (
          <React.Fragment key={index}>
            <span className="mr-1">{formatQuantity(input.quantity)}</span>
            <Image
              src={input.product.imagePath}
              alt={input.product.name}
              width={16}
              height={16}
            />
            {index < recipe.inputs.length - 1 && (
              <span className="mx-1">+</span>
            )}
          </React.Fragment>
        ))}
        <div className="relative mx-2">
          <span className="text-gray-400">➔</span>
        </div>
        {recipe.outputs.map((output, index) => (
          <React.Fragment key={index}>
            <span className="mr-1">{formatQuantity(output.quantity)}</span>
            <Image
              src={output.product.imagePath}
              alt={output.product.name}
              width={16}
              height={16}
            />
            {index < recipe.outputs.length - 1 && (
              <span className="mx-1">+</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="flex items-center justify-between p-2 border border-gray-300 rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedRecipe ? (
          renderRecipeContent(selectedRecipe)
        ) : (
          <span>{t("Select recipe")}</span>
        )}
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelect(recipe);
                setIsOpen(false);
              }}
            >
              {renderRecipeContent(recipe)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
