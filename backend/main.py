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

with open("industry_columns.pkl", "rb") as f:
    industry_columns = pickle.load(f) 


class InputData(BaseModel):
    Skills: list[str]
    GPA: float
    Experience: float
    Certifications: float
    Age: float
    Industry: str


@app.post("/predict")
def predict_score(data: InputData):

    # Encode Skills (MultiLabelBinarizer)
    skills_encoded = mlb.transform([data.Skills])[0]

    # Scale numeric values
    numeric_scaled = scaler.transform([[data.GPA, data.Experience, data.Certifications, data.Age]])[0]

    # One-hot encode Industry
    industry_vector = [0] * len(industry_columns)
    industry_key = f"Industry_{data.Industry}"

    if industry_key in industry_columns:
        idx = industry_columns.index(industry_key)
        industry_vector[idx] = 1

    # Combine final feature vector
    final_features = np.concatenate([skills_encoded, numeric_scaled, industry_vector])

    # Predict
    prediction = model.predict([final_features])[0]

    return {"Predicted_Score": round(float(prediction), 2)}
