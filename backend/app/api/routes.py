from fastapi import APIRouter, UploadFile, File
import shutil
from pathlib import Path
from app.services.recommendation import recommend_outfit

from app.ai.inference import generate_virtual_tryon

router = APIRouter()

UPLOAD_FOLDER = Path("uploads")
UPLOAD_FOLDER.mkdir(exist_ok=True)


@router.get("/")
def home():
    return {
        "message": "Welcome to AI Virtual Fashion Stylist API"
    }


@router.post("/upload")
async def upload_image(file: UploadFile = File(...)):

    file_path = UPLOAD_FOLDER / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": file.filename,
        "message": "Image uploaded successfully!"
    }

from pydantic import BaseModel


class GenerateRequest(BaseModel):
    filename: str
    occasion: str
    style: str


@router.post("/generate")
async def generate_outfit(request: GenerateRequest):

    recommendation = recommend_outfit(
    request.occasion,
    request.style
    )

    result = generate_virtual_tryon(
    f"uploads/{request.filename}",
    recommendation
    )

    return {
    "message": "Outfit generated successfully!",
    "recommendation": recommendation,
    "generated_image": result["output_image"]
    }