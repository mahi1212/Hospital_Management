import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import img from "../../../utils/no-patient.png";

export default function Patients() {
  const [patientsData, setpatientsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((patientsData) => {
        setpatientsData(patientsData)
        setLoading(false)
      });
  }, []);
  const deletePatient = (id) => {
    fetch(`http://localhost:5000/patients/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Patient Deleted Successfully");
        }
      });
    // update data after delete
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((patientsData) => setpatientsData(patientsData));
  };

  return (
    <TableContainer component={Paper}>
      {
        loading ? <Typography variant="h6" sx={{ py: 6 }} >
          Loading...
        </Typography> :
          <>
            {
              patientsData.length === 0 ? (
                <Typography variant="h6" className="no-req">
                  <img className="icon" src={img} alt="no-approval-icon" />
                  NO PATIENT FOUND YET
                </Typography>
              ) : (
                <>
                  <Typography variant="h6" sx={{ my: 3 }}>
                    TOTAL AVAILABLE PATIENT: {patientsData.length}
                  </Typography>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" style={{ padding: "20px 0" }}>
                          Patient Name
                        </TableCell>
                        <TableCell align="center">Doctor Name</TableCell>
                        <TableCell align="center">Fee</TableCell>
                        <TableCell align="center">Patient's Phone</TableCell>
                        <TableCell align="center">Appointment Date</TableCell>
                        <TableCell align="center">Gender</TableCell>
                        <TableCell align="center">Action</TableCell>
                        <TableCell align="center">Details</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {patientsData.map((patientsData) => (
                        <TableRow
                          key={patientsData.patientName}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            style={{ borderRight: "1px solid #ccc" }}
                          >
                            {patientsData.patientName}
                          </TableCell>
                          <TableCell align="center">{patientsData.doctorName}</TableCell>
                          <TableCell align="center">{patientsData.doctorFee}</TableCell>
                          <TableCell align="center">{patientsData.phone}</TableCell>
                          <TableCell align="center">{patientsData.date}</TableCell>
                          <TableCell align="center">{patientsData.gender.toUpperCase()}</TableCell>
                          <TableCell align="center">< AiOutlineDelete onClick={() => {
                            deletePatient(patientsData._id)
                          }
                          } style={{
                            cursor: 'pointer',
                            fontSize: '1.5rem',
                          }} /></TableCell>
                          <TableCell align="center">
                            <form name="button">
                              <NavLink to={`/patientDetails/${patientsData._id}`}>
                                <input
                                  style={{
                                    color: "#fff",
                                    background: "#000",
                                    padding: "10px 20px",
                                    cursor: "pointer",
                                    border: "none",
                                    borderRadius: "5px",
                                    backgroundColor: "#224B0C",
                                  }}
                                  id="submit"
                                  type="submit"
                                  name="appointment"
                                  value="View"
                                />
                              </NavLink>
                            </form>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              )
            }
          </>
      }


    </TableContainer>
  );
}
