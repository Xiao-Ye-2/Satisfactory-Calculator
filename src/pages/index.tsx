import { machineList } from '@/config/machines';
import { recipeMap } from '@/config/maps';

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="max-w-7xl mx-auto p-6"> {/* Adjusted max-w to max-w-7xl and reduced padding */}
				<h1 className="text-4xl font-bold text-center text-red-600 mb-8">Satisfactory Recipe Calculator</h1>
			</div>
		</div>
	);
}
