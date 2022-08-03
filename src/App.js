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
import Staffs from "./Pages/Stuffs/Stuffs";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* NESTED ROUTING APPLIED */}
          <Route path="/" element={<Dashboard />} >
            <Route index element={<Home></Home>} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="patients" element={<Patients />} />
            <Route path="staffs" element={<Staffs />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
