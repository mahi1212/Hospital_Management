import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Slide } from '@mui/material';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  // { id: 'ID', label: 'Staff_ID', minWidth: 100 },
  {
    id: 'contact',
    label: 'Contact',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'serviceTime',
    label: 'Service Time',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'Payment service',
    label: 'Payment service',
    minWidth: 100,
    align: 'center',
  },
];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Staffs() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [rows, setRows] =React.useState([])
  React.useEffect(() => {
      fetch('/staff.json')
          .then(res => res.json())
          .then(data => setRows(data))
         .catch(error => (console.log(error)));
  }, [])
  return (
    <Paper style={{ 'border-radius': '4px', 'box-sizing': 'border-box', 'box-shadow': '0px 5px 0px 5px #3c175b4c', 'padding': '3px' }}sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 430 }}>
        <Table stickyHeader >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell 
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
             
            </TableRow>
          
          </TableHead>
          <TableBody>

            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (

                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>

                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}

                        </TableCell>
                         
                      ); 
                    })}
                  
              <TableCell>
                <Button style={{'marginLeft':"-110px", 'background-color': 'rgba(47, 35, 77, 0.822)', color: 'rgb(232, 238, 244)', 'border-radius': '4px' }} onClick={handleClickOpen}>Payment</Button>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
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
                );
              })}
             
          </TableBody>

        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


