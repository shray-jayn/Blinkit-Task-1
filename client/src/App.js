import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Upload from "./pages/upload/Upload";

import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Navigate to="/Upload" /> : <Navigate to="/Signup" />}
        />
        <Route path="/Signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />

        <Route
          path="/Upload"
          element={user ? <Upload /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
