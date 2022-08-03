import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Banner from "./Pages/Home/Banner/Banner";
import Doctors from "./Pages/Doctors/Doctors";
import Home from "./Pages/Home/Home/Home";
import Patients from "./Pages/Patients/Patients";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Staffs from "./Pages/Staffs/Staffs";
import Appointment from "./Pages/Appointment/Appointment";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="patients" element={<Patients />} />
          <Route path="staffs" element={<Staffs />} />
          <Route path="appointment" element={<Appointment />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
