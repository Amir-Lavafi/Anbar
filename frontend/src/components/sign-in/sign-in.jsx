import { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import flowers from "./assets/images/flowers.png";
import "./App.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Sign in attempt with:", { email, password });
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in");
  };

  const handleFacebookSignIn = () => {
    console.log("Facebook sign in");
  };
  return (
    <div className="login-container">
      <MDBCard className="login-card">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <div className="form-section">
              <h2 className="welcome-title">
                Welcome Back <span className="wave-emoji">👋</span>
              </h2>
              <p className="welcome-subtitle">
                Today is a new day. It's your day. You shape it.
              </p>
              <p className="welcome-subtitle">
                Sign in to start managing your projects.
              </p>

              <div className="form-container">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="custom-input"
                    placeholder="Example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="custom-input"
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="forgot-password">
                  <a href="#forgot">Forgot Password?</a>
                </div>

                <button
                  type="button"
                  className="sign-in-btn"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              </div>

              <div className="separator mb-3">Or</div>

              <div className="social-buttons">
                <button
                  className="social-btn google-btn"
                  onClick={handleGoogleSignIn}
                >
                  <i className="fa-brands fa-google"></i>
                  Google
                </button>
                <button
                  className="social-btn facebook-btn"
                  onClick={handleFacebookSignIn}
                >
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "#3b5998" }}
                  ></i>
                  Facebook
                </button>
              </div>

              <div className="signup-link">
                Don't you have an account? <a href="#signup">Sign up</a>
              </div>

              <div className="footer">© 2023 ALL RIGHTS RESERVED</div>
            </div>
          </MDBCol>

          <MDBCol md="6">
            <div className="floral-section">
              <img
                src={flowers}
                alt="Floral Arrangement"
                className="floral-image"
              />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}

export default SignIn;
