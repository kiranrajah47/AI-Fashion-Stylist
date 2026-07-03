from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI Fashion Stylist Backend is Running!"}