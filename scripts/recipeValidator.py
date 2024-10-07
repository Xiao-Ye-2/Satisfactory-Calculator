import yaml
import os

products_file_path = 'data/products.yaml'
recipes_file_path = 'data/recipes.yaml'
machines_file_path = 'data/machines.yaml'

# Load products, recipes, and machines from the YAML files
with open(products_file_path, 'r') as products_file:
    products = yaml.safe_load(products_file)

with open(recipes_file_path, 'r') as recipes_file:
    recipes = yaml.safe_load(recipes_file)

with open(machines_file_path, 'r') as machines_file:
    machines = yaml.safe_load(machines_file)

valid_product_ids = {product['id'] for product in products}
valid_machine_ids = {machine['id'] for machine in machines}
recipe_ids = set()
duplicate_recipes = []

for recipe in recipes:
    recipe_id = recipe['id']

    # Check for duplicate recipe IDs
    if recipe_id in recipe_ids:
        duplicate_recipes.append(recipe_id)
    else:
        recipe_ids.add(recipe_id)

    # Check inputs
    for input_item in recipe['inputs']:
        if input_item['productId'] not in valid_product_ids:
            print(f"Invalid input in recipe '{recipe_id}': {input_item['productId']}")

    # Check outputs
    for output_item in recipe['outputs']:
        if output_item['productId'] not in valid_product_ids:
            print(f"Invalid output in recipe '{recipe_id}': {output_item['productId']}")

    # Check machine
    if recipe['machineId'] not in valid_machine_ids:
        print(f"Invalid machine in recipe '{recipe_id}': {recipe['machineId']}")

if duplicate_recipes:
    print("Duplicate recipe IDs found:")
    for duplicate_id in duplicate_recipes:
        print(f"- {duplicate_id}")

print("Recipe validation completed.")
