import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { productList } from "@/config/items";
import { ProductClass } from "@/models/Product";
import { SearchDropdown } from "@/components/SearchDropDown";

export default function ProductSelector() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<ProductClass | null>(null);
  const [targetRate, setTargetRate] = useState<string>("");
  const [isRateDropdownVisible, setIsRateDropdownVisible] = useState<boolean>(false);

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

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">
        {t("productSelector.title")}
      </h1>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <SearchDropdown
            items={filteredProducts}
            placeholder={t("productSelector.searchPlaceholder")}
            onSelect={(product) => setSelectedProduct(product)}
            getItemName={(product) => t(product.id)}
            getItemImage={(product) => product.imagePath}
          />
        </div>

        <div className="w-1/2 relative" ref={rateDropdownRef}>
          <input
            type="text"
            value={targetRate}
            onClick={() => setIsRateDropdownVisible(true)}
            onChange={(e) => {
              setTargetRate(e.target.value);
              setIsRateDropdownVisible(true);
            }}
            placeholder={t("productSelector.targetRatePlaceholder")}
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

      {selectedProduct && (
        <div className="mt-4 flex items-center">
          <Image
            src={selectedProduct.imagePath}
            alt={t(selectedProduct.id)}
            width={32}
            height={32}
            className="mr-2"
          />
          <span>{t(selectedProduct.id)}</span>
        </div>
      )}

    </div>
  );
}
