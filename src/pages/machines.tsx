import { machineList } from '@/config/machines';

export default function MachinesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Machines</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...machineList.values()].map((machine) => (
            <li key={machine.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={`machines/${machine.id}.png`} alt={machine.name} className="w-full mb-4" />
              <h3 className="text-lg font-medium">{machine.name}</h3>
              <p className="text-gray-600">ID: {machine.id}</p>
              <p className="text-gray-600">Base Power: {machine.basePower}W</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
