import { useState } from "react";
import { MDBBtn, MDBCard, MDBRow, MDBCol } from "mdb-react-ui-kit";
import warehousingDesktop from "../../assets/images/warehousing.png";
import "./sign-up.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Sign up attempt with:", { email, password });
  };

  const handleGoogleSignUp = () => {
    console.log("Google sign up");
  };

  const handleFacebookSignUp = () => {
    console.log("Facebook sign up");
  };
  return (
    <div className="sign-up-container">
      <MDBCard className="sign-up-card">
        <MDBRow className="g-0 card-content">
          <MDBCol className="card-col form" md="6">
            <div className="form-section">
              <h2 className="welcome-title">
                Join the Journey <span className="star-emoji">🌟</span>
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

                <MDBBtn className="sign-up-btn" onClick={handleSignUp}>
                  Sign Up
                </MDBBtn>
              </div>

              <div className="separator mb-3">Or</div>

              <div className="social-buttons">
                <button
                  className="social-btn google-btn"
                  onClick={handleGoogleSignUp}
                >
                  <i className="fa-brands fa-google"></i>
                  Google
                </button>
                <button
                  className="social-btn facebook-btn"
                  onClick={handleFacebookSignUp}
                >
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "#3b5998" }}
                  ></i>
                  Facebook
                </button>
              </div>

              <div className="signup-link">
                Already have an account? <a href="/sign-in">Sign in</a>
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

export default SignUp;
