import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import "./Home.css";

// Import images
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import home4 from "../assets/home4.png";
import home5 from "../assets/home5.png";

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const features = [
    {
      icon: "📊",
      title: "AI-Powered Portfolio Optimization",
      description:
        "Advanced algorithms create diversified portfolios tailored to your risk appetite and financial goals.",
    },
    {
      icon: "📈",
      title: "Real-Time Market Analytics",
      description:
        "Track investments with live market data, performance metrics, and predictive insights.",
    },
    {
      icon: "🎯",
      title: "Smart Investment Recommendations",
      description:
        "Get personalized suggestions for stocks, mutual funds, and other assets based on market analysis.",
    },
    {
      icon: "🛡️",
      title: "Comprehensive Risk Management",
      description:
        "Advanced risk assessment tools to protect your investments and maximize returns.",
    },
    {
      icon: "📰",
      title: "Market Intelligence & News",
      description:
        "Stay updated with the latest market news and expert analysis for informed decisions.",
    },
    {
      icon: "💰",
      title: "Tax Optimization Strategies",
      description:
        "Discover tax-saving investment opportunities and optimize your portfolio for better returns.",
    },
  ];

  const stats = [
    {
      number: "10K+",
      label: "Active Investors",
      icon: "👥",
      description: "Growing community of smart investors",
    },
    {
      number: "$50M+",
      label: "Portfolio Value Managed",
      icon: "💼",
      description: "Total assets under management",
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: "📈",
      description: "Portfolios outperforming benchmarks",
    },
    {
      number: "24/7",
      label: "Market Monitoring",
      icon: "🔄",
      description: "Continuous market surveillance",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Portfolio Manager",
      content:
        "Winvester has revolutionized my investment strategy. The AI recommendations are incredibly accurate and the portfolio optimization is outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Retail Investor",
      content:
        "Finally, an investment platform that truly understands my risk tolerance and financial objectives. The results speak for themselves.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Financial Advisor",
      content:
        "The sophisticated algorithms and real-time analytics have transformed how I manage client portfolios. Exceptional results.",
      rating: 5,
    },
  ];

  return (
    <div className="home-container" ref={containerRef}>
      <Navbar />

      {/* Hero Section */}
      <motion.section className="hero-section" style={{ y, opacity }}>
        <div className="hero-background">
          <img src={home1} alt="Background" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Intelligent Investment
              <span className="gradient-text"> Made Simple</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Winvester combines cutting-edge AI technology with financial
              expertise to create personalized investment portfolios that
              maximize returns while minimizing risk.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="cta-button primary"
                onClick={() => navigate("/form")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Portfolio
              </motion.button>
              <motion.button
                className="cta-button secondary"
                onClick={() => navigate("/dashboard")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Dashboard
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="stats-section"
        ref={statsRef}
        initial={{ opacity: 0 }}
        animate={isStatsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="stats-background">
          <img src={home2} alt="Stats Background" className="stats-bg-image" />
          <div className="stats-overlay"></div>
        </div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="stat-header">
                <div className="stat-icon">{stat.icon}</div>
              </div>

              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                animate={isStatsInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                }}
              >
                {stat.number}
              </motion.div>

              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-background">
          <img src={home3} alt="About Background" className="about-bg-image" />
          <div className="about-overlay"></div>
        </div>

        <div className="about-container">
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Why Choose Winvester?</h2>
              <p>
                Winvester is more than just an investment platform. We're your
                trusted partner in building wealth through intelligent,
                data-driven investment strategies. Our advanced AI algorithms
                analyze market trends, assess risk factors, and create
                personalized portfolios that align with your financial goals.
              </p>
              <p>
                Whether you're a seasoned investor or just starting your
                investment journey, Winvester provides the tools, insights, and
                guidance you need to make informed decisions and achieve your
                financial objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="features-section"
        ref={featuresRef}
        initial={{ opacity: 0 }}
        animate={isFeaturesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="features-background">
          <img
            src={home4}
            alt="Features Background"
            className="features-bg-image"
          />
          <div className="features-overlay"></div>
        </div>

        <div className="features-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Powerful Features</h2>
            <p>
              Everything you need to build and manage a successful investment
              portfolio
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Visual Section */}
      <motion.section
        className="visual-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="visual-background">
          <img
            src={home5}
            alt="Visual Background"
            className="visual-bg-image"
          />
          <div className="visual-overlay"></div>
        </div>

        <div className="visual-container">
          <motion.div
            className="visual-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Advanced Analytics & Insights</h2>
            <p>
              Get deep insights into your portfolio performance with our
              comprehensive analytics dashboard
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="testimonials-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="testimonials-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Trusted by Investors Worldwide</h2>
            <p>See what our users have to say about their investment success</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="cta-section"
        ref={ctaRef}
        initial={{ opacity: 0 }}
        animate={isCtaInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="cta-background">
          <img src={home1} alt="CTA Background" className="cta-bg-image" />
          <div className="cta-overlay"></div>
        </div>

        <div className="cta-container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Transform Your Investment Strategy?</h2>
            <p>
              Join thousands of successful investors who trust Winvester for
              their portfolio management
            </p>
            <motion.button
              className="cta-button primary large"
              onClick={() => navigate("/form")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Investing Today
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      <ScrollToTop />
    </div>
  );
};

export default Home;
