import { TopBar } from '@/components/TopBar';
import { productList } from '@/config/products';
import { machineList } from '@/config/machines';
import { recipeMap } from '@/config/maps';


export default function Home() {
	return (
		<div>
			<TopBar />
			<h1>Satisfactory Recipe Calculator</h1>
			<div>
				<h1>Products</h1>
				<ul>
					{[...productList.values()].map((product) => (
						<li key={product.id}>
							{product.name} {product.id} {product.isIngredient ? 'Ingredient' : 'Product'} {product.imagePath}
						</li>
					))}
				</ul>

			</div>
			<div>
				<h1>Machines</h1>
				<ul>
					{[...machineList.values()].map((machine) => (
						<li key={machine.id}>
							{machine.name} {machine.id} {machine.basePower}
						</li>
					))}
				</ul>
			</div>
			<h1>Recipes</h1>
			<div>
				<ul>
					{[...recipeMap.entries()].map(([productId, recipes]) => (
						<div key={productId}>
							<h2>Recipes for {productId}</h2>
							<ul>
								{recipes.map((recipe) => (
									<li key={recipe.id}>
										Recipe ID: {recipe.id} - Machine: {recipe.machine.name}
										<br />
										Inputs:
										<br />
										{recipe.inputs.map((prodQuant) => (
											<span key={prodQuant.product.id}>
												{prodQuant.product.name} ({prodQuant.quantity})
											</span>
										))}
										<br />
										Outputs:
										<br />
										{recipe.outputs.map((prodQuant) => (
											<span key={prodQuant.product.id}>
												{prodQuant.product.name} ({prodQuant.quantity})
											</span>
										))}
									</li>
								))}
							</ul>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
}

