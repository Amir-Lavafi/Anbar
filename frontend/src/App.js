import { Route, Routes } from "react-router-dom";
import SignIn from "./components/sign-in/sign-in";
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
      </Routes>
    </div>
  );
}

export default App;