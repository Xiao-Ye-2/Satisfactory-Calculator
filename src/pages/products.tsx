import { ProductClass } from "@/models/Product";
import { products } from '@/config/products';

const ProductPage: React.FC = () => {
  const productCategories = {
    Ingredients: products.filter((product: ProductClass) => product.isIngredient),
    Others: products.filter((product: ProductClass) => !product.isIngredient),
  };

  return (
    <div className="p-4">
      {Object.entries(productCategories).map(
        ([sectionName, sectionProducts]) =>
          sectionProducts.length > 0 && (
            <div key={sectionName}>
              <h2 className="text-xl font-semibold mb-4">{sectionName}</h2>
              <div className="grid grid-cols-3 gap-4">
                {sectionProducts.map((product: ProductClass) => (
                  <div key={product.id} className="border rounded-md p-4 shadow-md">
                    <img
                      src={product.imagePath}
                      alt={product.name}
                      className="w-full h-32 object-cover mb-2"
                    />
                    <h3 className="text-lg font-medium">{product.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProductPage;
