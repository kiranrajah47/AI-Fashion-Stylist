from fastapi import APIRouter, UploadFile, File
import shutil
from pathlib import Path

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