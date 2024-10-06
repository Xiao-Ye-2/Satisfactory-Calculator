import yaml
import json
import re

json_file_path = 'data.json'
yaml_output_path = 'recipes_cleaned.yaml'

with open(json_file_path, 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)

# Function to clean prefixes and suffixes from IDs
def clean_id(id_str):
    id_str = re.sub(r'^(Desc_|BP_EquipmentDescriptor|Recipe_)', '', id_str)  # Remove 'Desc_', 'BP_EquipmentDescriptor', 'Recipe_'
    id_str = re.sub(r'(_C|Mk1_C)$', '', id_str)  # Remove '_C', 'Mk1_C'
    return id_str

# Process and convert to desired format
recipes_yaml = []
for recipe_key, recipe in data['recipes'].items():
    # Skip recipes where machineId is 'unknown'
    if not recipe.get('producedIn') or len(recipe['producedIn']) == 0:
        continue

    recipe_yaml = {
        'id': clean_id(recipe['slug']),
        'name': recipe['name'],
        'time': recipe['time'],
        'inputs': [{'productId': clean_id(ing['item']), 'quantity': ing['amount']} for ing in recipe['ingredients']],
        'outputs': [{'productId': clean_id(prod['item']), 'quantity': prod['amount']} for prod in recipe['products']],
        'machineId': clean_id(recipe['producedIn'][0]),
        'isDefault': not recipe.get('alternate', False),
        'isVariablePower': recipe.get('isVariablePower', False),
        'minPower': recipe.get('minPower', 0) if recipe.get('isVariablePower', False) else None,
        'maxPower': recipe.get('maxPower', 0) if recipe.get('isVariablePower', False) else None
    }
    recipes_yaml.append(recipe_yaml)

# Remove all null fields in Yaml
for recipe in recipes_yaml:
    for key, value in list(recipe.items()):
        if value is None:
            del recipe[key]

# Write to YAML file
with open(yaml_output_path, 'w', encoding='utf-8') as yaml_file:
    yaml.dump(recipes_yaml, yaml_file)

print("Conversion complete! Cleaned recipes saved to", yaml_output_path)
