import { MachineClass } from "@/models/Machine";

export const machineList = [
  {
    id: "Constructor",
    name: "Constructor",
    basePower: 4,
  },
  {
    id: "Smelter",
    name: "Smelter",
    basePower: 4,
  },
  {
    id: "Foundry",
    name: "Foundry",
    basePower: 16,
  },
  {
    id: "Assembler",
    name: "Assembler",
    basePower: 15,
  },
  {
    id: "Manufacturer",
    name: "Manufacturer",
    basePower: 55,
  },
  {
    id: "OilRefinery",
    name: "OilRefinery",
    basePower: 30,
  },
  {
    id: "Blender",
    name: "Blender",
    basePower: 75,
  },
  {
    id: "Packager",
    name: "Packager",
    basePower: 10,
  },
  {
    id: "HadronCollider",
    name: "Hadron Collider",
    basePower: 500,
  },
  {
    id: "QuantumEncoder",
    name: "Quantum Encoder",
    basePower: 1000,
  },
  {
    id: "Converter",
    name: "Converter",
    basePower: 250,
  },
] as MachineClass[];
