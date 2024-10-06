import Image from 'next/image';
import { recipeMap } from '@/config/maps';

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Recipes</h1>
        <ul className="space-y-6">
          {[...recipeMap.entries()].map(([productId, recipes]) => (
            <li key={productId} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-medium">Recipes for {productId}</h3>
              <ul className="mt-2">
                {recipes.map((recipe) => (
                  <li key={recipe.id} className="mb-4">
                    <div className="flex items-center justify-between">
                      <div className="w-1/4 flex">
                        <p className="font-semibold">{recipe.name}:</p>
                      </div>
                      <div className="flex items-center w-full">
                        <ul className="list-none flex space-x-2 flex-grow w-2/5 pr-2">
                          {recipe.inputs.map((prodQuant) => (
                            <li key={prodQuant.product.id} className="flex items-center">
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
                          {recipe.outputs.map((prodQuant) => (
                            <li key={prodQuant.product.id} className="flex items-center">
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
