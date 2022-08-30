import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";

const myData = [
  {
    name: "Millie Cross",
    phone: "+1 (875) 489-3889",
    email: "milliecross@digifad.com",
    fee:'1000',
    age: '22',
    salary: '119609',
    isActive: false,
    picture: "http://placehold.it/32x32",
    gender: "female",
    address: "409 Garden Street, Devon, Mississippi, 6319",
  },
  {
    name: "Callahan Rowe",
    phone: "+1 (950) 468-2478",
    email: "callahanrowe@digifad.com",
    fee:'1500',
    age: '28',
    salary: '118542',
    isActive: false,
    picture: "http://placehold.it/32x32",
    gender: "male",
    address: "306 Glendale Court, Darlington, North Carolina, 3516",
  },
  {
    name: "Weber Kemp",
    phone: "+1 (882) 512-3165",
    email: "weberkemp@digifad.com",
    fee:'800',
    age: '40',
    salary: '109030',
    isActive: true,
    picture: "http://placehold.it/32x32",
    gender: "male",
    address: "179 Schenck Street, Kansas, Arkansas, 7340",
  },
  {
    name: "Mcintosh Garcia",
    phone: "+1 (972) 445-3012",
    email: "mcintoshgarcia@digifad.com",
    fee:'1000',
    age: '21',
    salary: '65303',
    isActive: true,
    picture: "http://placehold.it/32x32",
    gender: "male",
    address: "409 Scott Avenue, Elrama, South Carolina, 1578",
  },
  {
    name: "Ayers Alexander",
    phone: "+1 (903) 423-3484",
    email: "ayersalexander@digifad.com",
    fee:'1000',
    age: '39',
    salary: '67097',
    isActive: true,
    picture: "http://placehold.it/32x32",
    gender: "male",
    address: "966 Brightwater Court, Brenton, Virginia, 828",
  },
  {
    name: "Witt West",
    phone: "+1 (965) 463-3009",
    email: "wittwest@digifad.com",
    fee:'500',
    age: '20',
    salary: '54398',
    isActive: true,
    picture: "http://placehold.it/32x32",
    gender: "male",
    address: "465 Gerald Court, Marne, Wyoming, 9714",
  },
];

export default function PatientViewDoctor() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Fee</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Make Appoinment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.fee}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">
                <form name="button" action="javascript:select();">
                  <NavLink to="/appointment">
                    <input
                      style={{
                        color: "#fff",
                        background: "#000",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                      id="edit"
                      type="submit"
                      name="appointment"
                      value="Appointment"
                    />
                  </NavLink>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
