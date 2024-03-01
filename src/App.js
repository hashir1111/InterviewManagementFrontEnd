
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/about";
import Apply from "./components/apply";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddCandidate from "./components/addCandidate";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/add-candidate" element={<AddCandidate />} />

        
      </Routes>
    </Router>
  );
}

export default App;