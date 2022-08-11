import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(appointmentID, patientID, doctorName, serialNo, problem,appointmentDate ,status) {
  return { appointmentID, patientID, doctorName, serialNo, problem,appointmentDate ,status };
}

const rows = [
  createData(20120202, 159, 'Dr.Basu', 24, 'Kidney stone','2022-02-21','active'),
  createData(20120202, 159, 'Dr.Basu', 24, 'Kidney stone','2022-02-21','active'),
  createData(20120202, 159, 'Dr.Basu', 24, 'Kidney stone','2022-02-21','active'),
  
  createData(20120202, 159, 'Dr.Basu', 24, 'Kidney stone','2022-02-21','active'),
];

export default function AppointmentList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Appointment ID</StyledTableCell>
            <StyledTableCell >Patient ID</StyledTableCell>
            <StyledTableCell>Doctor Name</StyledTableCell>
            <StyledTableCell>Serial No</StyledTableCell>
            <StyledTableCell>Problem</StyledTableCell>
            <StyledTableCell>Appointment Date</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.appointmentID}>
              <StyledTableCell component="th" scope="row">
                {row.appointmentID}
              </StyledTableCell>
              <StyledTableCell>{row.patientID}</StyledTableCell>
              <StyledTableCell>{row.doctorName}</StyledTableCell>
              <StyledTableCell>{row.serialNo}</StyledTableCell>
              <StyledTableCell>{row.problem}</StyledTableCell>
              <StyledTableCell>{row.appointmentDate}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
