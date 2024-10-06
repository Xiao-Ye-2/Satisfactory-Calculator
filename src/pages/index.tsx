import { machineList } from '@/config/machines';
import { recipeMap } from '@/config/maps';

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="max-w-7xl mx-auto p-6"> {/* Adjusted max-w to max-w-7xl and reduced padding */}
				<h1 className="text-4xl font-bold text-center text-red-600 mb-8">Satisfactory Recipe Calculator</h1>

				<div className="mb-10">
					{/* <ProductSection
						key="Products"
						sectionName="Products"
						sectionProducts={productList}
						headingClass='text-2xl font-semibold mb-4'
					/> */}
				</div>

				<div className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">Machines</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[...machineList.values()].map((machine) => (
							<li key={machine.id} className="bg-white rounded-lg shadow-md p-4">
								<h3 className="text-lg font-medium">{machine.name}</h3>
								<p className="text-gray-600">ID: {machine.id}</p>
								<p className="text-gray-600">Base Power: {machine.basePower}W</p>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-semibold mb-4">Recipes</h2>
					<ul className="space-y-6">
						{[...recipeMap.entries()].map(([productId, recipes]) => (
							<li key={productId} className="bg-white rounded-lg shadow-md p-4">
								<h3 className="text-lg font-medium">Recipes for {productId}</h3>
								<ul className="mt-2">
									{recipes.map((recipe) => (
										<li key={recipe.id} className="mb-4">
											<div className="flex items-center justify-between">
												<div className="w-1/4 flex">
													<p className="font-semibold">{recipe.id}:</p>
												</div>
												<div className="flex items-center w-full">
													<ul className="list-none flex space-x-2 flex-grow w-2/5 pr-2">
														{recipe.inputs.map((prodQuant) => (
															<li key={prodQuant.product.id} className="flex items-center">
																<img src={prodQuant.product.imagePath} alt={prodQuant.product.name} className="w-6 h-6 mr-2" />
																{prodQuant.product.name} ({prodQuant.quantity})
															</li>
														))}
													</ul>
													<span className="text-gray-600 text-center w-1/12"> ➔ </span>
													<ul className="list-none flex space-x-2 flex-grow w-1/4 pl-2">
														{recipe.outputs.map((prodQuant) => (
															<li key={prodQuant.product.id} className="flex items-center">
																<img src={prodQuant.product.imagePath} alt={prodQuant.product.name} className="w-6 h-6 mr-2" />
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
		</div>
	);
}
