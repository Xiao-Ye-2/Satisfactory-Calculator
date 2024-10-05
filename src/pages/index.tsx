import { useEffect, useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { products } from '@/config/products';
import { recipes } from '@/config/recipes';
import { machines } from '@/config/machines';


export default function Home() {
	return (
		<div>
			<TopBar />
			<h1>Satisfactory Recipe Calculator</h1>
			<div>
				{/* Example: Show loaded products */}
				<ul>
					{[...products.values()].map((product) => (
						<li key={product.id}>{product.name} {product.id} {product.isIngredient} {product.imagePath}</li>
					))}
				</ul>
			</div>
			<h1> Machines </h1>
			<div>
				{/* Example: Show loaded products */}
				<ul>
					{[...machines.values()].map((machine) => (
						<li key={machine.id}>{machine.name} {machine.id} {machine.basePower}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

