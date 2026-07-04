from pathlib import Path
import shutil


OUTPUT_FOLDER = Path("outputs")
OUTPUT_FOLDER.mkdir(exist_ok=True)


def generate_virtual_tryon(image_path: str, recommendation: dict):

    input_path = Path(image_path)

    output_filename = f"generated_{input_path.name}"

    output_path = OUTPUT_FOLDER / output_filename

    # Mock AI:
    # Simply copies the uploaded image to outputs/
    shutil.copy(input_path, output_path)

    return {
        "output_image": str(output_path),
        "outfit": recommendation["outfit"],
        "color": recommendation["color"],
        "category": recommendation["category"]
    }
