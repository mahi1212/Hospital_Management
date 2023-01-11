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
import Appointment from "./Pages/Appointments/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddDoctor from "./Pages/Doctors/AddDoctor/AddDoctor";
import Registration from "./Pages/Login/Registration/Registration";
import PatientViewDoctor from "./Pages/Doctors/Doctors/PatientViewDoctor";
import Login from "./Pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import AddPatient from "./Pages/Patients/AddPatients/AddPatient";
import PatientDetails from "./Pages/Patients/PatientsDetails/PatientDetails";
import ViewDoctors from "./Pages/Patients/ViewDoctors/ViewDoctors";
import DeleteDoctor from "./Pages/Doctors/DeleteDoctor/DeleteDoctor";
import UpdateDoctor from "./Pages/Doctors/UpdateDoctor/FindDoctor";
import FindDoctor from "./Pages/Doctors/UpdateDoctor/FindDoctor";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            {/* NESTED ROUTING APPLIED */}
            <Route path="/" element={<Dashboard />} >
              <Route index element={<Home></Home>} />
              <Route path="doctors" element={<PatientViewDoctor />} />
              <Route path="addDoctor" element={<AddDoctor />} />
              <Route path="deleteDoctor" element={<DeleteDoctor />} />
              <Route path="updateDoctor" element={<FindDoctor />} />
              <Route path="patients" element={<Patients />} />
              <Route path="addPatient" element={<AddPatient />}>
                <Route path=":email" element={<AddPatient />} />
              </Route>
              <Route path="viewDoctors" element={<ViewDoctors />} />
              <Route path="patientDetails/:id" element={<PatientDetails />} />
              <Route path="staffs" element={<Staffs />} />
              <Route path="appointment" element={<Appointment />}>
                <Route path=":email" element={<Appointment />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="registration" element={<Registration />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
