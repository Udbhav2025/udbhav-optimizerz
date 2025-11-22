from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import pandas as pd
import joblib
import numpy as np

# Load model and scaler
try:
    model = joblib.load("heart_rf_model.joblib")
    scaler = joblib.load("scaler.joblib")
except FileNotFoundError as e:
    print(f"Warning: {e}")
    model = None
    scaler = None

# Numeric features used for scaling
numeric_features = [
    "age", "resting_blood_pressure", "cholesterol",
    "max_heart_rate_achieved", "st_depression"
]


class HeartInput(BaseModel):
    # Frontend form fields
    name: Optional[str] = None
    age: Optional[float] = None
    sex: Optional[int] = None
    cholesterol: Optional[float] = None
    bp: Optional[float] = None  # Blood pressure
    fbs: Optional[bool] = False  # Fasting blood sugar > 120
    thalachh: Optional[float] = None  # Max heart rate achieved
    diabetes: Optional[bool] = False
    obesity: Optional[bool] = False
    shortness_of_breath: Optional[bool] = False
    chest_pain: Optional[bool] = False
    sweating: Optional[bool] = False
    stress: Optional[bool] = False
    poor_sleep: Optional[bool] = False
    smoking: Optional[bool] = False
    
    # Allow model-specific fields as well for direct API calls
    resting_blood_pressure: Optional[float] = None
    max_heart_rate_achieved: Optional[float] = None
    st_depression: Optional[float] = None
    chest_pain_type: Optional[int] = None
    fasting_blood_sugar: Optional[int] = None
    resting_ecg: Optional[int] = None
    exercise_induced_angina: Optional[int] = None
    st_slope: Optional[int] = None
    num_major_vessels: Optional[int] = None
    thalassemia: Optional[int] = None


app = FastAPI(
    title="Heart Disease Prediction API",
    description="Predicts heart disease risk using Random Forest",
    version="1.0"
)

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
def predict(patient: HeartInput):

    # Convert user input → DataFrame
    df = pd.DataFrame([patient.dict()])

    # Scale only numeric values
    df[numeric_features] = scaler.transform(df[numeric_features])

    # Predict
    prediction = int(model.predict(df)[0])
    probability = round(model.predict_proba(df)[0][1] * 100, 2)

    result = "High Risk" if prediction == 1 else "Low Risk"

    return {
        "prediction": prediction,
        "risk_percentage": probability,
        "health_status": result
    }
