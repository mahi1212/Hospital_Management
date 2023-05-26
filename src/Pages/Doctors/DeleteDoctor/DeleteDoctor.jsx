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

export default function DeleteDoctor() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://hospital-management-server-site.vercel.app/approvedDoctors")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      });
  }, [data]);
  const handleDelete = (id) => {
    fetch(`https://hospital-management-server-site.vercel.app/doctors/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Deleted Successfully");
        }
      });
  };
  return (

    <TableContainer component={Paper}>
      {
        loading ? (
          <Typography variant="h6" sx={{ my: 3 }}>
            LOADING DOCTORS DATA ...
          </Typography>
        ) : <>
          <Typography variant="h6" sx={{ my: 3 }}>
            NUMBER OF AVAIABLE DOCTORS  : {data.length}
          </Typography>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ padding: "20px 0" }}>
                  Name
                </TableCell>
                <TableCell align="center">Specialist</TableCell>
                <TableCell align="center">Available</TableCell>
                <TableCell align="center">Fee</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Remove Doctor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((doctorData) => (
                <TableRow
                  key={doctorData.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ borderRight: "1px solid #ccc" }}
                  >
                    {doctorData.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ borderRight: "1px solid #ccc" }}
                  >
                    {doctorData.specialist}
                  </TableCell>
                  <TableCell align="center">{doctorData.time}</TableCell>
                  <TableCell align="center">{doctorData.fee}</TableCell>
                  <TableCell align="center">{doctorData.phone}</TableCell>
                  <TableCell align="center">{doctorData.gender}</TableCell>
                  <TableCell align="center">
                    <input
                      style={{
                        color: "#fff",
                        background: "#000",
                        padding: "10px 15px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "red",
                      }}
                      onClick={() => {
                        handleDelete(doctorData._id);
                      }}
                      id="submit"
                      type="submit"
                      name="delete"
                      value="Delete"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      }

    </TableContainer>
  );
}
