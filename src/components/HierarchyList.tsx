// import { Recipe } from '../models/types';

// interface HierarchyListProps {
// 	recipes: Recipe[];
// }

// export const HierarchyList: React.FC<HierarchyListProps> = ({ recipes }) => {
// 	const totalPower = recipes.reduce((sum, recipe) => sum + 100000, 0);

// 	return (
// 		<div>
// 		<h2>Steps</h2>
// 		<ol>
// 			{recipes.map((recipe, index) => (
// 			<li key={index}>
// 				{recipe.outputs[0].product.name} - Machine: {recipe.machine.name}, Power: {100000} kW
// 				(Efficiency: {100000 * 100}%)
// 			</li>
// 			))}
// 		</ol>
// 		<p>Total Power Consumption: {totalPower.toFixed(2)} kW</p>
// 		</div>
// 	);
// };
