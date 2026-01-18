from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
async def analyze_image(image: UploadFile = File(...)):
    # 🔹 For now, dummy output (replace with model later)
    return {
        "land_type": "Agricultural",
        "confidence": 0.92,
        "objects": ["Fields", "Roads", "Buildings"],
        "description": "The satellite image shows agricultural land with road networks and sparse settlements."
    }
