import { Link } from "react-router-dom";

const Home = () => {
  // Custom styles for heading and topics
  const headingStyle = {
    fontSize: "3.3rem", // Increased size for main heading
    fontWeight: "bold",
    marginBottom: "1.2rem"
  };

  const topicStyle = {
    fontSize: "2.1rem", // Slight increase for section topics
    fontWeight: 600,
    margin: "2.2rem 0 1.2rem 0",
    textAlign: "center"
  };

  const textStyle = {
    fontSize: "1.18rem",
    marginBottom: "1.1rem",
    textAlign: "left"
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" style={headingStyle}>
              Your Heart Health,
              <span className="text-gradient"> Our Priority</span>
            </h1>
            <p className="hero-description" style={{ fontSize: "1.3rem" }}>
              Advanced heart disease prediction and monitoring system powered by AI. 
              Take control of your cardiovascular health with data-driven insights.
            </p>
            <div className="hero-buttons">
              <Link to="/predict" className="btn btn-primary">
                Start Prediction
              </Link>
              <Link to="/dashboard" className="btn btn-outline">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-brief">
        <div className="container">
          <div style={topicStyle}>Why Use Our ML Heart Risk System?</div>
          <div style={textStyle}>
            <b>Continuous Prediction:</b> Your heart risk changes every day—not just once at the doctor. Our system gives ongoing predictions as your data updates, offering real-time insights.
          </div>
          <div style={textStyle}>
            <b>Early Screening Before Symptoms:</b> Most people visit hospitals only after problems occur. Our solution screens you early, alerting you to risks years before major tests are needed.
          </div>
          <div style={textStyle}>
            <b>Cost-Effective:</b> Medical tests can be expensive and repetitive. Our AI tells you when tests are actually necessary, helping you avoid unnecessary spending.
          </div>
          <div style={textStyle}>
            <b>Works with Partial Data:</b> Even if you don’t have complete medical information (like cholesterol or ECG), our model predicts risk with the data you provide.
          </div>
          <div style={textStyle}>
            <b>Ideal for Rural & Remote Areas:</b> No cardiologist nearby? Our tool acts as a rapid pre-diagnosis system, bringing expert-level screening everywhere.
          </div>
          <div style={textStyle}>
            <b>Doctor Support & Patient Prioritization:</b> Hospitals can instantly identify and prioritize high-risk patients, speeding up care before lab results arrive.
          </div>
          <div style={textStyle}>
            <b>Long-Term Health Tracking:</b> Track trends in blood pressure, sleep, stress, and smoking. Our app visualizes your health patterns over time—something a single clinic visit can’t do.
          </div>
          <div style={textStyle}>
            <b>Preventive Healthcare Focus:</b> We enable you to Predict → Prevent → Protect—catching problems before symptoms start.
          </div>

          <div style={topicStyle}>How Our ML System Works</div>
          <div style={textStyle}>
            <b>Multi-Model Hybrid:</b> Combines Logistic Regression and Random Forest for highly accurate results.
          </div>
          <div style={textStyle}>
            <b>Smart Missing Data Handling:</b> Uses imputation and feature weighting—rare among typical hackathon projects.
          </div>
          <div style={textStyle}>
            <b>Personalized Risk Scoring:</b> Adapts to diabetes, obesity, gender, age, and your lifestyle factors.
          </div>
          <div style={textStyle}>
            <b>Explainable Results:</b> Dashboard shows key risk factors, feature importance, and condition severity, so you know <em>why</em> the model predicts a certain risk.
          </div>
          <div style={textStyle}>
            <b>Trend-Based Analysis:</b> Monitors your health data over time, revealing patterns like rising blood pressure or increased stress for deeper insights.
          </div>

          <div style={topicStyle}>Our Data Approach</div>
          <div style={textStyle}>
            <b>Primary Database: MongoDB</b> — Flexible for messy, varied health records; perfectly fits our user health history storage; grows easily to support thousands of patients.
          </div>
          <div style={textStyle}>
            <b>What We Store:</b> User profile, medical details (BP, cholesterol, diabetes, obesity), lifestyle factors (sleep, stress, smoking), risk scores, and timestamps.
          </div>
          <div style={textStyle}>
            <b>Structured Option:</b> (If required) PostgreSQL for strict reliability and ACID consistency.
          </div>

          <div className="final-judge-statement" style={{ marginTop: '2rem', background: 'rgba(0,0,0,0.04)', borderRadius: 8, padding: '1.5rem' }}>
            <strong>Hackathon-Ready Summary:</strong>
            <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
              “Our project is not a replacement for doctors; it is an early-warning system. We help users know when they actually need medical tests. We predict risk even with missing data, track long-term health patterns, and support doctors with fast prioritisation. Hospitals can use this for pre-screening thousands of patients. That’s the real complexity.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
