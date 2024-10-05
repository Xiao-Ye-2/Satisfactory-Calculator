import { MachineClass } from "@/models/Machine";
import { Machine } from "@/models/types";

export const machines = [
    {
      "id": "assembler",
      "name": "Assembler",
      "basePower": 15
    },
    {
      "id": "smelter",
      "name": "Smelter",
      "basePower": 20
    }
] as MachineClass[];