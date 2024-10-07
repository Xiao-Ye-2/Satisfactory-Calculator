import os

def rename_images_in_folder(folder_path):
    for filename in os.listdir(folder_path):
        if filename.startswith("IconDesc_") or filename.endswith("_256.png"):
            # Remove the "IconDesc_" prefix
            new_filename = filename.replace("IconDesc_", "")
            # Remove the "_256" suffix (preserving the .png extension)
            new_filename = new_filename.replace("_256.png", ".png")

            # Construct the full paths
            old_file = os.path.join(folder_path, filename)
            new_file = os.path.join(folder_path, new_filename)

            # Rename the file
            os.rename(old_file, new_file)
            print(f'Renamed: {filename} -> {new_filename}')


images_folder = 'public/machines'
rename_images_in_folder(images_folder)