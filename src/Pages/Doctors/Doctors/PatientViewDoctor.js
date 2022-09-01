import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PatinetV from "./PatinetV";
export default function PatientViewDoctor() {
  const [rows, setRows] =React.useState([])
  React.useEffect(() => {
      fetch('/patient.json')
          .then(res => res.json())
          .then(data => setRows(data))
         .catch(error => (console.log(error)));
  }, [])
  return (
    
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ padding:'20px 0'}}>Name</TableCell>
            <TableCell align="center">Specialist</TableCell>
            <TableCell align="center">Available</TableCell>
            <TableCell align="center">Fee</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Make Appoinment</TableCell>
          </TableRow>
        </TableHead>
        {rows.map(patient => <PatinetV patient ={patient} id={patient._id}></PatinetV>)
}
      </Table>
    </TableContainer>
  );
}
