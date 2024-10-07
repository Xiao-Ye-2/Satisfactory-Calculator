import Image from "next/image";
import { ProductClass } from "@/models/Product";

interface ProductSectionProps {
  sectionName: string;
  sectionProducts: ProductClass[];
  headingClass?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  sectionName,
  sectionProducts,
  headingClass = "text-xl font-semibold mb-4",
}) => {
  return (
    <div className="mb-4">
      {" "}
      {/* Add margin below each section */}
      <h2 className={headingClass}>{sectionName}</h2>
      <div className="flex flex-wrap gap-4">
        {sectionProducts.map((product: ProductClass) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-52 border rounded-md p-4 shadow-md"
          >
            <Image
              src={product.imagePath}
              alt={product.name}
              className="w-32 h-32 object-cover mb-2 mx-auto" // Centered image
              width={150}
              height={150}
            />
            <h3 className="text-lg font-medium text-center">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
