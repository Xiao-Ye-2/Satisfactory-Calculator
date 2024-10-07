import { machineList } from "@/config/items";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function MachinesPage() {
  const { t } = useTranslation();

  return (
    <div className="h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto p-6 h-full overflow-y-auto">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
          {t("Machines")}
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...machineList.values()].map((machine) => (
            <li
              key={machine.id}
              className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out hover:shadow-xl"
            >
              <Image
                src={`/machines/${machine.id}.png`}
                alt={t(machine.id)}
                width={500}
                height={500}
                className="w-full mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{t(machine.id)}</h3>
              <p className="text-gray-600">ID: {machine.id}</p>
              <p className="text-gray-600">
                {t("Base Power")}: {machine.basePower}W
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
