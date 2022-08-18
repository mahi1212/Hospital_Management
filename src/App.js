import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Doctors from "./Pages/Doctors/Doctors/Doctors";
import Home from "./Pages/Home/Home/Home";
import Patients from "./Pages/Patients/Patients";
import Footer from "./Pages/Shared/Footer/Footer";
import Staffs from "./Pages/Staffs/Staffs";
import Appointment from "./Pages/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddDoctor from "./Pages/Doctors/AddDoctor/AddDoctor";
import Login from "./Pages/Home/Login/Login";
import Registration from "./Pages/Home/Registration/Registration";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* NESTED ROUTING APPLIED */}
          <Route path="/" element={<Dashboard />} >
            <Route index element={<Home></Home>} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="addDoctor" element={<AddDoctor />} />
            <Route path="patients" element={<Patients />} />
            <Route path="staffs" element={<Staffs />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="login" element={<Login />} />
           <Route path="registration" element={<Registration />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
