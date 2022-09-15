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
              <Route path="patients" element={<Patients />} />
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
