from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib


model = joblib.load("heart_rf_model.joblib")
scaler = joblib.load("scaler.joblib")

# Numeric features used for scaling
numeric_features = [
    "age", "resting_blood_pressure", "cholesterol",
    "max_heart_rate_achieved", "st_depression"
]


class HeartInput(BaseModel):
    age: float
    resting_blood_pressure: float
    cholesterol: float
    max_heart_rate_achieved: float
    st_depression: float
    sex: int
    chest_pain_type: int
    fasting_blood_sugar: int
    resting_ecg: int
    exercise_induced_angina: int
    st_slope: int
    num_major_vessels: int
    thalassemia: int


app = FastAPI(
    title="Heart Disease Prediction API",
    description="Predicts heart disease risk using Random Forest",
    version="1.0"
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
