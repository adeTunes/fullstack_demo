import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from "./pages/Register";

function App() {

  const [user, setUser] = useState(() => localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null)

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute user={user} setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
