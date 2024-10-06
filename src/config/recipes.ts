import { RecipeYAML } from "@/models/types";

export const recipesYAML = [
    {
      "id": "ai-limiter",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "AI Limiter",
      "outputs": [
        {
          "productId": "AILimiter",
          "quantity": 1
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-adhered-iron-plate",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Adhered Iron Plate",
      "outputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 1
        }
      ],
      "time": 16
    },
    {
      "id": "alternate-alclad-casing",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Alclad Casing",
      "outputs": [
        {
          "productId": "AluminumCasing",
          "quantity": 15
        }
      ],
      "time": 8
    },
    {
      "id": "alternate-crystal-beacon",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Crystal Beacon",
      "outputs": [
        {
          "productId": "Beacon",
          "quantity": 20
        }
      ],
      "time": 120
    },
    {
      "id": "alternate-bolted-frame",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Bolted Frame",
      "outputs": [
        {
          "productId": "ModularFrame",
          "quantity": 2
        }
      ],
      "time": 24
    },
    {
      "id": "alternate-insulated-cable",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Insulated Cable",
      "outputs": [
        {
          "productId": "Cable",
          "quantity": 20
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-quickwire-cable",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Quickwire Cable",
      "outputs": [
        {
          "productId": "Cable",
          "quantity": 11
        }
      ],
      "time": 24
    },
    {
      "id": "alternate-silicon-circuit-board",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Silicon Circuit Board",
      "outputs": [
        {
          "productId": "CircuitBoard",
          "quantity": 5
        }
      ],
      "time": 24
    },
    {
      "id": "alternate-caterium-circuit-board",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Caterium Circuit Board",
      "outputs": [
        {
          "productId": "CircuitBoard",
          "quantity": 7
        }
      ],
      "time": 48
    },
    {
      "id": "alternate-classic-battery",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Classic Battery",
      "outputs": [
        {
          "productId": "Battery",
          "quantity": 4
        }
      ],
      "time": 8
    },
    {
      "id": "alternate-charcoal",
      "inputs": [
        {
          "productId": "Wood",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Alternate: Charcoal",
      "outputs": [
        {
          "productId": "Coal",
          "quantity": 10
        }
      ],
      "time": 4
    },
    {
      "id": "alternate-biocoal",
      "inputs": [
        {
          "productId": "Biomass",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Alternate: Biocoal",
      "outputs": [
        {
          "productId": "Coal",
          "quantity": 6
        }
      ],
      "time": 8
    },
    {
      "id": "alternate-coated-cable",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Coated Cable",
      "outputs": [
        {
          "productId": "Cable",
          "quantity": 9
        }
      ],
      "time": 8
    },
    {
      "id": "alternate-coated-iron-canister",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Coated Iron Canister",
      "outputs": [
        {
          "productId": "EmptyCanister",
          "quantity": 4
        }
      ],
      "time": 4
    },
    {
      "id": "alternate-coated-iron-plate",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Coated Iron Plate",
      "outputs": [
        {
          "productId": "IronPlate",
          "quantity": 15
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-coke-steel-ingot",
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
      "isVariablePower": false,
      "machineId": "Foundry",
      "name": "Alternate: Coke Steel Ingot",
      "outputs": [
        {
          "productId": "SteelIngot",
          "quantity": 20
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-caterium-computer",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Caterium Computer",
      "outputs": [
        {
          "productId": "Computer",
          "quantity": 1
        }
      ],
      "time": 16
    },
    {
      "id": "alternate-crystal-computer",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Crystal Computer",
      "outputs": [
        {
          "productId": "Computer",
          "quantity": 3
        }
      ],
      "time": 64
    },
    {
      "id": "alternate-fine-concrete",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Fine Concrete",
      "outputs": [
        {
          "productId": "Concrete",
          "quantity": 10
        }
      ],
      "time": 24
    },
    {
      "id": "alternate-cooling-device",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Alternate: Cooling Device",
      "outputs": [
        {
          "productId": "CoolingSystem",
          "quantity": 2
        }
      ],
      "time": 32
    },
    {
      "id": "alternate-copper-alloy-ingot",
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
      "isVariablePower": false,
      "machineId": "Foundry",
      "name": "Alternate: Copper Alloy Ingot",
      "outputs": [
        {
          "productId": "CopperIngot",
          "quantity": 20
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-copper-rotor",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Copper Rotor",
      "outputs": [
        {
          "productId": "Rotor",
          "quantity": 3
        }
      ],
      "time": 16
    },
    {
      "id": "alternate-insulated-crystal-oscillator",
      "inputs": [
        {
          "productId": "QuartzResource",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Insulated Crystal Oscillator",
      "outputs": [
        {
          "productId": "CrystalOscillator",
          "quantity": 1
        }
      ],
      "time": 32
    },
    {
      "id": "alternate-diluted-fuel",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Alternate: Diluted Fuel",
      "outputs": [
        {
          "productId": "Fuel",
          "quantity": 10
        }
      ],
      "time": 6
    },
    {
      "id": "alternate-diluted-packaged-fuel",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Diluted Packaged Fuel",
      "outputs": [
        {
          "productId": "Fuel",
          "quantity": 2
        }
      ],
      "time": 2
    },
    {
      "id": "alternate-electric-motor",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Electric Motor",
      "outputs": [
        {
          "productId": "Motor",
          "quantity": 2
        }
      ],
      "time": 16
    },
    {
      "id": "alternate-electrode---aluminum-scrap",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Electrode - Aluminum Scrap",
      "outputs": [
        {
          "productId": "AluminumScrap",
          "quantity": 20
        },
        {
          "productId": "Water",
          "quantity": 7
        }
      ],
      "time": 4
    },
    {
      "id": "alternate-electrode-circuit-board",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Electrode Circuit Board",
      "outputs": [
        {
          "productId": "CircuitBoard",
          "quantity": 1
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-electromagnetic-connection-rod",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Electromagnetic Connection Rod",
      "outputs": [
        {
          "productId": "ElectromagneticControlRod",
          "quantity": 2
        }
      ],
      "time": 15
    },
    {
      "id": "alternate-encased-industrial-pipe",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Encased Industrial Pipe",
      "outputs": [
        {
          "productId": "EncasedSteelBeam",
          "quantity": 1
        }
      ],
      "time": 15
    },
    {
      "id": "alternate-compacted-coal",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Compacted Coal",
      "outputs": [
        {
          "productId": "CompactedCoal",
          "quantity": 5
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-fertile-uranium",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Alternate: Fertile Uranium",
      "outputs": [
        {
          "productId": "NonFissileUranium",
          "quantity": 20
        },
        {
          "productId": "Water",
          "quantity": 8
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-flexible-framework",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Flexible Framework",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_2",
          "quantity": 2
        }
      ],
      "time": 16
    },
    {
      "id": "alternate-fused-wire",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Fused Wire",
      "outputs": [
        {
          "productId": "Wire",
          "quantity": 30
        }
      ],
      "time": 20
    },
    {
      "id": "alternate-fine-black-powder",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Fine Black Powder",
      "outputs": [
        {
          "productId": "Gunpowder",
          "quantity": 4
        }
      ],
      "time": 16
    },
    {
      "id": "alternate-heat-fused-frame",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Alternate: Heat-Fused Frame",
      "outputs": [
        {
          "productId": "FusedModularFrame",
          "quantity": 1
        }
      ],
      "time": 20
    },
    {
      "id": "alternate-heat-exchanger",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Heat Exchanger",
      "outputs": [
        {
          "productId": "HeatSink",
          "quantity": 1
        }
      ],
      "time": 6
    },
    {
      "id": "alternate-heavy-flexible-frame",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Heavy Flexible Frame",
      "outputs": [
        {
          "productId": "ModularFrameHeavy",
          "quantity": 1
        }
      ],
      "time": 16
    },
    {
      "id": "alternate-heavy-oil-residue",
      "inputs": [
        {
          "productId": "Oil",
          "quantity": 3
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Heavy Oil Residue",
      "outputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 4
        },
        {
          "productId": "PolymerResin",
          "quantity": 2
        }
      ],
      "time": 6
    },
    {
      "id": "alternate-silicon-high-speed-connector",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Silicon High-Speed Connector",
      "outputs": [
        {
          "productId": "HighSpeedConnector",
          "quantity": 2
        }
      ],
      "time": 40
    },
    {
      "id": "alternate-automated-speed-wiring",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Automated Speed Wiring",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_3",
          "quantity": 4
        }
      ],
      "time": 32
    },
    {
      "id": "alternate-iron-alloy-ingot",
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
      "isVariablePower": false,
      "machineId": "Foundry",
      "name": "Alternate: Iron Alloy Ingot",
      "outputs": [
        {
          "productId": "IronIngot",
          "quantity": 5
        }
      ],
      "time": 6
    },
    {
      "id": "alternate-solid-steel-ingot",
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
      "isVariablePower": false,
      "machineId": "Foundry",
      "name": "Alternate: Solid Steel Ingot",
      "outputs": [
        {
          "productId": "SteelIngot",
          "quantity": 3
        }
      ],
      "time": 3
    },
    {
      "id": "alternate-compacted-steel-ingot",
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
      "isVariablePower": false,
      "machineId": "Foundry",
      "name": "Alternate: Compacted Steel Ingot",
      "outputs": [
        {
          "productId": "SteelIngot",
          "quantity": 10
        }
      ],
      "time": 16
    },
    {
      "id": "alternate-instant-plutonium-cell",
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
      "isVariablePower": true,
      "machineId": "HadronCollider",
      "maxPower": 750,
      "minPower": 250,
      "name": "Alternate: Instant Plutonium Cell",
      "outputs": [
        {
          "productId": "EncasedPlutoniumCell",
          "quantity": 20
        }
      ],
      "time": 120
    },
    {
      "id": "alternate-instant-scrap",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Alternate: Instant Scrap",
      "outputs": [
        {
          "productId": "AluminumScrap",
          "quantity": 30
        },
        {
          "productId": "Water",
          "quantity": 5
        }
      ],
      "time": 6
    },
    {
      "id": "alternate-heavy-encased-frame",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Heavy Encased Frame",
      "outputs": [
        {
          "productId": "ModularFrameHeavy",
          "quantity": 3
        }
      ],
      "time": 64
    },
    {
      "id": "alternate-steeled-frame",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Steeled Frame",
      "outputs": [
        {
          "productId": "ModularFrame",
          "quantity": 3
        }
      ],
      "time": 60
    },
    {
      "id": "alternate-rigour-motor",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Rigour Motor",
      "outputs": [
        {
          "productId": "Motor",
          "quantity": 6
        }
      ],
      "time": 48
    },
    {
      "id": "alternate-seismic-nobelisk",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Seismic Nobelisk",
      "outputs": [
        {
          "productId": "Explosive",
          "quantity": 4
        }
      ],
      "time": 40
    },
    {
      "id": "alternate-uranium-fuel-unit",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Uranium Fuel Unit",
      "outputs": [
        {
          "productId": "NuclearFuelRod",
          "quantity": 3
        }
      ],
      "time": 300
    },
    {
      "id": "alternate-oc-supercomputer",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: OC Supercomputer",
      "outputs": [
        {
          "productId": "SuperComputer",
          "quantity": 1
        }
      ],
      "time": 20
    },
    {
      "id": "alternate-plastic-smart-plating",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Plastic Smart Plating",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_1",
          "quantity": 2
        }
      ],
      "time": 24
    },
    {
      "id": "alternate-recycled-plastic",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Recycled Plastic",
      "outputs": [
        {
          "productId": "Plastic",
          "quantity": 12
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-plutonium-fuel-unit",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Plutonium Fuel Unit",
      "outputs": [
        {
          "productId": "PlutoniumFuelRod",
          "quantity": 1
        }
      ],
      "time": 120
    },
    {
      "id": "alternate-polyester-fabric",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Polyester Fabric",
      "outputs": [
        {
          "productId": "Fabric",
          "quantity": 1
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-polymer-resin",
      "inputs": [
        {
          "productId": "Oil",
          "quantity": 6
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Polymer Resin",
      "outputs": [
        {
          "productId": "PolymerResin",
          "quantity": 13
        },
        {
          "productId": "HeavyOilResidue",
          "quantity": 2
        }
      ],
      "time": 6
    },
    {
      "id": "alternate-pure-caterium-ingot",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Pure Caterium Ingot",
      "outputs": [
        {
          "productId": "CateriumIngot",
          "quantity": 1
        }
      ],
      "time": 5
    },
    {
      "id": "alternate-pure-copper-ingot",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Pure Copper Ingot",
      "outputs": [
        {
          "productId": "CopperIngot",
          "quantity": 15
        }
      ],
      "time": 24
    },
    {
      "id": "alternate-pure-iron-ingot",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Pure Iron Ingot",
      "outputs": [
        {
          "productId": "IronIngot",
          "quantity": 13
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-pure-quartz-crystal",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Pure Quartz Crystal",
      "outputs": [
        {
          "productId": "QuartzResource",
          "quantity": 7
        }
      ],
      "time": 8
    },
    {
      "id": "alternate-fused-quickwire",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Fused Quickwire",
      "outputs": [
        {
          "productId": "Quickwire",
          "quantity": 12
        }
      ],
      "time": 8
    },
    {
      "id": "alternate-radio-control-system",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Radio Control System",
      "outputs": [
        {
          "productId": "RadioControlUnit",
          "quantity": 3
        }
      ],
      "time": 40
    },
    {
      "id": "alternate-radio-connection-unit",
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
          "productId": "QuartzResource",
          "quantity": 12
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Radio Connection Unit",
      "outputs": [
        {
          "productId": "RadioControlUnit",
          "quantity": 1
        }
      ],
      "time": 16
    },
    {
      "id": "alternate-recycled-rubber",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Recycled Rubber",
      "outputs": [
        {
          "productId": "Rubber",
          "quantity": 12
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-bolted-iron-plate",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Bolted Iron Plate",
      "outputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 3
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-stitched-iron-plate",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Stitched Iron Plate",
      "outputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 3
        }
      ],
      "time": 32
    },
    {
      "id": "alternate-steel-rotor",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Steel Rotor",
      "outputs": [
        {
          "productId": "Rotor",
          "quantity": 1
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-rubber-concrete",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Rubber Concrete",
      "outputs": [
        {
          "productId": "Concrete",
          "quantity": 9
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-steel-screw",
      "inputs": [
        {
          "productId": "SteelBeam",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Alternate: Steel Screw",
      "outputs": [
        {
          "productId": "IronScrew",
          "quantity": 52
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-cast-screw",
      "inputs": [
        {
          "productId": "IronIngot",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Alternate: Cast Screw",
      "outputs": [
        {
          "productId": "IronScrew",
          "quantity": 20
        }
      ],
      "time": 24
    },
    {
      "id": "alternate-cheap-silica",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Cheap Silica",
      "outputs": [
        {
          "productId": "Silica",
          "quantity": 7
        }
      ],
      "time": 16
    },
    {
      "id": "alternate-sloppy-alumina",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Sloppy Alumina",
      "outputs": [
        {
          "productId": "Alumina",
          "quantity": 12
        }
      ],
      "time": 3
    },
    {
      "id": "alternate-quickwire-stator",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Quickwire Stator",
      "outputs": [
        {
          "productId": "Stator",
          "quantity": 2
        }
      ],
      "time": 15
    },
    {
      "id": "alternate-steamed-copper-sheet",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Steamed Copper Sheet",
      "outputs": [
        {
          "productId": "CopperSheet",
          "quantity": 3
        }
      ],
      "time": 8
    },
    {
      "id": "alternate-steel-canister",
      "inputs": [
        {
          "productId": "SteelIngot",
          "quantity": 3
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Alternate: Steel Canister",
      "outputs": [
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "time": 3
    },
    {
      "id": "alternate-steel-coated-plate",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alternate: Steel Coated Plate",
      "outputs": [
        {
          "productId": "IronPlate",
          "quantity": 18
        }
      ],
      "time": 24
    },
    {
      "id": "alternate-steel-rod",
      "inputs": [
        {
          "productId": "SteelIngot",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Alternate: Steel Rod",
      "outputs": [
        {
          "productId": "IronRod",
          "quantity": 4
        }
      ],
      "time": 5
    },
    {
      "id": "alternate-super-state-computer",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Super-State Computer",
      "outputs": [
        {
          "productId": "SuperComputer",
          "quantity": 2
        }
      ],
      "time": 50
    },
    {
      "id": "alternate-turbo-blend-fuel",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Alternate: Turbo Blend Fuel",
      "outputs": [
        {
          "productId": "TurboFuel",
          "quantity": 6
        }
      ],
      "time": 8
    },
    {
      "id": "alternate-turbo-heavy-fuel",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Turbo Heavy Fuel",
      "outputs": [
        {
          "productId": "TurboFuel",
          "quantity": 4
        }
      ],
      "time": 8
    },
    {
      "id": "alternate-turbo-electric-motor",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Turbo Electric Motor",
      "outputs": [
        {
          "productId": "TurboMotor",
          "quantity": 3
        }
      ],
      "time": 64
    },
    {
      "id": "alternate-turbo-pressure-motor",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Turbo Pressure Motor",
      "outputs": [
        {
          "productId": "TurboMotor",
          "quantity": 2
        }
      ],
      "time": 32
    },
    {
      "id": "turbofuel",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Turbofuel",
      "outputs": [
        {
          "productId": "TurboFuel",
          "quantity": 5
        }
      ],
      "time": 16
    },
    {
      "id": "alternate-infused-uranium-cell",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Alternate: Infused Uranium Cell",
      "outputs": [
        {
          "productId": "UraniumCell",
          "quantity": 4
        }
      ],
      "time": 12
    },
    {
      "id": "alternate-wet-concrete",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alternate: Wet Concrete",
      "outputs": [
        {
          "productId": "Concrete",
          "quantity": 4
        }
      ],
      "time": 3
    },
    {
      "id": "alternate-iron-wire",
      "inputs": [
        {
          "productId": "IronIngot",
          "quantity": 5
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Alternate: Iron Wire",
      "outputs": [
        {
          "productId": "Wire",
          "quantity": 9
        }
      ],
      "time": 24
    },
    {
      "id": "alternate-caterium-wire",
      "inputs": [
        {
          "productId": "CateriumIngot",
          "quantity": 1
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Alternate: Caterium Wire",
      "outputs": [
        {
          "productId": "Wire",
          "quantity": 8
        }
      ],
      "time": 4
    },
    {
      "id": "alumina-solution",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Alumina Solution",
      "outputs": [
        {
          "productId": "Alumina",
          "quantity": 12
        },
        {
          "productId": "Silica",
          "quantity": 5
        }
      ],
      "time": 6
    },
    {
      "id": "aluminum-casing",
      "inputs": [
        {
          "productId": "AluminumIngot",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Aluminum Casing",
      "outputs": [
        {
          "productId": "AluminumCasing",
          "quantity": 2
        }
      ],
      "time": 2
    },
    {
      "id": "aluminum-scrap",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Aluminum Scrap",
      "outputs": [
        {
          "productId": "AluminumScrap",
          "quantity": 6
        },
        {
          "productId": "Water",
          "quantity": 2
        }
      ],
      "time": 1
    },
    {
      "id": "alclad-aluminum-sheet",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Alclad Aluminum Sheet",
      "outputs": [
        {
          "productId": "AluminumPlate",
          "quantity": 3
        }
      ],
      "time": 6
    },
    {
      "id": "battery",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Battery",
      "outputs": [
        {
          "productId": "Battery",
          "quantity": 1
        },
        {
          "productId": "Water",
          "quantity": 1.5
        }
      ],
      "time": 3
    },
    {
      "id": "beacon",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Beacon",
      "outputs": [
        {
          "productId": "Beacon",
          "quantity": 1
        }
      ],
      "time": 8
    },
    {
      "id": "solid-biofuel",
      "inputs": [
        {
          "productId": "Biomass",
          "quantity": 8
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Solid Biofuel",
      "outputs": [
        {
          "productId": "Biofuel",
          "quantity": 4
        }
      ],
      "time": 4
    },
    {
      "id": "biomass-(leaves)",
      "inputs": [
        {
          "productId": "Leaves",
          "quantity": 10
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Biomass (Leaves)",
      "outputs": [
        {
          "productId": "Biomass",
          "quantity": 5
        }
      ],
      "time": 5
    },
    {
      "id": "biomass-(mycelia)",
      "inputs": [
        {
          "productId": "Mycelia",
          "quantity": 10
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Biomass (Mycelia)",
      "outputs": [
        {
          "productId": "Biomass",
          "quantity": 10
        }
      ],
      "time": 4
    },
    {
      "id": "biomass-(wood)",
      "inputs": [
        {
          "productId": "Wood",
          "quantity": 4
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Biomass (Wood)",
      "outputs": [
        {
          "productId": "Biomass",
          "quantity": 20
        }
      ],
      "time": 4
    },
    {
      "id": "cable",
      "inputs": [
        {
          "productId": "Wire",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Cable",
      "outputs": [
        {
          "productId": "Cable",
          "quantity": 1
        }
      ],
      "time": 2
    },
    {
      "id": "circuit-board",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Circuit Board",
      "outputs": [
        {
          "productId": "CircuitBoard",
          "quantity": 1
        }
      ],
      "time": 8
    },
    {
      "id": "color-cartridge",
      "inputs": [
        {
          "productId": "FlowerPetals",
          "quantity": 5
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Color Cartridge",
      "outputs": [
        {
          "productId": "ColorCartridge",
          "quantity": 10
        }
      ],
      "time": 8
    },
    {
      "id": "supercomputer",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Supercomputer",
      "outputs": [
        {
          "productId": "SuperComputer",
          "quantity": 1
        }
      ],
      "time": 32
    },
    {
      "id": "computer",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Computer",
      "outputs": [
        {
          "productId": "Computer",
          "quantity": 1
        }
      ],
      "time": 24
    },
    {
      "id": "concrete",
      "inputs": [
        {
          "productId": "Limestone",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Concrete",
      "outputs": [
        {
          "productId": "Concrete",
          "quantity": 1
        }
      ],
      "time": 4
    },
    {
      "id": "cooling-system",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Cooling System",
      "outputs": [
        {
          "productId": "CoolingSystem",
          "quantity": 1
        }
      ],
      "time": 10
    },
    {
      "id": "copper-powder",
      "inputs": [
        {
          "productId": "CopperIngot",
          "quantity": 30
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Copper Powder",
      "outputs": [
        {
          "productId": "CopperPowder",
          "quantity": 5
        }
      ],
      "time": 6
    },
    {
      "id": "copper-sheet",
      "inputs": [
        {
          "productId": "CopperIngot",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Copper Sheet",
      "outputs": [
        {
          "productId": "CopperSheet",
          "quantity": 1
        }
      ],
      "time": 6
    },
    {
      "id": "crystal-oscillator",
      "inputs": [
        {
          "productId": "QuartzResource",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Crystal Oscillator",
      "outputs": [
        {
          "productId": "CrystalOscillator",
          "quantity": 2
        }
      ],
      "time": 120
    },
    {
      "id": "electromagnetic-control-rod",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Electromagnetic Control Rod",
      "outputs": [
        {
          "productId": "ElectromagneticControlRod",
          "quantity": 2
        }
      ],
      "time": 30
    },
    {
      "id": "encased-industrial-beam",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Encased Industrial Beam",
      "outputs": [
        {
          "productId": "EncasedSteelBeam",
          "quantity": 1
        }
      ],
      "time": 10
    },
    {
      "id": "fabric",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Fabric",
      "outputs": [
        {
          "productId": "Fabric",
          "quantity": 1
        }
      ],
      "time": 4
    },
    {
      "id": "gas-Filter",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Gas Mask Filter",
      "outputs": [
        {
          "productId": "GasMaskFilter",
          "quantity": 1
        }
      ],
      "time": 8
    },
    {
      "id": "iodine-infused-GasMaskFilter",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Iodine Infused GasMaskFilter",
      "outputs": [
        {
          "productId": "HazmatFilter",
          "quantity": 1
        }
      ],
      "time": 16
    },
    {
      "id": "empty-canister",
      "inputs": [
        {
          "productId": "Plastic",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Empty Canister",
      "outputs": [
        {
          "productId": "EmptyCanister",
          "quantity": 4
        }
      ],
      "time": 4
    },
    {
      "id": "packaged-fuel",
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
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Packaged Fuel",
      "outputs": [
        {
          "productId": "PackagedFuel",
          "quantity": 2
        }
      ],
      "time": 3
    },
    {
      "id": "fused-modular-frame",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Fused Modular Frame",
      "outputs": [
        {
          "productId": "FusedModularFrame",
          "quantity": 1
        }
      ],
      "time": 40
    },
    {
      "id": "empty-fluid-tank",
      "inputs": [
        {
          "productId": "AluminumIngot",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Empty Fluid Tank",
      "outputs": [
        {
          "productId": "PressureTank",
          "quantity": 1
        }
      ],
      "time": 1
    },
    {
      "id": "black-powder",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Black Powder",
      "outputs": [
        {
          "productId": "Gunpowder",
          "quantity": 1
        }
      ],
      "time": 8
    },
    {
      "id": "heat-sink",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Heat Sink",
      "outputs": [
        {
          "productId": "HeatSink",
          "quantity": 1
        }
      ],
      "time": 8
    },
    {
      "id": "high-speed-connector",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "High-Speed Connector",
      "outputs": [
        {
          "productId": "HighSpeedConnector",
          "quantity": 1
        }
      ],
      "time": 16
    },
    {
      "id": "aluminum-ingot",
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
      "isVariablePower": false,
      "machineId": "Foundry",
      "name": "Aluminum Ingot",
      "outputs": [
        {
          "productId": "AluminumIngot",
          "quantity": 4
        }
      ],
      "time": 4
    },
    {
      "id": "caterium-ingot",
      "inputs": [
        {
          "productId": "CateriumOre",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Smelter",
      "name": "Caterium Ingot",
      "outputs": [
        {
          "productId": "CateriumIngot",
          "quantity": 1
        }
      ],
      "time": 4
    },
    {
      "id": "copper-ingot",
      "inputs": [
        {
          "productId": "Copper",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Smelter",
      "name": "Copper Ingot",
      "outputs": [
        {
          "productId": "CopperIngot",
          "quantity": 1
        }
      ],
      "time": 2
    },
    {
      "id": "iron-ingot",
      "inputs": [
        {
          "productId": "Iron",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Smelter",
      "name": "Iron Ingot",
      "outputs": [
        {
          "productId": "IronIngot",
          "quantity": 1
        }
      ],
      "time": 2
    },
    {
      "id": "steel-ingot",
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
      "isVariablePower": false,
      "machineId": "Foundry",
      "name": "Steel Ingot",
      "outputs": [
        {
          "productId": "SteelIngot",
          "quantity": 3
        }
      ],
      "time": 4
    },
    {
      "id": "reinforced-iron-plate",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Reinforced Iron Plate",
      "outputs": [
        {
          "productId": "IronPlateReinforced",
          "quantity": 1
        }
      ],
      "time": 12
    },
    {
      "id": "iron-plate",
      "inputs": [
        {
          "productId": "IronIngot",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Iron Plate",
      "outputs": [
        {
          "productId": "IronPlate",
          "quantity": 2
        }
      ],
      "time": 6
    },
    {
      "id": "iron-rod",
      "inputs": [
        {
          "productId": "IronIngot",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Iron Rod",
      "outputs": [
        {
          "productId": "IronRod",
          "quantity": 1
        }
      ],
      "time": 4
    },
    {
      "id": "-biofuel",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Biofuel",
      "outputs": [
        {
          "productId": "Biofuel",
          "quantity": 4
        }
      ],
      "time": 4
    },
    {
      "id": "fuel",
      "inputs": [
        {
          "productId": "Oil",
          "quantity": 6
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Fuel",
      "outputs": [
        {
          "productId": "Fuel",
          "quantity": 4
        },
        {
          "productId": "PolymerResin",
          "quantity": 3
        }
      ],
      "time": 6
    },
    {
      "id": "heavy-modular-frame",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Heavy Modular Frame",
      "outputs": [
        {
          "productId": "ModularFrameHeavy",
          "quantity": 1
        }
      ],
      "time": 30
    },
    {
      "id": "modular-frame",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Modular Frame",
      "outputs": [
        {
          "productId": "ModularFrame",
          "quantity": 2
        }
      ],
      "time": 60
    },
    {
      "id": "turbo-motor",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Turbo Motor",
      "outputs": [
        {
          "productId": "TurboMotor",
          "quantity": 1
        }
      ],
      "time": 32
    },
    {
      "id": "motor",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Motor",
      "outputs": [
        {
          "productId": "Motor",
          "quantity": 1
        }
      ],
      "time": 12
    },
    {
      "id": "nitric-acid",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Nitric Acid",
      "outputs": [
        {
          "productId": "NitricAcid",
          "quantity": 3
        }
      ],
      "time": 6
    },
    {
      "id": "nobelisk",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Nobelisk",
      "outputs": [
        {
          "productId": "Explosive",
          "quantity": 1
        }
      ],
      "time": 20
    },
    {
      "id": "non-fissile-uranium",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Non-fissile Uranium",
      "outputs": [
        {
          "productId": "NonFissileUranium",
          "quantity": 20
        },
        {
          "productId": "Water",
          "quantity": 6
        }
      ],
      "time": 24
    },
    {
      "id": "uranium-fuel-rod",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Uranium Fuel Rod",
      "outputs": [
        {
          "productId": "NuclearFuelRod",
          "quantity": 1
        }
      ],
      "time": 150
    },
    {
      "id": "packaged-alumina-solution",
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
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Packaged Alumina Solution",
      "outputs": [
        {
          "productId": "PackagedAluminaSolution",
          "quantity": 2
        }
      ],
      "time": 1
    },
    {
      "id": "packaged--biofuel",
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
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Packaged  Biofuel",
      "outputs": [
        {
          "productId": "PackagedBiofuel",
          "quantity": 2
        }
      ],
      "time": 3
    },
    {
      "id": "packaged-oil",
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
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Packaged Oil",
      "outputs": [
        {
          "productId": "PackagedOil",
          "quantity": 2
        }
      ],
      "time": 4
    },
    {
      "id": "packaged-nitric-acid",
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
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Packaged Nitric Acid",
      "outputs": [
        {
          "productId": "PackagedNitricAcid",
          "quantity": 1
        }
      ],
      "time": 2
    },
    {
      "id": "packaged-nitrogen-gas",
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
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Packaged Nitrogen Gas",
      "outputs": [
        {
          "productId": "PackagedNitrogenGas",
          "quantity": 1
        }
      ],
      "time": 1
    },
    {
      "id": "packaged-heavy-oil-residue",
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
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Packaged Heavy Oil Residue",
      "outputs": [
        {
          "productId": "PackagedOilResidue",
          "quantity": 2
        }
      ],
      "time": 4
    },
    {
      "id": "packaged-sulfuric-acid",
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
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Packaged Sulfuric Acid",
      "outputs": [
        {
          "productId": "PackagedSulfuricAcid",
          "quantity": 2
        }
      ],
      "time": 3
    },
    {
      "id": "packaged-turbofuel",
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
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Packaged Turbofuel",
      "outputs": [
        {
          "productId": "PackagedTurboFuel",
          "quantity": 2
        }
      ],
      "time": 6
    },
    {
      "id": "packaged-water",
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
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Packaged Water",
      "outputs": [
        {
          "productId": "PackagedWater",
          "quantity": 2
        }
      ],
      "time": 2
    },
    {
      "id": "petroleum-coke",
      "inputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 4
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Petroleum Coke",
      "outputs": [
        {
          "productId": "PetroleumCoke",
          "quantity": 12
        }
      ],
      "time": 6
    },
    {
      "id": "plastic",
      "inputs": [
        {
          "productId": "Oil",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Plastic",
      "outputs": [
        {
          "productId": "Plastic",
          "quantity": 2
        },
        {
          "productId": "HeavyOilResidue",
          "quantity": 1
        }
      ],
      "time": 6
    },
    {
      "id": "encased-plutonium-cell",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Encased Plutonium Cell",
      "outputs": [
        {
          "productId": "EncasedPlutoniumCell",
          "quantity": 1
        }
      ],
      "time": 12
    },
    {
      "id": "plutonium-fuel-rod",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Plutonium Fuel Rod",
      "outputs": [
        {
          "productId": "PlutoniumFuelRod",
          "quantity": 1
        }
      ],
      "time": 240
    },
    {
      "id": "plutonium-pellet",
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
      "isVariablePower": true,
      "machineId": "HadronCollider",
      "maxPower": 750,
      "minPower": 250,
      "name": "Plutonium Pellet",
      "outputs": [
        {
          "productId": "PlutoniumPellet",
          "quantity": 30
        }
      ],
      "time": 60
    },
    {
      "id": "power-shard-(1)",
      "inputs": [
        {
          "productId": "PowerSlugGreen",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Power Shard (1)",
      "outputs": [
        {
          "productId": "PowerShard",
          "quantity": 1
        }
      ],
      "time": 8
    },
    {
      "id": "power-shard-(2)",
      "inputs": [
        {
          "productId": "PowerSlugYellow",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Power Shard (2)",
      "outputs": [
        {
          "productId": "PowerShard",
          "quantity": 2
        }
      ],
      "time": 12
    },
    {
      "id": "power-shard-(5)",
      "inputs": [
        {
          "productId": "PowerSlugPurple",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Power Shard (5)",
      "outputs": [
        {
          "productId": "PowerShard",
          "quantity": 5
        }
      ],
      "time": 24
    },
    {
      "id": "pressure-conversion-cube",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Pressure Conversion Cube",
      "outputs": [
        {
          "productId": "ConversionCube",
          "quantity": 1
        }
      ],
      "time": 60
    },
    {
      "id": "alternate-pure-aluminum-ingot",
      "inputs": [
        {
          "productId": "AluminumScrap",
          "quantity": 2
        }
      ],
      "isDefault": false,
      "isVariablePower": false,
      "machineId": "Smelter",
      "name": "Alternate: Pure Aluminum Ingot",
      "outputs": [
        {
          "productId": "AluminumIngot",
          "quantity": 1
        }
      ],
      "time": 2
    },
    {
      "id": "quartz-crystal",
      "inputs": [
        {
          "productId": "RawQuartz",
          "quantity": 5
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Quartz Crystal",
      "outputs": [
        {
          "productId": "QuartzResource",
          "quantity": 3
        }
      ],
      "time": 8
    },
    {
      "id": "quickwire",
      "inputs": [
        {
          "productId": "CateriumIngot",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Quickwire",
      "outputs": [
        {
          "productId": "Quickwire",
          "quantity": 5
        }
      ],
      "time": 5
    },
    {
      "id": "radio-control-unit",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Radio Control Unit",
      "outputs": [
        {
          "productId": "RadioControlUnit",
          "quantity": 2
        }
      ],
      "time": 48
    },
    {
      "id": "residual-fuel",
      "inputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 6
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Residual Fuel",
      "outputs": [
        {
          "productId": "Fuel",
          "quantity": 4
        }
      ],
      "time": 6
    },
    {
      "id": "residual-plastic",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Residual Plastic",
      "outputs": [
        {
          "productId": "Plastic",
          "quantity": 2
        }
      ],
      "time": 6
    },
    {
      "id": "residual-rubber",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Residual Rubber",
      "outputs": [
        {
          "productId": "Rubber",
          "quantity": 2
        }
      ],
      "time": 6
    },
    {
      "id": "rotor",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Rotor",
      "outputs": [
        {
          "productId": "Rotor",
          "quantity": 1
        }
      ],
      "time": 15
    },
    {
      "id": "rubber",
      "inputs": [
        {
          "productId": "Oil",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Rubber",
      "outputs": [
        {
          "productId": "Rubber",
          "quantity": 2
        },
        {
          "productId": "HeavyOilResidue",
          "quantity": 2
        }
      ],
      "time": 6
    },
    {
      "id": "screw",
      "inputs": [
        {
          "productId": "IronRod",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Screw",
      "outputs": [
        {
          "productId": "IronScrew",
          "quantity": 4
        }
      ],
      "time": 6
    },
    {
      "id": "silica",
      "inputs": [
        {
          "productId": "RawQuartz",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Silica",
      "outputs": [
        {
          "productId": "Silica",
          "quantity": 5
        }
      ],
      "time": 8
    },
    {
      "id": "smart-plating",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Smart Plating",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_1",
          "quantity": 1
        }
      ],
      "time": 30
    },
    {
      "id": "versatile-framework",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Versatile Framework",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_2",
          "quantity": 2
        }
      ],
      "time": 24
    },
    {
      "id": "automated-wiring",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Automated Wiring",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_3",
          "quantity": 1
        }
      ],
      "time": 24
    },
    {
      "id": "modular-engine",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Modular Engine",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_4",
          "quantity": 1
        }
      ],
      "time": 60
    },
    {
      "id": "adaptive-control-unit",
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
      "isVariablePower": false,
      "machineId": "Manufacturer",
      "name": "Adaptive Control Unit",
      "outputs": [
        {
          "productId": "SpaceElevatorPart_5",
          "quantity": 2
        }
      ],
      "time": 120
    },
    {
      "id": "spiked-rebar",
      "inputs": [
        {
          "productId": "IronRod",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Spiked Rebar",
      "outputs": [
        {
          "productId": "Rebar",
          "quantity": 1
        }
      ],
      "time": 4
    },
    {
      "id": "stator",
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
      "isVariablePower": false,
      "machineId": "Assembler",
      "name": "Stator",
      "outputs": [
        {
          "productId": "Stator",
          "quantity": 1
        }
      ],
      "time": 12
    },
    {
      "id": "steel-beam",
      "inputs": [
        {
          "productId": "SteelIngot",
          "quantity": 4
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Steel Beam",
      "outputs": [
        {
          "productId": "SteelBeam",
          "quantity": 1
        }
      ],
      "time": 4
    },
    {
      "id": "steel-pipe",
      "inputs": [
        {
          "productId": "SteelIngot",
          "quantity": 3
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Steel Pipe",
      "outputs": [
        {
          "productId": "SteelPipe",
          "quantity": 2
        }
      ],
      "time": 6
    },
    {
      "id": "sulfuric-acid",
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
      "isVariablePower": false,
      "machineId": "OilRefinery",
      "name": "Sulfuric Acid",
      "outputs": [
        {
          "productId": "SulfuricAcid",
          "quantity": 5
        }
      ],
      "time": 6
    },
    {
      "id": "unpackage-alumina-solution",
      "inputs": [
        {
          "productId": "PackagedAluminaSolution",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Unpackage Alumina Solution",
      "outputs": [
        {
          "productId": "Alumina",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "time": 1
    },
    {
      "id": "unpackage--biofuel",
      "inputs": [
        {
          "productId": "PackagedBiofuel",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Unpackage  Biofuel",
      "outputs": [
        {
          "productId": "Biofuel",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "time": 2
    },
    {
      "id": "unpackage-fuel",
      "inputs": [
        {
          "productId": "PackagedFuel",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Unpackage Fuel",
      "outputs": [
        {
          "productId": "Fuel",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "time": 2
    },
    {
      "id": "unpackage-nitric-acid",
      "inputs": [
        {
          "productId": "PackagedNitricAcid",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Unpackage Nitric Acid",
      "outputs": [
        {
          "productId": "NitricAcid",
          "quantity": 1
        },
        {
          "productId": "PressureTank",
          "quantity": 1
        }
      ],
      "time": 3
    },
    {
      "id": "unpackage-nitrogen-gas",
      "inputs": [
        {
          "productId": "PackagedNitrogenGas",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Unpackage Nitrogen Gas",
      "outputs": [
        {
          "productId": "NitrogenGas",
          "quantity": 4
        },
        {
          "productId": "PressureTank",
          "quantity": 1
        }
      ],
      "time": 1
    },
    {
      "id": "unpackage-heavy-oil-residue",
      "inputs": [
        {
          "productId": "PackagedOilResidue",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Unpackage Heavy Oil Residue",
      "outputs": [
        {
          "productId": "HeavyOilResidue",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "time": 6
    },
    {
      "id": "unpackage-oil",
      "inputs": [
        {
          "productId": "PackagedOil",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Unpackage Oil",
      "outputs": [
        {
          "productId": "Oil",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "time": 2
    },
    {
      "id": "unpackage-sulfuric-acid",
      "inputs": [
        {
          "productId": "PackagedSulfuricAcid",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Unpackage Sulfuric Acid",
      "outputs": [
        {
          "productId": "SulfuricAcid",
          "quantity": 1
        },
        {
          "productId": "EmptyCanister",
          "quantity": 1
        }
      ],
      "time": 1
    },
    {
      "id": "unpackage-turbofuel",
      "inputs": [
        {
          "productId": "PackagedTurboFuel",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Unpackage Turbofuel",
      "outputs": [
        {
          "productId": "TurboFuel",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "time": 6
    },
    {
      "id": "unpackage-water",
      "inputs": [
        {
          "productId": "PackagedWater",
          "quantity": 2
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Packager",
      "name": "Unpackage Water",
      "outputs": [
        {
          "productId": "Water",
          "quantity": 2
        },
        {
          "productId": "EmptyCanister",
          "quantity": 2
        }
      ],
      "time": 1
    },
    {
      "id": "encased-uranium-cell",
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
      "isVariablePower": false,
      "machineId": "Blender",
      "name": "Encased Uranium Cell",
      "outputs": [
        {
          "productId": "UraniumCell",
          "quantity": 5
        },
        {
          "productId": "SulfuricAcid",
          "quantity": 2
        }
      ],
      "time": 12
    },
    {
      "id": "wire",
      "inputs": [
        {
          "productId": "CopperIngot",
          "quantity": 1
        }
      ],
      "isDefault": true,
      "isVariablePower": false,
      "machineId": "Constructor",
      "name": "Wire",
      "outputs": [
        {
          "productId": "Wire",
          "quantity": 2
        }
      ],
      "time": 4
    }
] as RecipeYAML[];