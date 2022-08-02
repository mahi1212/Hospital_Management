import * as React from 'react';
import './Patients.css'
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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', "Dr. Mahinur", "01778287079", "02-08-22", "1:20 AM"),
  createData('Ice cream sandwich', "Dr. Joy", "01778287079", "02-08-22", "1:20 AM"),
  createData('Eclair', "Dr. Jubayel", "01778287079", "02-08-22", "1:20 AM"),
  createData('Cupcake', "Dr. Olid", "01778287079", "02-08-22", "1:20 AM"),
  createData('Gingerbread', "Dr. Mahin", "01778287079", "02-08-22", "1:20 AM"),
];
// no need to save 
export default function Patients() {
  return (
    <TableContainer sx={{padding:'0 2rem'}}>
      <Table sx={{ minWidth: '700', margin:'0 auto' }} aria-label="customized table" className='patientTable'>
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Patients Name </StyledTableCell>
            <StyledTableCell align="center">Doctors Name</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Date&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Time&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right" component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
