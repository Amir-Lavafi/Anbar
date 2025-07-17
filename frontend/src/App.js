import { Route, Routes } from "react-router-dom";
import SignIn from "./components/sign-in/sign-in";
import SignUp from "./components/sign-up/sign-up";
import Landing from "./components/landing/landing";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#2d3748",
            color: "#f7fafc",
            fontSize: "1.8rem",
            borderRadius: "8px",
            padding: "12px 16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          },
          success: {
            iconTheme: {
              primary: "#38a169",
              secondary: "#f0fff4",
            },
          },
          error: {
            iconTheme: {
              primary: "#e53e3e",
              secondary: "#fff5f5",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
