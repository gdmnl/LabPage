from PIL import Image

# Load the image
input_image_path = 'public/ruskeyavatar.png'
image = Image.open(input_image_path)

# Define the new size
new_size = (image.width // 2, image.height // 2)  # Replace width and height with the desired dimensions

# Scale down the image
scaled_image = image.resize(new_size, Image.ANTIALIAS)

# Save the scaled image
output_image_path = 'public/ruskeyavatar_scaled.png'
scaled_image.save(output_image_path)

print(f"Image scaled down and saved to {output_image_path}")