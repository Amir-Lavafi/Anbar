import { useState } from "react";
import { MDBBtn, MDBCard, MDBRow, MDBCol } from "mdb-react-ui-kit";
import warehousingDesktop from "../../assets/images/warehousing.png";
import { login } from "../../services/auth-service";
import toast from "react-hot-toast";
import "./sign-in.css";

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginPromise = new Promise(async (resolve, reject) => {
      try {
        const result = await login(formData);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(
      async () => {
        await loginPromise;
      },
      {
        loading: "Signing you in",
        success: "Welcome back!",
        error: (err) => {
          return (
            err.response?.data?.error || err.message || "Something went wrong"
          );
        },
      }
    );
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

              <form className="form-container" onSubmit={handleLogin}>
                <div className="form-group">
                  <label className="form-label" htmlFor="username">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="custom-input"
                    placeholder="ExampleUserName"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
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
                    placeholder="At least 4 characters"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="forgot-password">Forgot Password?</div>

                <MDBBtn className="sign-in-btn" type="submit">
                  Sign In
                </MDBBtn>
              </form>

              <div className="separator mb-3">Or</div>

              <div className="social-buttons">
                <button className="social-btn google-btn" onClick={() => {}}>
                  <i className="fa-brands fa-google"></i>
                  Google
                </button>
                <button className="social-btn facebook-btn" onClick={() => {}}>
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
                alt="Warehouse management"
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
