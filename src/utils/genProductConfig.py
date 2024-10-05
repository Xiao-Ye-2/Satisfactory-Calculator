import os
import re
import yaml


image_dir = 'src/public/images/'

products = []

def format_name(image_name):
    # Remove the file extension
    name = os.path.splitext(image_name)[0]

    formatted_name = ''.join([part for part in name.split('_')])
    # Insert space before capital letters to separate concatenated words like "IronRods"
    spaced_name = re.sub(r'(?<!^)(?=[A-Z])', ' ', formatted_name)

    return spaced_name

# Iterate through all image files in the directory
for image_file in os.listdir(image_dir):
    if image_file.endswith(('.png', '.jpg', '.jpeg')):  # Ensure it's an image file
        product_id = os.path.splitext(image_file)[0]  # Use the image name as id
        product_name = format_name(image_file)  # Format name from image file

        # Create a dictionary for each product
        product = {
            'id': f"{product_id}",
            'name': f"{product_name}",
            'isIngredient': False,  # Set isIngredient to false
            'imagePath': f"/images/{image_file}"  # Image path
        }

        # Append to the product list
        products.append(product)

# Output the result as a YAML file
with open('products.yaml', 'w') as yaml_file:
    yaml.dump(products, yaml_file, default_flow_style=False)

print("products.yaml file generated successfully.")
