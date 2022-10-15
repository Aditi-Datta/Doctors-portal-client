import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Page/Shared/Navbar';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} />
  </Routes>
    </div>
  );
}

export default App;
