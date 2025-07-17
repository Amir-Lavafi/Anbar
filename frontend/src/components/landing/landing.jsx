import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <div className="warehouse-hero">
      <div className="landing-navbar">
        <div className="logo">
          <Link to="/" className="logo-nav-link">
            Anbar
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/sign-in" className="navbar-link">
            Sign In
          </Link>
          <MDBBtn
            onClick={(e) => {
              e.preventDefault();
              handleNavigate("/sign-up");
            }}
            color="light"
            className="nav-button shadow-0"
            rounded
          >
            Sign Up
          </MDBBtn>
        </div>
      </div>
      <div className="overlay">
        <MDBContainer className="h-100 d-flex align-items-center">
          <MDBRow className="w-100">
            <MDBCol md="6" className="text-white">
              <h4 className="description-main mb-3">
                Streamline Your Operations with
              </h4>
              <h1 className="display-1 fw-bold warehouse-title">Anbar</h1>
              <p className="warehouse-description lead mt-4 mb-5">
                Monitor stock levels, manage deliveries, and track everything in
                one place. Our Warehouse Management System makes logistics
                simple and efficient.
              </p>
              <MDBBtn
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate("/sign-in");
                }}
                color="light"
                className="hero-button shadow-0"
                rounded
              >
                Get Started
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Landing;
