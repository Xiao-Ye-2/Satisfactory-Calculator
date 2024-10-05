import { useEffect, useState } from 'react';
import { ProductClass } from '../models/Product';
import { RecipeClass } from '../models/Recipe';

interface TreeGraphProps {
	productMap: Map<string, ProductClass>;
	recipeMap: Map<string, RecipeClass[]>;
}

export const TreeGraph: React.FC<TreeGraphProps> = ({ productMap, recipeMap }) => {
	const [selectedProduct, setSelectedProduct] = useState<ProductClass | null>(null);
	const [inputQuantity, setInputQuantity] = useState<number>(1);
	const [isMounted, setIsMounted] = useState<boolean>(false); // Track component mount state
	const [hierarchy, setHierarchy] = useState<any[]>([]); // Store the computed hierarchy

	useEffect(() => {
		// This will only run on the client
		setIsMounted(true);
	}, []);

	const handleProductSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const productId = e.target.value;
		const product = productMap.get(productId) || null;
		setSelectedProduct(product);
	};

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputQuantity(parseInt(e.target.value, 10));
	};

	const calculateHierarchy = (product: ProductClass, quantity: number, level = 0) => {
		const node = {
			product,
			quantity,
			level,
		};

		const defaultRecipe = recipeMap.get(product.id)?.find((r) => r.isDefault);

		if (defaultRecipe) {
			const children = defaultRecipe.inputs.map((input) => {
				const childProduct = input.product;
				const childQuantity = (input.quantity / defaultRecipe.outputs[0].quantity) * quantity;
				return calculateHierarchy(childProduct, childQuantity, level + 1);
			});
			return { ...node, children };
		}
		return { ...node, children: [] }; // Ingredient product with no further recipes
	};

	const handleComputeHierarchy = () => {
		if (selectedProduct) {
			const computedHierarchy = calculateHierarchy(selectedProduct, inputQuantity);
			setHierarchy([computedHierarchy]); // Store the computed hierarchy in state
		}
	};

	const renderHierarchy = (node: any) => {
		return (
			<div key={node.product.id} style={{ marginLeft: `${node.level * 20}px` }}>
				{node.product.name} - {node.quantity}
				{node.children?.length > 0 && node.children.map(renderHierarchy)}
			</div>
		);
	};

	// Render nothing if not mounted to avoid hydration issues
	if (!isMounted) {
		return null;
	}

	return (
		<div>
			<h2>Recipe Hierarchy</h2>
			<select onChange={handleProductSelect} value={selectedProduct?.id || ''}>
				<option value="">Select a Product</option>
				{Array.from(productMap.values()).map((product) => (
					<option key={product.id} value={product.id}>
						{product.name}
					</option>
				))}
			</select>

			<input
				type="number"
				value={inputQuantity}
				onChange={handleQuantityChange}
				placeholder="Enter quantity"
			/>

			<button onClick={handleComputeHierarchy}>Compute Hierarchy</button>

			{/* Display the computed hierarchy */}
			<div>{hierarchy.map(renderHierarchy)}</div>
		</div>
	);
};
