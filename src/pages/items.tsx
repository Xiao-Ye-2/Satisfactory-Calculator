import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ProductClass } from "@/models/Product";
import { productList } from "@/config/items";
import ProductSection from "@/components/ProductSection";

const ProductPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [translatedProducts, setTranslatedProducts] = useState<ProductClass[]>([]);

  useEffect(() => {
    const updateProducts = () => {
      const translated = productList.map((product) => ({
        ...product,
        name: t(product.id),
      }));
      setTranslatedProducts(translated);
    };

    updateProducts();
  }, [i18n.language, t]);

  const productCategories: Record<string, ProductClass[]> = {
    Ores: translatedProducts.filter(
      (product: ProductClass) =>
        product.isIngredient &&
        ![t("Water"), t("Crude Oil"), t("Ficsit Coupon"), t("Leaves"), t("Mycelia"), t("Wood")].includes(product.name),
    ),
    Ingots: translatedProducts.filter((product: ProductClass) => product.id.includes("Ingot")),
    Minerals: translatedProducts.filter((product: ProductClass) =>
      [t("Concrete"), t("Quartz Crystal"), t("Silica"), t("Copper Powder"), t("Polymer Resin"), t("Petroleum Coke"), t("Aluminum Scrap")].includes(product.name),
    ),
    Aliens: translatedProducts.filter((product: ProductClass) => [t("Alien Protein"), t("Alien DNA Capsule")].includes(product.name)),
    Nuclear: translatedProducts.filter((product: ProductClass) => product.id.includes("Nuclear") || product.id.includes("Uranium")),
    Spelevator: translatedProducts.filter((product: ProductClass) => product.id.includes("Spelevator")),
  };

  const otherProducts = translatedProducts.filter(
    (product: ProductClass) => !Object.values(productCategories).some((category) => category.includes(product)),
  );

  const allProductCategories = {
    ...productCategories,
    Other: otherProducts,
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-900 py-8">{t("Items")}</h1>
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8">
        {Object.entries(allProductCategories).map(([sectionName, sectionProducts]) =>
          sectionProducts.length > 0 && (
            <ProductSection
              key={sectionName}
              sectionName={t(sectionName)}
              sectionProducts={sectionProducts}
              headingClass="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2"
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProductPage;