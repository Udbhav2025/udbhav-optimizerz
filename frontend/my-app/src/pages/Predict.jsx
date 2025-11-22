import React, { useState } from "react";
import { Stethoscope } from "lucide-react";
import "../predict.css";

function Predict() {
  const [form, setForm] = useState({
    cholesterol: "",
    bp: "",
    diabetes: false,
    obesity: false,
    shortness_of_breath: false,
    chest_pain: false,
    sweating: false,
    stress: false,
    poor_sleep: false,
    smoking: false,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Server Error!");
      const data = await response.json();
      setResult(data.probability); // expects backend to return { probability: number }
    } catch (err) {
      setError("Failed to fetch prediction.");
    }
    setLoading(false);
  };

  return (
    <div className="predict-page">
      <div className="container">
        <div className="predict-content">
          <h1 className="predict-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Stethoscope size={32} />
            Heart Attack Risk Factors
          </h1>
          <form className="predict-form" onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <fieldset className="form-section">
              <legend>Report Information</legend>
              <div className="form-group">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={form.name || ""}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Age
                  <input
                    type="number"
                    name="age"
                    value={form.age || ""}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Sex
                  <select
                    name="sex"
                    value={form.sex || ""}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                  </select>
                </label>
              </div>
            </fieldset>

            {/* Medical Data Section */}
            <fieldset className="form-section">
              <legend>Clinical Measurements</legend>
              <div className="form-group">
                <label>
                  Cholesterol (mg/dL)
                  <input
                    type="number"
                    name="cholesterol"
                    value={form.cholesterol}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Blood Pressure (mmHg)
                  <input
                    type="number"
                    name="bp"
                    value={form.bp}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Resting Blood Sugar &gt; 120mg/dl
                  <input
                    type="checkbox"
                    name="fbs"
                    checked={form.fbs || false}
                    onChange={handleChange}
                  /> 
                </label>
              </div>
              <div className="form-group">
                <label>
                  Max Heart Rate Achieved
                  <input
                    type="number"
                    name="thalachh"
                    value={form.thalachh || ""}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </fieldset>

            {/* Symptoms and Other Risk Factors Section */}
            <fieldset className="form-section">
              <legend>Symptoms & Risk Factors</legend>
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="diabetes"
                    checked={form.diabetes}
                    onChange={handleChange}
                  />
                  Diabetes
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="obesity"
                    checked={form.obesity}
                    onChange={handleChange}
                  />
                  Obesity
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="shortness_of_breath"
                    checked={form.shortness_of_breath}
                    onChange={handleChange}
                  />
                  Shortness of breath
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="chest_pain"
                    checked={form.chest_pain}
                    onChange={handleChange}
                  />
                  Chest pain
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="sweating"
                    checked={form.sweating}
                    onChange={handleChange}
                  />
                  Sweating
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="stress"
                    checked={form.stress}
                    onChange={handleChange}
                  />
                  Stress
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="poor_sleep"
                    checked={form.poor_sleep}
                    onChange={handleChange}
                  />
                  Poor sleep
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="smoking"
                    checked={form.smoking}
                    onChange={handleChange}
                  />
                  Smoking
                </label>
              </div>
            </fieldset>

            {/* Submit Button */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? "Calculating..." : "Predict Heart Attack Risk"}
              </button>
            </div>
          </form>

          {/* Prediction Output */}
          <div className="predict-output">
            {loading && <p>Loading prediction...</p>}
            {result !== null && (
              <div className="result-card">
                <h2>Probability Score</h2>
                <p>
                  {form.name ? <strong>{form.name}, </strong> : null}
                  your predicted risk of heart attack:{" "}
                  <span className="probability-score">
                    {(result * 100).toFixed(2)}%
                  </span>
                </p>
              </div>
            )}
            {error && <p className="error">{error}</p>}
          </div>
          <div className="risk-report" style={{ marginTop: '2rem' }}>
            {/* Additional structured report results can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Predict;
