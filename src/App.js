import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Doctors from "./Pages/Doctors/Doctors";
import Home from "./Pages/Home/Home/Home";
import Patients from "./Pages/Patients/Patients";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Staffs from './Pages/Staffs/Staffs';
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddAppointment from "./Pages/Components/Appointment/AddAppointment/AddAppointment";
import AppointmentList from "./Pages/Components/Appointment/AppointmentList";
import AddDept from "./Pages/Components/Department/AddDept/AddDept";
import Department from "./Pages/Components/Department/Department/Department";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          {/* NESTED ROUTING APPLIED */}
          <Route path="/" element={<Dashboard />} >
            <Route index element={<Home></Home>} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="patients" element={<Patients />} />
            <Route path="staffs" element={<Staffs />} />
            <Route path="Addappointment" element={<AddAppointment />} />
            <Route path="appointment" element={<AppointmentList />} />
            {/* <Route path="addDept" element={<AddDept />} /> */}
            <Route path="dept" element={<Department />} />
             
          </Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;
