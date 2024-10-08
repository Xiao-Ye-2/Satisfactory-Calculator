import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { productList } from "@/config/items";
import { ProductClass } from "@/models/Product";

export default function ProductSelector() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<ProductClass | null>(
    null,
  );
  const [targetRate, setTargetRate] = useState<string>("");
  const [isProductDropdownVisible, setIsProductDropdownVisible] =
    useState<boolean>(false);
  const [isRateDropdownVisible, setIsRateDropdownVisible] =
    useState<boolean>(false);

  const productDropdownRef = useRef<HTMLDivElement>(null);
  const rateDropdownRef = useRef<HTMLDivElement>(null);
  const targetRates = [1, 2, 5, 10, 15, 30, 60, 120, 180, 300, 480, 600, 720];

  // Filter products that are not ingredients
  const filteredProducts = productList.filter(
    (product) =>
      !product.isIngredient &&
      t(product.id).toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Handle outside clicks to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        productDropdownRef.current &&
        !productDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductDropdownVisible(false);
      }
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

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">
        {t("productSelector.title")}
      </h1>

      <div className="flex space-x-4">
        {/* Product Search Dropdown */}
        <div className="relative w-1/2" ref={productDropdownRef}>
          <div className="flex items-center">
            {selectedProduct && (
              <Image
                src={selectedProduct.imagePath}
                alt={t(selectedProduct.id)}
                className="w-8 h-8 mr-2"
                width={32}
                height={32}
              />
            )}
            <input
              type="text"
              placeholder={t("productSelector.searchPlaceholder")}
              value={searchTerm}
              onClick={() => setIsProductDropdownVisible(true)}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsProductDropdownVisible(true);
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {isProductDropdownVisible && (
            <div className="absolute w-full max-h-64 overflow-y-auto border border-gray-300 bg-white rounded-lg z-10">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      setSelectedProduct(product);
                      setSearchTerm(t(product.id));
                      setIsProductDropdownVisible(false);
                    }}
                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <Image
                      src={product.imagePath}
                      alt={t(product.id)}
                      className="w-8 h-8 mr-2"
                      width={32}
                      height={32}
                    />
                    <span>{t(product.id)}</span>
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">
                  {t("productSelector.noProductsFound")}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Rate Input Dropdown */}
        <div className="relative w-1/2" ref={rateDropdownRef}>
          <input
            type="text"
            placeholder={t("productSelector.targetRatePlaceholder")}
            value={targetRate}
            onClick={() => setIsRateDropdownVisible(!isRateDropdownVisible)}
            onChange={(e) => setTargetRate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />

          {isRateDropdownVisible && (
            <div className="absolute w-full max-h-64 overflow-y-auto border border-gray-300 bg-white rounded-lg z-10">
              {targetRates.map((rate) => (
                <div
                  key={rate}
                  onClick={() => {
                    setTargetRate(rate.toString());
                    setIsRateDropdownVisible(false);
                  }}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {rate}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
