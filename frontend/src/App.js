import { Route, Routes } from "react-router-dom";
import SignIn from "./components/sign-in/sign-in";
import SignUp from "./components/sign-up/sign-up";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<h1>Welcome to Your Warehouse Management</h1>}
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;