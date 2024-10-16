import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RecipeTreeNode } from '@/models/RecipeTree';
import { RecipeClass } from '@/models/Recipe';
import { recipeMap } from '@/config/items';
import { useTranslation } from 'react-i18next';

interface RecipeTreeComponentProps {
  node: RecipeTreeNode;
  autoExpand: boolean;
  onRecipeChange: (node: RecipeTreeNode, changeType: 'current' | 'all' | 'favorite' | 'unfavorite' | 'delete') => void;
  favoriteRecipes: Map<string, string>;
}

export const RecipeTreeComponent: React.FC<RecipeTreeComponentProps> = ({ node, autoExpand, onRecipeChange, favoriteRecipes }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(node.recipe !== null);

  useEffect(() => {
    setExpanded(autoExpand || node.recipe !== null);
  }, [autoExpand, node.recipe]);

  const handleExpand = () => {
    if (!expanded && !node.product.isIngredient) {
      node.expand(autoExpand, favoriteRecipes);
    }
    setExpanded(!expanded);
  };

  const handleRecipeChange = (recipe: RecipeClass | null, changeType: 'current' | 'all' | 'favorite' | 'unfavorite' | 'delete') => {
    if (changeType === 'delete') {
      node.recipe = null;
      node.children = [];
    } else {
      node.setRecipe(recipe!);
    }
    setExpanded(changeType !== 'delete');
    if (changeType !== 'delete') {
      node.children.forEach(child => child.expand(autoExpand, favoriteRecipes));
    }
    onRecipeChange(node, changeType);
  };

  const formatQuantity = (quantity: number): string => {
    if (Number.isInteger(quantity)) {
      return quantity.toString();
    }
    const fixed = quantity.toFixed(5);
    const trimmed = fixed.replace(/\.?0+$/, '');
    if (trimmed.length > 6) {
      return quantity.toPrecision(6);
    }
    return trimmed;
  };

  return (
    <div className="ml-8 border-l-2 border-gray-300 pl-4 py-2">
      <div className="flex items-center">
        <Image
          src={node.product.imagePath}
          alt={t(node.product.id)}
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={handleExpand}
        />
        <span className="ml-2">{t(node.product.id)}: {formatQuantity(node.quantity)}</span>
      </div>
      {!node.product.isIngredient && recipeMap.get(node.product.id) && (
        <div className="mt-2 flex items-center space-x-2">
          <select
            className="flex-grow p-2 border border-gray-300 rounded"
            value={node.recipe?.id || ''}
            onChange={(e) => {
              const recipe = recipeMap.get(node.product.id)?.find(r => r.id === e.target.value);
              if (recipe) handleRecipeChange(recipe, 'current');
            }}
          >
            <option value="" disabled className="bg-gray-200">
              {t('Select recipe')}
            </option>
            {recipeMap.get(node.product.id)?.map(recipe => (
              <option key={recipe.id} value={recipe.id} className={recipe.id === node.recipe?.id ? 'bg-gray-200' : ''}>
                {t(`${recipe.id}`)}
              </option>
            ))}
          </select>
          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => {
              if (node.recipe) handleRecipeChange(node.recipe, 'all');
            }}
          >
            {t('replaceAll')}
          </button>
          <button
            className={`p-2 ${node.recipe && favoriteRecipes.get(node.product.id) === node.recipe.id ? 'bg-green-500' : 'bg-gray-300'} text-white rounded hover:bg-green-600`}
            onClick={() => {
              if (node.recipe) handleRecipeChange(node.recipe, favoriteRecipes.get(node.product.id) === node.recipe.id ? 'unfavorite' : 'favorite');
            }}
          >
            {t('setAsFavorite')}
          </button>
          <button
            className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => handleRecipeChange(null, 'delete')}
          >
            X
          </button>
        </div>
      )}
      {expanded && node.children.map((child, index) => (
        <RecipeTreeComponent key={index} node={child} autoExpand={autoExpand} onRecipeChange={onRecipeChange} favoriteRecipes={favoriteRecipes} />
      ))}
    </div>
  );
};
