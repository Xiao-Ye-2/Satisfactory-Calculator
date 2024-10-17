import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { productList } from "@/config/items";
import { formatQuantity } from "@/utils/formatQuantity";

interface TotalComponentProps {
  inputs: Map<string, number>;
  outputs: Map<string, number>;
  netInputs: Map<string, number>;
  netOutputs: Map<string, number>;
}

export const TotalComponent: React.FC<TotalComponentProps> = ({
  inputs,
  outputs,
  netInputs,
  netOutputs,
}) => {
  const { t } = useTranslation();

  const renderItems = (
    items: Map<string, number> | undefined,
    title: string,
  ) => (
    <div className="w-1/4 px-2">
      <h3 className="text-md font-medium mb-2">{t(title)}</h3>
      <div className="grid grid-cols-2 gap-2">
        {items &&
          Array.from(items).map(([product, quantity]) => (
            <div key={product} className="flex items-center mb-2">
              <Image
                src={`${productList.find((p) => p.id === product)?.imagePath || ""}`}
                alt={t(product)}
                width={24}
                height={24}
                className="mr-2"
              />
              <span>
                {t(product)}: {formatQuantity(quantity)}
              </span>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div
      className="border-t pt-4 text-sm overflow-y-auto"
      style={{ minHeight: "13vh", maxHeight: "25vh" }}
    >
      <div className="flex px-4 flex-wrap">
        {renderItems(inputs, "Inputs")}
        {renderItems(outputs, "Outputs")}
        {renderItems(netInputs, "Net Inputs")}
        {renderItems(netOutputs, "Net Outputs")}
      </div>
    </div>
  );
};
