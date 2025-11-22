import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      title: "Health Monitoring",
      description: "Track your heart health metrics in real-time with advanced monitoring systems."
    },
    {
      title: "Risk Assessment",
      description: "Get accurate predictions about heart disease risk using machine learning."
    },
    {
      title: "Progress Tracking",
      description: "Monitor your health improvements and track your wellness journey."
    },
    {
      title: "Data Security",
      description: "Your health data is protected with enterprise-grade security measures."
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Heart Health,
              <span className="text-gradient"> Our Priority</span>
            </h1>
            <p className="hero-description">
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

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose <span className="text-primary">Cardio360</span>
            </h2>
            <p className="section-description">
              Comprehensive heart health management with cutting-edge technology
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">
                  <div className="icon-placeholder">❤️</div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">95%</div>
              <p className="stat-label">Prediction Accuracy</p>
            </div>
            <div className="stat-item">
              <div className="stat-value">10k+</div>
              <p className="stat-label">Patients Monitored</p>
            </div>
            <div className="stat-item">
              <div className="stat-value">24/7</div>
              <p className="stat-label">Health Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">
            Ready to Take Control of Your Heart Health?
          </h2>
          <p className="cta-description">
            Join thousands of users who are monitoring their cardiovascular health with Cardio360
          </p>
          <Link to="/predict" className="btn btn-primary btn-large">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
