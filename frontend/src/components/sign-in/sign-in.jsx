import { useState } from "react";
import { MDBBtn, MDBCard, MDBRow, MDBCol } from "mdb-react-ui-kit";
import warehousingDesktop from "../../assets/images/warehousing.png";
import "./sign-in.css";

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
    <div className="sign-in-container">
      <MDBCard className="sign-in-card">
        <MDBRow className="g-0 card-content">
          <MDBCol className="card-col form" md="6">
            <div className="form-section">
              <h2 className="welcome-title">
                Welcome Back <span className="wave-emoji">👋</span>
              </h2>
              <p className="welcome-subtitle">
                Unlock Your Warehouse's Potential. Today’s the Day to
                Streamline, Organize, and Succeed.
              </p>
              <p className="welcome-subtitle">
                Sign in to Take Control of Your Operations.
              </p>

              <div className="form-container">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="custom-input"
                    placeholder="Example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="custom-input"
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="forgot-password">
                  <a href="">Forgot Password?</a>
                </div>

                <MDBBtn className="sign-in-btn" onClick={handleSignIn}>
                  Sign In
                </MDBBtn>
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
                Don't you have an account? <a href="/sign-up">Sign up</a>
              </div>

              <div className="footer">© 2025 ALL RIGHTS RESERVED</div>
            </div>
          </MDBCol>

          <MDBCol className="card-col" md="6">
            <div className="warehousing-section">
              <img
                src={warehousingDesktop}
                alt="Warehouse management picture"
                className="warehousing-image"
              />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}

export default SignIn;
