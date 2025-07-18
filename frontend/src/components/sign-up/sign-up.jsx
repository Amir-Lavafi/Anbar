import { useState } from "react";
import { MDBBtn, MDBCard, MDBRow, MDBCol } from "mdb-react-ui-kit";
import warehousingDesktop from "../../assets/images/warehousing.png";
import { signup } from "../../services/auth-service";
import toast from "react-hot-toast";
import "./sign-up.css";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();

    const signUpPromise = new Promise(async (resolve, reject) => {
      try {
        const result = await signup(formData);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(
      async () => {
        await signUpPromise;
      },
      {
        loading: "Signing you up",
        success: (data) => {
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
          return "Welcome aboard!";
        },
        error: (err) => {
          return (
            err.response?.data?.error || err.message || "Something went wrong"
          );
        },
      }
    );
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

              <form className="form-container" onSubmit={handleSignUp}>
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
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="custom-input"
                    placeholder="Example@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
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

                <div className="form-group">
                  <label className="form-label" htmlFor="confirm_password">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    className="custom-input"
                    placeholder="At least 4 characters"
                    value={formData.confirm_password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirm_password: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <MDBBtn className="sign-up-btn" type="submit">
                  Sign Up
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
                Already have an account? <a href="/sign-in">Sign in</a>
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

export default SignUp;
