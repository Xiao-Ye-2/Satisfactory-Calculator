import { RecipeYAML } from "@/models/types";

export const recipesYAML = [
    {
      "id": "AILimiter",
      "inputs": [
        {
          "productId": "CopperSheet",
          "quantity": 5
        },
        {
          "productId": "Quickwire",
          "quantity": 20
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "AILimiter",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_AdheredIronPlate",
      "inputs": [
        {
          "productId": "IronPlate",
          "quantity": 3
        },
        {
          "productId": "Rubber",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_AlcladCasing",
      "inputs": [
        {
          "productId": "AluminumIngot",
          "quantity": 20
        },
        {
          "productId": "CopperIngot",
          "quantity": 10
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "AluminumCasing",
          "quantity": 15
        }
      ]
    },
    {
      "id": "Alternate_Beacon_1",
      "inputs": [
        {
          "productId": "SteelBeam",
          "quantity": 4
        },
        {
          "productId": "SteelPipe",
          "quantity": 16
        },
        {
          "productId": "CrystalOscillator",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "Beacon",
          "quantity": 20
        }
      ]
    },
    {
      "id": "Alternate_BoltedFrame",
      "inputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 3
        },
        {
          "productId": "IronScrew",
          "quantity": 56
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "ModularFrame",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_Cable_1",
      "inputs": [
        {
          "productId": "Wire",
          "quantity": 9
        },
        {
          "productId": "Rubber",
          "quantity": 6
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Cable",
          "quantity": 20
        }
      ]
    },
    {
      "id": "Alternate_Cable_2",
      "inputs": [
        {
          "productId": "Quickwire",
          "quantity": 3
        },
        {
          "productId": "Rubber",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Cable",
          "quantity": 11
        }
      ]
    },
    {
      "id": "Alternate_CircuitBoard_1",
      "inputs": [
        {
          "productId": "CopperSheet",
          "quantity": 11
        },
        {
          "productId": "Silica",
          "quantity": 11
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "CircuitBoard",
          "quantity": 5
        }
      ]
    },
    {
      "id": "Alternate_CircuitBoard_2",
      "inputs": [
        {
          "productId": "Plastic",
          "quantity": 10
        },
        {
          "productId": "Quickwire",
          "quantity": 30
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "CircuitBoard",
          "quantity": 7
        }
      ]
    },
    {
      "id": "Alternate_ClassicBattery",
      "inputs": [
        {
          "productId": "Sulfur",
          "quantity": 6
        },
        {
          "productId": "AluminumPlate",
          "quantity": 7
        },
        {
          "productId": "Plastic",
          "quantity": 8
        },
        {
          "productId": "Wire",
          "quantity": 12
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "Battery",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Alternate_Coal_1",
      "inputs": [
        {
          "productId": "Wood",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Coal",
          "quantity": 10
        }
      ]
    },
    {
      "id": "Alternate_Coal_2",
      "inputs": [
        {
          "productId": "Biomass",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Coal",
          "quantity": 6
        }
      ]
    },
    {
      "id": "Alternate_CoatedCable",
      "inputs": [
        {
          "productId": "Wire",
          "quantity": 5
        },
        {
          "productId": "HeavyOilResidue",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Cable",
          "quantity": 9
        }
      ]
    },
    {
      "id": "Alternate_CoatedIronCanister",
      "inputs": [
        {
          "productId": "IronPlate",
          "quantity": 2
        },
        {
          "productId": "CopperSheet",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "EmptyCanister",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Alternate_CoatedIronPlate",
      "inputs": [
        {
          "productId": "IronIngot",
          "quantity": 10
        },
        {
          "productId": "Plastic",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "IronPlate",
          "quantity": 15
        }
      ]
    },
    {
      "id": "Alternate_CokeSteelIngot",
      "inputs": [
        {
          "productId": "Iron",
          "quantity": 15
        },
        {
          "productId": "PetroleumCoke",
          "quantity": 15
        }
      ],
      "isDefault": false,
      "machineId": "Foundry",
      "outputs": [
        {
          "productId": "SteelIngot",
          "quantity": 20
        }
      ]
    },
    {
      "id": "Alternate_Computer_1",
      "inputs": [
        {
          "productId": "CircuitBoard",
          "quantity": 7
        },
        {
          "productId": "Quickwire",
          "quantity": 28
        },
        {
          "productId": "Rubber",
          "quantity": 12
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "Computer",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_Computer_2",
      "inputs": [
        {
          "productId": "CircuitBoard",
          "quantity": 8
        },
        {
          "productId": "CrystalOscillator",
          "quantity": 3
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Computer",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Alternate_Concrete",
      "inputs": [
        {
          "productId": "Silica",
          "quantity": 3
        },
        {
          "productId": "Limestone",
          "quantity": 12
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Concrete",
          "quantity": 10
        }
      ]
    },
    {
      "id": "Alternate_CoolingDevice",
      "inputs": [
        {
          "productId": "HeatSink",
          "quantity": 5
        },
        {
          "productId": "Motor",
          "quantity": 1
        },
        {
          "productId": "NitrogenGas",
          "quantity": 24
        }
      ],
      "isDefault": false,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "CoolingSystem",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_CopperAlloyIngot",
      "inputs": [
        {
          "productId": "Copper",
          "quantity": 10
        },
        {
          "productId": "Iron",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "machineId": "Foundry",
      "outputs": [
        {
          "productId": "CopperIngot",
          "quantity": 20
        }
      ]
    },
    {
      "id": "Alternate_CopperRotor",
      "inputs": [
        {
          "productId": "CopperSheet",
          "quantity": 6
        },
        {
          "productId": "IronScrew",
          "quantity": 52
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Rotor",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Alternate_CrystalOscillator",
      "inputs": [
        {
          "productId": "RawQuartz",
          "quantity": 10
        },
        {
          "productId": "Rubber",
          "quantity": 7
        },
        {
          "productId": "AILimiter",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "CrystalOscillator",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_DilutedFuel",
      "inputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 5
        },
        {
          "productId": "Water",
          "quantity": 10
        }
      ],
      "isDefault": false,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "Fuel",
          "quantity": 10
        }
      ]
    },
    {
      "id": "Alternate_DilutedPackagedFuel",
      "inputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 1
        },
        {
          "productId": "PackagedWater",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Fuel",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_ElectricMotor",
      "inputs": [
        {
          "productId": "ElectromagneticControlRod",
          "quantity": 1
        },
        {
          "productId": "Rotor",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Motor",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_ElectroAluminumScrap",
      "inputs": [
        {
          "productId": "Alumina",
          "quantity": 12
        },
        {
          "productId": "PetroleumCoke",
          "quantity": 4
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "AluminumScrap",
          "quantity": 20
        },
        {
          "productId": "Water",
          "quantity": 7
        }
      ]
    },
    {
      "id": "Alternate_ElectrodeCircuitBoard",
      "inputs": [
        {
          "productId": "Rubber",
          "quantity": 6
        },
        {
          "productId": "PetroleumCoke",
          "quantity": 9
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "CircuitBoard",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_ElectromagneticControlRod_1",
      "inputs": [
        {
          "productId": "Stator",
          "quantity": 2
        },
        {
          "productId": "HighSpeedConnector",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "ElectromagneticControlRod",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_EncasedIndustrialBeam",
      "inputs": [
        {
          "productId": "SteelPipe",
          "quantity": 7
        },
        {
          "productId": "Concrete",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "EncasedSteelBeam",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_EnrichedCoal",
      "inputs": [
        {
          "productId": "Coal",
          "quantity": 5
        },
        {
          "productId": "Sulfur",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "CompactedCoal",
          "quantity": 5
        }
      ]
    },
    {
      "id": "Alternate_FertileUranium",
      "inputs": [
        {
          "productId": "Uranium",
          "quantity": 5
        },
        {
          "productId": "NuclearWaste",
          "quantity": 5
        },
        {
          "productId": "NitricAcid",
          "quantity": 3
        },
        {
          "productId": "SulfuricAcid",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "NonFissileUranium",
          "quantity": 20
        },
        {
          "productId": "Water",
          "quantity": 8
        }
      ]
    },
    {
      "id": "Alternate_FlexibleFramework",
      "inputs": [
        {
          "productId": "ModularFrame",
          "quantity": 1
        },
        {
          "productId": "SteelBeam",
          "quantity": 6
        },
        {
          "productId": "Rubber",
          "quantity": 8
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_2",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_FusedWire",
      "inputs": [
        {
          "productId": "CopperIngot",
          "quantity": 4
        },
        {
          "productId": "CateriumIngot",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Wire",
          "quantity": 30
        }
      ]
    },
    {
      "id": "Alternate_Gunpowder_1",
      "inputs": [
        {
          "productId": "Sulfur",
          "quantity": 2
        },
        {
          "productId": "CompactedCoal",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Gunpowder",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Alternate_HeatFusedFrame",
      "inputs": [
        {
          "productId": "ModularFrameHeavy",
          "quantity": 1
        },
        {
          "productId": "AluminumIngot",
          "quantity": 50
        },
        {
          "productId": "NitricAcid",
          "quantity": 8
        },
        {
          "productId": "Fuel",
          "quantity": 10
        }
      ],
      "isDefault": false,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "FusedModularFrame",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_HeatSink_1",
      "inputs": [
        {
          "productId": "AluminumCasing",
          "quantity": 3
        },
        {
          "productId": "Rubber",
          "quantity": 3
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "HeatSink",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_HeavyFlexibleFrame",
      "inputs": [
        {
          "productId": "ModularFrame",
          "quantity": 5
        },
        {
          "productId": "EncasedSteelBeam",
          "quantity": 3
        },
        {
          "productId": "Rubber",
          "quantity": 20
        },
        {
          "productId": "IronScrew",
          "quantity": 104
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "ModularFrameHeavy",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_HeavyOilResidue",
      "inputs": [
        {
          "productId": "Oil",
          "quantity": 3
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 4
        },
        {
          "productId": "PolymerResin",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_HighSpeedConnector",
      "inputs": [
        {
          "productId": "Quickwire",
          "quantity": 60
        },
        {
          "productId": "Silica",
          "quantity": 25
        },
        {
          "productId": "CircuitBoard",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "HighSpeedConnector",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_HighSpeedWiring",
      "inputs": [
        {
          "productId": "Stator",
          "quantity": 2
        },
        {
          "productId": "Wire",
          "quantity": 40
        },
        {
          "productId": "HighSpeedConnector",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_3",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Alternate_IngotIron",
      "inputs": [
        {
          "productId": "Iron",
          "quantity": 2
        },
        {
          "productId": "Copper",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "Foundry",
      "outputs": [
        {
          "productId": "IronIngot",
          "quantity": 5
        }
      ]
    },
    {
      "id": "Alternate_IngotSteel_1",
      "inputs": [
        {
          "productId": "IronIngot",
          "quantity": 2
        },
        {
          "productId": "Coal",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "Foundry",
      "outputs": [
        {
          "productId": "SteelIngot",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Alternate_IngotSteel_2",
      "inputs": [
        {
          "productId": "Iron",
          "quantity": 6
        },
        {
          "productId": "CompactedCoal",
          "quantity": 3
        }
      ],
      "isDefault": false,
      "machineId": "Foundry",
      "outputs": [
        {
          "productId": "SteelIngot",
          "quantity": 10
        }
      ]
    },
    {
      "id": "Alternate_EncasedPlutoniumCell",
      "inputs": [
        {
          "productId": "NonFissileUranium",
          "quantity": 150
        },
        {
          "productId": "AluminumCasing",
          "quantity": 20
        }
      ],
      "isDefault": false,
      "machineId": "ParticleAcceleratorLowPower",
      "outputs": [
        {
          "productId": "EncasedPlutoniumCell",
          "quantity": 20
        }
      ]
    },
    {
      "id": "Alternate_InstantScrap",
      "inputs": [
        {
          "productId": "Bauxite",
          "quantity": 15
        },
        {
          "productId": "Coal",
          "quantity": 10
        },
        {
          "productId": "SulfuricAcid",
          "quantity": 5
        },
        {
          "productId": "Water",
          "quantity": 6
        }
      ],
      "isDefault": false,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "AluminumScrap",
          "quantity": 30
        },
        {
          "productId": "Water",
          "quantity": 5
        }
      ]
    },
    {
      "id": "Alternate_ModularFrameHeavy",
      "inputs": [
        {
          "productId": "ModularFrame",
          "quantity": 8
        },
        {
          "productId": "EncasedSteelBeam",
          "quantity": 10
        },
        {
          "productId": "SteelPipe",
          "quantity": 36
        },
        {
          "productId": "Concrete",
          "quantity": 22
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "ModularFrameHeavy",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Alternate_ModularFrame",
      "inputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 2
        },
        {
          "productId": "SteelPipe",
          "quantity": 10
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "ModularFrame",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Alternate_Motor_1",
      "inputs": [
        {
          "productId": "Rotor",
          "quantity": 3
        },
        {
          "productId": "Stator",
          "quantity": 3
        },
        {
          "productId": "CrystalOscillator",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "Motor",
          "quantity": 6
        }
      ]
    },
    {
      "id": "Alternate_Nobelisk_1",
      "inputs": [
        {
          "productId": "Gunpowder",
          "quantity": 8
        },
        {
          "productId": "SteelPipe",
          "quantity": 8
        },
        {
          "productId": "CrystalOscillator",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "Explosive",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Alternate_NuclearFuelRod_1",
      "inputs": [
        {
          "productId": "UraniumCell",
          "quantity": 100
        },
        {
          "productId": "ElectromagneticControlRod",
          "quantity": 10
        },
        {
          "productId": "CrystalOscillator",
          "quantity": 3
        },
        {
          "productId": "Beacon",
          "quantity": 6
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "NuclearFuelRod",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Alternate_OCSupercomputer",
      "inputs": [
        {
          "productId": "RadioControlUnit",
          "quantity": 3
        },
        {
          "productId": "CoolingSystem",
          "quantity": 3
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "SuperComputer",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_PlasticSmartPlating",
      "inputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 1
        },
        {
          "productId": "Rotor",
          "quantity": 1
        },
        {
          "productId": "Plastic",
          "quantity": 3
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_1",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_Plastic_1",
      "inputs": [
        {
          "productId": "Rubber",
          "quantity": 6
        },
        {
          "productId": "Fuel",
          "quantity": 6
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Plastic",
          "quantity": 12
        }
      ]
    },
    {
      "id": "Alternate_PlutoniumFuelUnit",
      "inputs": [
        {
          "productId": "EncasedPlutoniumCell",
          "quantity": 20
        },
        {
          "productId": "ConversionCube",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "PlutoniumFuelRod",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_PolyesterFabric",
      "inputs": [
        {
          "productId": "PolymerResin",
          "quantity": 16
        },
        {
          "productId": "Water",
          "quantity": 10
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Fabric",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_PolymerResin",
      "inputs": [
        {
          "productId": "Oil",
          "quantity": 6
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "PolymerResin",
          "quantity": 13
        },
        {
          "productId": "HeavyOilResidue",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_PureCateriumIngot",
      "inputs": [
        {
          "productId": "CateriumOre",
          "quantity": 2
        },
        {
          "productId": "Water",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "CateriumIngot",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_PureCopperIngot",
      "inputs": [
        {
          "productId": "Copper",
          "quantity": 6
        },
        {
          "productId": "Water",
          "quantity": 4
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "CopperIngot",
          "quantity": 15
        }
      ]
    },
    {
      "id": "Alternate_PureIronIngot",
      "inputs": [
        {
          "productId": "Iron",
          "quantity": 7
        },
        {
          "productId": "Water",
          "quantity": 4
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "IronIngot",
          "quantity": 13
        }
      ]
    },
    {
      "id": "Alternate_PureRawQuartz",
      "inputs": [
        {
          "productId": "RawQuartz",
          "quantity": 9
        },
        {
          "productId": "Water",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "RawQuartz",
          "quantity": 7
        }
      ]
    },
    {
      "id": "Alternate_Quickwire",
      "inputs": [
        {
          "productId": "CateriumIngot",
          "quantity": 1
        },
        {
          "productId": "CopperIngot",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Quickwire",
          "quantity": 12
        }
      ]
    },
    {
      "id": "Alternate_RadioControlSystem",
      "inputs": [
        {
          "productId": "CrystalOscillator",
          "quantity": 1
        },
        {
          "productId": "CircuitBoard",
          "quantity": 10
        },
        {
          "productId": "AluminumCasing",
          "quantity": 60
        },
        {
          "productId": "Rubber",
          "quantity": 30
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "RadioControlUnit",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Alternate_RadioControlUnit_1",
      "inputs": [
        {
          "productId": "HeatSink",
          "quantity": 4
        },
        {
          "productId": "HighSpeedConnector",
          "quantity": 2
        },
        {
          "productId": "RawQuartz",
          "quantity": 12
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "RadioControlUnit",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_RecycledRubber",
      "inputs": [
        {
          "productId": "Plastic",
          "quantity": 6
        },
        {
          "productId": "Fuel",
          "quantity": 6
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Rubber",
          "quantity": 12
        }
      ]
    },
    {
      "id": "Alternate_ReinforcedIronPlate_1",
      "inputs": [
        {
          "productId": "IronPlate",
          "quantity": 18
        },
        {
          "productId": "IronScrew",
          "quantity": 50
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Alternate_ReinforcedIronPlate_2",
      "inputs": [
        {
          "productId": "IronPlate",
          "quantity": 10
        },
        {
          "productId": "Wire",
          "quantity": 20
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Alternate_Rotor",
      "inputs": [
        {
          "productId": "SteelPipe",
          "quantity": 2
        },
        {
          "productId": "Wire",
          "quantity": 6
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Rotor",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Alternate_RubberConcrete",
      "inputs": [
        {
          "productId": "Limestone",
          "quantity": 10
        },
        {
          "productId": "Rubber",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Concrete",
          "quantity": 9
        }
      ]
    },
    {
      "id": "Alternate_Screw_2",
      "inputs": [
        {
          "productId": "SteelBeam",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "IronScrew",
          "quantity": 52
        }
      ]
    },
    {
      "id": "Alternate_Screw",
      "inputs": [
        {
          "productId": "IronIngot",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "IronScrew",
          "quantity": 20
        }
      ]
    },
    {
      "id": "Alternate_Silica",
      "inputs": [
        {
          "productId": "RawQuartz",
          "quantity": 3
        },
        {
          "productId": "Limestone",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Silica",
          "quantity": 7
        }
      ]
    },
    {
      "id": "Alternate_SloppyAlumina",
      "inputs": [
        {
          "productId": "Bauxite",
          "quantity": 10
        },
        {
          "productId": "Water",
          "quantity": 10
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Alumina",
          "quantity": 12
        }
      ]
    },
    {
      "id": "Alternate_Stator",
      "inputs": [
        {
          "productId": "SteelPipe",
          "quantity": 4
        },
        {
          "productId": "Quickwire",
          "quantity": 15
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Stator",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_SteamedCopperSheet",
      "inputs": [
        {
          "productId": "CopperIngot",
          "quantity": 3
        },
        {
          "productId": "Water",
          "quantity": 3
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "CopperSheet",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Alternate_SteelCanister",
      "inputs": [
        {
          "productId": "SteelIngot",
          "quantity": 3
        }
      ],
      "isDefault": false,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_SteelCoatedPlate",
      "inputs": [
        {
          "productId": "SteelIngot",
          "quantity": 3
        },
        {
          "productId": "Plastic",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "IronPlate",
          "quantity": 18
        }
      ]
    },
    {
      "id": "Alternate_SteelRod",
      "inputs": [
        {
          "productId": "SteelIngot",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "IronRod",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Alternate_SuperStateComputer",
      "inputs": [
        {
          "productId": "Computer",
          "quantity": 3
        },
        {
          "productId": "ElectromagneticControlRod",
          "quantity": 2
        },
        {
          "productId": "Battery",
          "quantity": 20
        },
        {
          "productId": "Wire",
          "quantity": 45
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "SuperComputer",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_TurboBlendFuel",
      "inputs": [
        {
          "productId": "Fuel",
          "quantity": 2
        },
        {
          "productId": "HeavyOilResidue",
          "quantity": 4
        },
        {
          "productId": "Sulfur",
          "quantity": 3
        },
        {
          "productId": "PetroleumCoke",
          "quantity": 3
        }
      ],
      "isDefault": false,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "TurboFuel",
          "quantity": 6
        }
      ]
    },
    {
      "id": "Alternate_TurboHeavyFuel",
      "inputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 5
        },
        {
          "productId": "CompactedCoal",
          "quantity": 4
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "TurboFuel",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Alternate_TurboMotor_1",
      "inputs": [
        {
          "productId": "Motor",
          "quantity": 7
        },
        {
          "productId": "RadioControlUnit",
          "quantity": 9
        },
        {
          "productId": "ElectromagneticControlRod",
          "quantity": 5
        },
        {
          "productId": "Rotor",
          "quantity": 7
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "TurboMotor",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Alternate_TurboPressureMotor",
      "inputs": [
        {
          "productId": "Motor",
          "quantity": 4
        },
        {
          "productId": "ConversionCube",
          "quantity": 1
        },
        {
          "productId": "PackagedNitrogenGas",
          "quantity": 24
        },
        {
          "productId": "Stator",
          "quantity": 8
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "TurboMotor",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Alternate_Turbofuel",
      "inputs": [
        {
          "productId": "Fuel",
          "quantity": 6
        },
        {
          "productId": "CompactedCoal",
          "quantity": 4
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "TurboFuel",
          "quantity": 5
        }
      ]
    },
    {
      "id": "Alternate_UraniumCell_1",
      "inputs": [
        {
          "productId": "Uranium",
          "quantity": 5
        },
        {
          "productId": "Silica",
          "quantity": 3
        },
        {
          "productId": "Sulfur",
          "quantity": 5
        },
        {
          "productId": "Quickwire",
          "quantity": 15
        }
      ],
      "isDefault": false,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "UraniumCell",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Alternate_WetConcrete",
      "inputs": [
        {
          "productId": "Limestone",
          "quantity": 6
        },
        {
          "productId": "Water",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Concrete",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Alternate_Wire_1",
      "inputs": [
        {
          "productId": "IronIngot",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Wire",
          "quantity": 9
        }
      ]
    },
    {
      "id": "Alternate_Wire_2",
      "inputs": [
        {
          "productId": "CateriumIngot",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Wire",
          "quantity": 8
        }
      ]
    },
    {
      "id": "Alumina",
      "inputs": [
        {
          "productId": "Bauxite",
          "quantity": 12
        },
        {
          "productId": "Water",
          "quantity": 18
        }
      ],
      "isDefault": true,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Alumina",
          "quantity": 12
        },
        {
          "productId": "Silica",
          "quantity": 5
        }
      ]
    },
    {
      "id": "AluminumCasing",
      "inputs": [
        {
          "productId": "AluminumIngot",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "AluminumCasing",
          "quantity": 2
        }
      ]
    },
    {
      "id": "AluminumScrap",
      "inputs": [
        {
          "productId": "Alumina",
          "quantity": 4
        },
        {
          "productId": "Coal",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "AluminumScrap",
          "quantity": 6
        },
        {
          "productId": "Water",
          "quantity": 2
        }
      ]
    },
    {
      "id": "AluminumSheet",
      "inputs": [
        {
          "productId": "AluminumIngot",
          "quantity": 3
        },
        {
          "productId": "CopperIngot",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "AluminumPlate",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Battery",
      "inputs": [
        {
          "productId": "SulfuricAcid",
          "quantity": 2.5
        },
        {
          "productId": "Alumina",
          "quantity": 2
        },
        {
          "productId": "AluminumCasing",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "Battery",
          "quantity": 1
        },
        {
          "productId": "Water",
          "quantity": 1.5
        }
      ]
    },
    {
      "id": "Beacon",
      "inputs": [
        {
          "productId": "IronPlate",
          "quantity": 3
        },
        {
          "productId": "IronRod",
          "quantity": 1
        },
        {
          "productId": "Wire",
          "quantity": 15
        },
        {
          "productId": "Cable",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "Beacon",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Biofuel",
      "inputs": [
        {
          "productId": "Biomass",
          "quantity": 8
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Biofuel",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Biomass_Leaves",
      "inputs": [
        {
          "productId": "Leaves",
          "quantity": 10
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Biomass",
          "quantity": 5
        }
      ]
    },
    {
      "id": "Biomass_Mycelia",
      "inputs": [
        {
          "productId": "Mycelia",
          "quantity": 10
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Biomass",
          "quantity": 10
        }
      ]
    },
    {
      "id": "Biomass_Wood",
      "inputs": [
        {
          "productId": "Wood",
          "quantity": 4
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Biomass",
          "quantity": 20
        }
      ]
    },
    {
      "id": "Cable",
      "inputs": [
        {
          "productId": "Wire",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Cable",
          "quantity": 1
        }
      ]
    },
    {
      "id": "CircuitBoard",
      "inputs": [
        {
          "productId": "CopperSheet",
          "quantity": 2
        },
        {
          "productId": "Plastic",
          "quantity": 4
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "CircuitBoard",
          "quantity": 1
        }
      ]
    },
    {
      "id": "ColorCartridge",
      "inputs": [
        {
          "productId": "FlowerPetals",
          "quantity": 5
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "ColorCartridge",
          "quantity": 10
        }
      ]
    },
    {
      "id": "SuperComputer",
      "inputs": [
        {
          "productId": "Computer",
          "quantity": 2
        },
        {
          "productId": "AILimiter",
          "quantity": 2
        },
        {
          "productId": "HighSpeedConnector",
          "quantity": 3
        },
        {
          "productId": "Plastic",
          "quantity": 28
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "SuperComputer",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Computer",
      "inputs": [
        {
          "productId": "CircuitBoard",
          "quantity": 10
        },
        {
          "productId": "Cable",
          "quantity": 9
        },
        {
          "productId": "Plastic",
          "quantity": 18
        },
        {
          "productId": "IronScrew",
          "quantity": 52
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "Computer",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Concrete",
      "inputs": [
        {
          "productId": "Limestone",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Concrete",
          "quantity": 1
        }
      ]
    },
    {
      "id": "CoolingSystem",
      "inputs": [
        {
          "productId": "HeatSink",
          "quantity": 2
        },
        {
          "productId": "Rubber",
          "quantity": 2
        },
        {
          "productId": "Water",
          "quantity": 5
        },
        {
          "productId": "NitrogenGas",
          "quantity": 25
        }
      ],
      "isDefault": true,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "CoolingSystem",
          "quantity": 1
        }
      ]
    },
    {
      "id": "CopperPowder",
      "inputs": [
        {
          "productId": "CopperIngot",
          "quantity": 30
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "CopperPowder",
          "quantity": 5
        }
      ]
    },
    {
      "id": "CopperSheet",
      "inputs": [
        {
          "productId": "CopperIngot",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "CopperSheet",
          "quantity": 1
        }
      ]
    },
    {
      "id": "CrystalOscillator",
      "inputs": [
        {
          "productId": "RawQuartz",
          "quantity": 36
        },
        {
          "productId": "Cable",
          "quantity": 28
        },
        {
          "productId": "IronPlateReinforced",
          "quantity": 5
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "CrystalOscillator",
          "quantity": 2
        }
      ]
    },
    {
      "id": "ElectromagneticControlRod",
      "inputs": [
        {
          "productId": "Stator",
          "quantity": 3
        },
        {
          "productId": "AILimiter",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "ElectromagneticControlRod",
          "quantity": 2
        }
      ]
    },
    {
      "id": "EncasedIndustrialBeam",
      "inputs": [
        {
          "productId": "SteelBeam",
          "quantity": 4
        },
        {
          "productId": "Concrete",
          "quantity": 5
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "EncasedSteelBeam",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Fabric",
      "inputs": [
        {
          "productId": "Mycelia",
          "quantity": 1
        },
        {
          "productId": "Biomass",
          "quantity": 5
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Fabric",
          "quantity": 1
        }
      ]
    },
    {
      "id": "FilterGasMask",
      "inputs": [
        {
          "productId": "Coal",
          "quantity": 5
        },
        {
          "productId": "Rubber",
          "quantity": 2
        },
        {
          "productId": "Fabric",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "GasMaskFilter",
          "quantity": 1
        }
      ]
    },
    {
      "id": "FilterHazmat",
      "inputs": [
        {
          "productId": "GasMaskFilter",
          "quantity": 1
        },
        {
          "productId": "Quickwire",
          "quantity": 8
        },
        {
          "productId": "AluminumCasing",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "HazmatFilter",
          "quantity": 1
        }
      ]
    },
    {
      "id": "EmptyCanister",
      "inputs": [
        {
          "productId": "Plastic",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "EmptyCanister",
          "quantity": 4
        }
      ]
    },
    {
      "id": "UnpackFuel",
      "inputs": [
        {
          "productId": "Fuel",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "Fuel",
          "quantity": 2
        }
      ]
    },
    {
      "id": "FusedModularFrame",
      "inputs": [
        {
          "productId": "ModularFrameHeavy",
          "quantity": 1
        },
        {
          "productId": "AluminumCasing",
          "quantity": 50
        },
        {
          "productId": "NitrogenGas",
          "quantity": 25
        }
      ],
      "isDefault": true,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "FusedModularFrame",
          "quantity": 1
        }
      ]
    },
    {
      "id": "PressureTank",
      "inputs": [
        {
          "productId": "AluminumIngot",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "PressureTank",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Gunpowder",
      "inputs": [
        {
          "productId": "Coal",
          "quantity": 1
        },
        {
          "productId": "Sulfur",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Gunpowder",
          "quantity": 1
        }
      ]
    },
    {
      "id": "HeatSink",
      "inputs": [
        {
          "productId": "AluminumPlate",
          "quantity": 5
        },
        {
          "productId": "CopperSheet",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "HeatSink",
          "quantity": 1
        }
      ]
    },
    {
      "id": "HighSpeedConnector",
      "inputs": [
        {
          "productId": "Quickwire",
          "quantity": 56
        },
        {
          "productId": "Cable",
          "quantity": 10
        },
        {
          "productId": "CircuitBoard",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "HighSpeedConnector",
          "quantity": 1
        }
      ]
    },
    {
      "id": "IngotAluminum",
      "inputs": [
        {
          "productId": "AluminumScrap",
          "quantity": 6
        },
        {
          "productId": "Silica",
          "quantity": 5
        }
      ],
      "isDefault": true,
      "machineId": "Foundry",
      "outputs": [
        {
          "productId": "AluminumIngot",
          "quantity": 4
        }
      ]
    },
    {
      "id": "IngotCaterium",
      "inputs": [
        {
          "productId": "CateriumOre",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "machineId": "Smelter",
      "outputs": [
        {
          "productId": "CateriumIngot",
          "quantity": 1
        }
      ]
    },
    {
      "id": "IngotCopper",
      "inputs": [
        {
          "productId": "Copper",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Smelter",
      "outputs": [
        {
          "productId": "CopperIngot",
          "quantity": 1
        }
      ]
    },
    {
      "id": "IngotIron",
      "inputs": [
        {
          "productId": "Iron",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Smelter",
      "outputs": [
        {
          "productId": "IronIngot",
          "quantity": 1
        }
      ]
    },
    {
      "id": "IngotSteel",
      "inputs": [
        {
          "productId": "Iron",
          "quantity": 3
        },
        {
          "productId": "Coal",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "machineId": "Foundry",
      "outputs": [
        {
          "productId": "SteelIngot",
          "quantity": 3
        }
      ]
    },
    {
      "id": "IronPlateReinforced",
      "inputs": [
        {
          "productId": "IronPlate",
          "quantity": 6
        },
        {
          "productId": "IronScrew",
          "quantity": 12
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 1
        }
      ]
    },
    {
      "id": "IronPlate",
      "inputs": [
        {
          "productId": "IronIngot",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "IronPlate",
          "quantity": 2
        }
      ]
    },
    {
      "id": "IronRod",
      "inputs": [
        {
          "productId": "IronIngot",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "IronRod",
          "quantity": 1
        }
      ]
    },
    {
      "id": "MixBiofuel",
      "inputs": [
        {
          "productId": "Biofuel",
          "quantity": 6
        },
        {
          "productId": "Water",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Biofuel",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Fuel",
      "inputs": [
        {
          "productId": "Oil",
          "quantity": 6
        }
      ],
      "isDefault": true,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Fuel",
          "quantity": 4
        },
        {
          "productId": "PolymerResin",
          "quantity": 3
        }
      ]
    },
    {
      "id": "ModularFrameHeavy",
      "inputs": [
        {
          "productId": "ModularFrame",
          "quantity": 5
        },
        {
          "productId": "SteelPipe",
          "quantity": 15
        },
        {
          "productId": "EncasedSteelBeam",
          "quantity": 5
        },
        {
          "productId": "IronScrew",
          "quantity": 100
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "ModularFrameHeavy",
          "quantity": 1
        }
      ]
    },
    {
      "id": "ModularFrame",
      "inputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 3
        },
        {
          "productId": "IronRod",
          "quantity": 12
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "ModularFrame",
          "quantity": 2
        }
      ]
    },
    {
      "id": "MotorTurbo",
      "inputs": [
        {
          "productId": "CoolingSystem",
          "quantity": 4
        },
        {
          "productId": "RadioControlUnit",
          "quantity": 2
        },
        {
          "productId": "Motor",
          "quantity": 4
        },
        {
          "productId": "Rubber",
          "quantity": 24
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "TurboMotor",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Motor",
      "inputs": [
        {
          "productId": "Rotor",
          "quantity": 2
        },
        {
          "productId": "Stator",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Motor",
          "quantity": 1
        }
      ]
    },
    {
      "id": "NitricAcid",
      "inputs": [
        {
          "productId": "NitrogenGas",
          "quantity": 12
        },
        {
          "productId": "Water",
          "quantity": 3
        },
        {
          "productId": "IronPlate",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "NitricAcid",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Nobelisk",
      "inputs": [
        {
          "productId": "Gunpowder",
          "quantity": 5
        },
        {
          "productId": "SteelPipe",
          "quantity": 10
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Explosive",
          "quantity": 1
        }
      ]
    },
    {
      "id": "NonFissileUranium",
      "inputs": [
        {
          "productId": "NuclearWaste",
          "quantity": 15
        },
        {
          "productId": "Silica",
          "quantity": 10
        },
        {
          "productId": "NitricAcid",
          "quantity": 6
        },
        {
          "productId": "SulfuricAcid",
          "quantity": 6
        }
      ],
      "isDefault": true,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "NonFissileUranium",
          "quantity": 20
        },
        {
          "productId": "Water",
          "quantity": 6
        }
      ]
    },
    {
      "id": "NuclearFuelRod",
      "inputs": [
        {
          "productId": "UraniumCell",
          "quantity": 50
        },
        {
          "productId": "EncasedSteelBeam",
          "quantity": 3
        },
        {
          "productId": "ElectromagneticControlRod",
          "quantity": 5
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "NuclearFuelRod",
          "quantity": 1
        }
      ]
    },
    {
      "id": "PackagedAluminaSolution",
      "inputs": [
        {
          "productId": "Alumina",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "PackagedAluminaSolution",
          "quantity": 2
        }
      ]
    },
    {
      "id": "PackagedBiofuel",
      "inputs": [
        {
          "productId": "Biofuel",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "PackagedBiofuel",
          "quantity": 2
        }
      ]
    },
    {
      "id": "PackagedCrudeOil",
      "inputs": [
        {
          "productId": "Oil",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "PackagedOil",
          "quantity": 2
        }
      ]
    },
    {
      "id": "PackagedNitricAcid",
      "inputs": [
        {
          "productId": "NitricAcid",
          "quantity": 1
        },
        {
          "productId": "PressureTank",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "PackagedNitricAcid",
          "quantity": 1
        }
      ]
    },
    {
      "id": "PackagedNitrogen",
      "inputs": [
        {
          "productId": "NitrogenGas",
          "quantity": 4
        },
        {
          "productId": "PressureTank",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "PackagedNitrogenGas",
          "quantity": 1
        }
      ]
    },
    {
      "id": "PackagedOilResidue",
      "inputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "PackagedOilResidue",
          "quantity": 2
        }
      ]
    },
    {
      "id": "PackagedSulfuricAcid",
      "inputs": [
        {
          "productId": "SulfuricAcid",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "PackagedSulfuricAcid",
          "quantity": 2
        }
      ]
    },
    {
      "id": "PackagedTurboFuel",
      "inputs": [
        {
          "productId": "TurboFuel",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "TurboFuel",
          "quantity": 2
        }
      ]
    },
    {
      "id": "PackagedWater",
      "inputs": [
        {
          "productId": "Water",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "PackagedWater",
          "quantity": 2
        }
      ]
    },
    {
      "id": "PetroleumCoke",
      "inputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 4
        }
      ],
      "isDefault": true,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "PetroleumCoke",
          "quantity": 12
        }
      ]
    },
    {
      "id": "Plastic",
      "inputs": [
        {
          "productId": "Oil",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Plastic",
          "quantity": 2
        },
        {
          "productId": "HeavyOilResidue",
          "quantity": 1
        }
      ]
    },
    {
      "id": "EncasedPlutoniumCell",
      "inputs": [
        {
          "productId": "PlutoniumPellet",
          "quantity": 2
        },
        {
          "productId": "Concrete",
          "quantity": 4
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "EncasedPlutoniumCell",
          "quantity": 1
        }
      ]
    },
    {
      "id": "PlutoniumFuelRod",
      "inputs": [
        {
          "productId": "EncasedPlutoniumCell",
          "quantity": 30
        },
        {
          "productId": "SteelBeam",
          "quantity": 18
        },
        {
          "productId": "ElectromagneticControlRod",
          "quantity": 6
        },
        {
          "productId": "HeatSink",
          "quantity": 10
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "PlutoniumFuelRod",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Plutonium",
      "inputs": [
        {
          "productId": "NonFissileUranium",
          "quantity": 100
        },
        {
          "productId": "NuclearWaste",
          "quantity": 25
        }
      ],
      "isDefault": true,
      "machineId": "ParticleAcceleratorLowPower",
      "outputs": [
        {
          "productId": "PlutoniumPellet",
          "quantity": 30
        }
      ]
    },
    {
      "id": "PowerPowerShard_1",
      "inputs": [
        {
          "productId": "PowerSlugGreen",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "PowerShard",
          "quantity": 1
        }
      ]
    },
    {
      "id": "PowerPowerShard_2",
      "inputs": [
        {
          "productId": "PowerSlugYellow",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "PowerShard",
          "quantity": 2
        }
      ]
    },
    {
      "id": "PowerPowerShard_3",
      "inputs": [
        {
          "productId": "PowerSlugPurple",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "PowerShard",
          "quantity": 5
        }
      ]
    },
    {
      "id": "ConversionCube",
      "inputs": [
        {
          "productId": "FusedModularFrame",
          "quantity": 1
        },
        {
          "productId": "RadioControlUnit",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "ConversionCube",
          "quantity": 1
        }
      ]
    },
    {
      "id": "PureAluminumIngot",
      "inputs": [
        {
          "productId": "AluminumScrap",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "machineId": "Smelter",
      "outputs": [
        {
          "productId": "AluminumIngot",
          "quantity": 1
        }
      ]
    },
    {
      "id": "RawQuartz",
      "inputs": [
        {
          "productId": "RawQuartz",
          "quantity": 5
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "RawQuartz",
          "quantity": 3
        }
      ]
    },
    {
      "id": "Quickwire",
      "inputs": [
        {
          "productId": "CateriumIngot",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Quickwire",
          "quantity": 5
        }
      ]
    },
    {
      "id": "RadioControlUnit",
      "inputs": [
        {
          "productId": "AluminumCasing",
          "quantity": 32
        },
        {
          "productId": "CrystalOscillator",
          "quantity": 1
        },
        {
          "productId": "Computer",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "RadioControlUnit",
          "quantity": 2
        }
      ]
    },
    {
      "id": "ResidualFuel",
      "inputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 6
        }
      ],
      "isDefault": true,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Fuel",
          "quantity": 4
        }
      ]
    },
    {
      "id": "ResidualPlastic",
      "inputs": [
        {
          "productId": "PolymerResin",
          "quantity": 6
        },
        {
          "productId": "Water",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Plastic",
          "quantity": 2
        }
      ]
    },
    {
      "id": "ResidualRubber",
      "inputs": [
        {
          "productId": "PolymerResin",
          "quantity": 4
        },
        {
          "productId": "Water",
          "quantity": 4
        }
      ],
      "isDefault": true,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Rubber",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Rotor",
      "inputs": [
        {
          "productId": "IronRod",
          "quantity": 5
        },
        {
          "productId": "IronScrew",
          "quantity": 25
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Rotor",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Rubber",
      "inputs": [
        {
          "productId": "Oil",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "Rubber",
          "quantity": 2
        },
        {
          "productId": "HeavyOilResidue",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Screw",
      "inputs": [
        {
          "productId": "IronRod",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "IronScrew",
          "quantity": 4
        }
      ]
    },
    {
      "id": "Silica",
      "inputs": [
        {
          "productId": "RawQuartz",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Silica",
          "quantity": 5
        }
      ]
    },
    {
      "id": "SpaceElevatorPart_1",
      "inputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 1
        },
        {
          "productId": "Rotor",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_1",
          "quantity": 1
        }
      ]
    },
    {
      "id": "SpaceElevatorPart_2",
      "inputs": [
        {
          "productId": "ModularFrame",
          "quantity": 1
        },
        {
          "productId": "SteelBeam",
          "quantity": 12
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_2",
          "quantity": 2
        }
      ]
    },
    {
      "id": "SpaceElevatorPart_3",
      "inputs": [
        {
          "productId": "Stator",
          "quantity": 1
        },
        {
          "productId": "Cable",
          "quantity": 20
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_3",
          "quantity": 1
        }
      ]
    },
    {
      "id": "SpaceElevatorPart_4",
      "inputs": [
        {
          "productId": "Motor",
          "quantity": 2
        },
        {
          "productId": "Rubber",
          "quantity": 15
        },
        {
          "productId": "SpaceElevatorPart_1",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_4",
          "quantity": 1
        }
      ]
    },
    {
      "id": "SpaceElevatorPart_5",
      "inputs": [
        {
          "productId": "SpaceElevatorPart_3",
          "quantity": 15
        },
        {
          "productId": "CircuitBoard",
          "quantity": 10
        },
        {
          "productId": "ModularFrameHeavy",
          "quantity": 2
        },
        {
          "productId": "Computer",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Manufacturer",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_5",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Rebar",
      "inputs": [
        {
          "productId": "IronRod",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Rebar",
          "quantity": 1
        }
      ]
    },
    {
      "id": "Stator",
      "inputs": [
        {
          "productId": "SteelPipe",
          "quantity": 3
        },
        {
          "productId": "Wire",
          "quantity": 8
        }
      ],
      "isDefault": true,
      "machineId": "Assembler",
      "outputs": [
        {
          "productId": "Stator",
          "quantity": 1
        }
      ]
    },
    {
      "id": "SteelBeam",
      "inputs": [
        {
          "productId": "SteelIngot",
          "quantity": 4
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "SteelBeam",
          "quantity": 1
        }
      ]
    },
    {
      "id": "SteelPipe",
      "inputs": [
        {
          "productId": "SteelIngot",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "SteelPipe",
          "quantity": 2
        }
      ]
    },
    {
      "id": "SulfuricAcid",
      "inputs": [
        {
          "productId": "Sulfur",
          "quantity": 5
        },
        {
          "productId": "Water",
          "quantity": 5
        }
      ],
      "isDefault": true,
      "machineId": "OilRefinery",
      "outputs": [
        {
          "productId": "SulfuricAcid",
          "quantity": 5
        }
      ]
    },
    {
      "id": "UnpackageAlumina",
      "inputs": [
        {
          "productId": "PackagedAluminaSolution",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "Alumina",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ]
    },
    {
      "id": "UnpackageBioFuel",
      "inputs": [
        {
          "productId": "PackagedBiofuel",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "Biofuel",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ]
    },
    {
      "id": "UnpackageFuel",
      "inputs": [
        {
          "productId": "Fuel",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "Fuel",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ]
    },
    {
      "id": "UnpackageNitricAcid",
      "inputs": [
        {
          "productId": "PackagedNitricAcid",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "NitricAcid",
          "quantity": 1
        },
        {
          "productId": "PressureTank",
          "quantity": 1
        }
      ]
    },
    {
      "id": "UnpackageNitrogen",
      "inputs": [
        {
          "productId": "PackagedNitrogenGas",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "NitrogenGas",
          "quantity": 4
        },
        {
          "productId": "PressureTank",
          "quantity": 1
        }
      ]
    },
    {
      "id": "UnpackageOilResidue",
      "inputs": [
        {
          "productId": "PackagedOilResidue",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ]
    },
    {
      "id": "UnpackageOil",
      "inputs": [
        {
          "productId": "PackagedOil",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "Oil",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ]
    },
    {
      "id": "UnpackageSulfuricAcid",
      "inputs": [
        {
          "productId": "PackagedSulfuricAcid",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "SulfuricAcid",
          "quantity": 1
        },
        {
          "productId": "EmptyCanister",
          "quantity": 1
        }
      ]
    },
    {
      "id": "UnpackageTurboFuel",
      "inputs": [
        {
          "productId": "TurboFuel",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "TurboFuel",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ]
    },
    {
      "id": "UnpackageWater",
      "inputs": [
        {
          "productId": "PackagedWater",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "machineId": "Packager",
      "outputs": [
        {
          "productId": "Water",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ]
    },
    {
      "id": "UraniumCell",
      "inputs": [
        {
          "productId": "Uranium",
          "quantity": 10
        },
        {
          "productId": "Concrete",
          "quantity": 3
        },
        {
          "productId": "SulfuricAcid",
          "quantity": 8
        }
      ],
      "isDefault": true,
      "machineId": "Blender",
      "outputs": [
        {
          "productId": "UraniumCell",
          "quantity": 5
        },
        {
          "productId": "SulfuricAcid",
          "quantity": 2
        }
      ]
    },
    {
      "id": "Wire",
      "inputs": [
        {
          "productId": "CopperIngot",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "machineId": "Constructor",
      "outputs": [
        {
          "productId": "Wire",
          "quantity": 2
        }
      ]
    }
] as RecipeYAML[];