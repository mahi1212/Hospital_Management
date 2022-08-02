import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,  Slide } from '@mui/material';
import './Staff.css'

const drawerWidth = 250;
function createData(name, staffID, contact, shiftingHour) {
  return { name, staffID, contact, shiftingHour};
} 

const rows = [
  createData('Frozen yoghurt', 159, 6.555555555550, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Staffs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
   
  <TableContainer  component={Paper}  sx={{
    width: { sm: `calc(97% - ${drawerWidth}px)` },ml: { sm: `${drawerWidth}px` }}}className="staffTable">
      <Table sx={{minWidth: 500}}aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize: '1rem',fontFamily: 'Raleway',fontWeight: 600}}>Name</TableCell>
            <TableCell sx={{fontSize: '1rem',fontFamily: 'Raleway',fontWeight: 600}}align="right">Staff ID</TableCell>
            <TableCell sx={{fontSize: '1rem',fontFamily: 'Raleway',fontWeight: 600}}align="center">Contact</TableCell>
            <TableCell sx={{fontSize: '1rem',fontFamily: 'Raleway',fontWeight: 600}}align="center">Shifting Hour(Day/Night)</TableCell>
            <TableCell sx={{fontSize: '1rem',fontFamily: 'Raleway',fontWeight: 600}}align="center">Payment option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.staffID}</TableCell>
              <TableCell align="center">{row.contact}</TableCell>
              <TableCell align="center">{row.shiftingHour}</TableCell>
              <TableCell align="center">
                <Button className='paybtn'onClick={handleClickOpen}>Payment</Button>
                <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Payment service"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Do you want to clear the salary?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleClose}>Yes</Button>
        </DialogActions>
      </Dialog>
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
  );
}
