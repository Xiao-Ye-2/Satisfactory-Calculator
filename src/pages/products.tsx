import { ProductClass } from '@/models/Product';
import { productList } from '@/config/products';
import ProductSection from '@/components/ProductSection';


const ProductPage: React.FC = () => {
    const initialCategories = {
        Ores: productList.filter((product: ProductClass) =>
            product.isIngredient && !['Water', 'Crude Oil', 'Ficsit Coupon', 'Leaves', 'Mycelia', 'Wood'].includes(product.name)
        ),
        Ingots: productList.filter((product: ProductClass) => product.id.includes('Ingot')),
        Minerals: productList.filter((product: ProductClass) =>
            ['Concrete', 'Quartz Crystal', 'Silica', 'Copper Powder', 'Polymer Resin', 'Petroleum Coke', 'Aluminum Scrap'].includes(product.name)
        ),
        Aliens: productList.filter((product: ProductClass) =>
            ['Alien Protein', 'Alien DNA Capsule'].includes(product.name)
        ),
        Nuclear: productList.filter((product: ProductClass) => product.id.includes('Nuclear') || product.id.includes('Uranium')),
        Spelevator: productList.filter((product: ProductClass) => product.id.includes('Spelevator')),
    };

    const otherProducts = productList.filter((product: ProductClass) =>
        !Object.values(initialCategories).some((category) =>
            category.includes(product)
        )
    );

    const productCategories = {
        ...initialCategories,
        Other: otherProducts,
    };

    return (
        <div className="p-4">
        {Object.entries(productCategories).map(([sectionName, sectionProducts]) => (
            sectionProducts.length > 0 && (
            <ProductSection
                key={sectionName}
                sectionName={sectionName}
                sectionProducts={sectionProducts}
                headingClass='text-3xl font-extrabold mb-4 text-gray-800 shadow-md p-2 rounded-lg bg-gray-100'
            />
            )
        ))}
        </div>
    );
};

export default ProductPage;
