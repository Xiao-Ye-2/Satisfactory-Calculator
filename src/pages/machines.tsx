import { machineList } from "@/config/items";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function MachinesPage() {
  const { t } = useTranslation();

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-900 py-8">
        {t("Machines")}
      </h1>
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
          {[...machineList.values()].map((machine) => (
            <div
              key={machine.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-xl"
            >
              <div className="p-6">
                <Image
                  src={`/machines/${machine.id}.png`}
                  alt={t(machine.id)}
                  width={200}
                  height={200}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{t(machine.id)}</h3>
                <p className="text-sm text-gray-600 mb-1">ID: {machine.id}</p>
                <p className="text-sm text-gray-600">
                  {t("Base Power")}: {machine.basePower}W
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
