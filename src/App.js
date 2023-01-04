import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Page/Shared/Navbar';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';
import Appointment from './Page/Appointment/Appointment';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="appointment" element={<Appointment />} />
    <Route path="login" element={<Login />} />
  </Routes>
    </div>
  );
}

export default App;
