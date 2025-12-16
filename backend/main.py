from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import joblib
import pickle
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load saved model and preprocessors
model = joblib.load("interview_model.pkl")
scaler = joblib.load("scaler.pkl")
mlb = joblib.load("skills_encoder.pkl")

class InputData(BaseModel):
    Skills: list[str]
    GPA: float
    Experience: float
    Certifications: float


@app.post("/predict")
def predict_score(data: InputData):

    # Encode Skills (MultiLabelBinarizer)
    skills_encoded = mlb.transform([data.Skills])[0]

    # Scale numeric values
    numeric_scaled = scaler.transform([[data.GPA, data.Experience, data.Certifications]])[0]

    # Combine final feature vector
    final_features = np.concatenate([skills_encoded, numeric_scaled])

    # Predict
    prediction = model.predict([final_features])[0]

    return {"Predicted_Score": round(float(prediction), 2)}
