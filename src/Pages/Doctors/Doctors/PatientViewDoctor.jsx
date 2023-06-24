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
import { useQuery } from "@tanstack/react-query";

// const myData = [
//   {
//     id:1,
//     name: "Millie Cross",
//     phone: "+1 (875) 489-3889",
//     email: "milliecross@digifad.com",
//     fee:'1000',
//     age: '22',
//     salary: '119609',
//     specialist:'Surgery',
//     isActive: false,
//     time:'8pm-10pm',
//     picture: "http://placehold.it/32x32",
//     gender: "female",
//     address: "409 Garden Street, Devon, Mississippi, 6319",
//   },
//   {
//     id:2,
//     name: "Callahan Rowe",
//     phone: "+1 (950) 468-2478",
//     email: "callahanrowe@digifad.com",
//     fee:'1500',
//     age: '28',
//     salary: '118542',
//     specialist:'Radiology',
//     isActive: false,
//     time:'9pm-11pm',
//     picture: "http://placehold.it/32x32",
//     gender: "male",
//     address: "306 Glendale Court, Darlington, North Carolina, 3516",
//   },
//   {
//     id:3,
//     name: "Weber Kemp",
//     phone: "+1 (882) 512-3165",
//     email: "weberkemp@digifad.com",
//     fee:'800',
//     age: '40',
//     salary: '109030',
//     specialist:'Anesthesiology',
//     isActive: true,
//     time:'8am-10am',
//     picture: "http://placehold.it/32x32",
//     gender: "male",
//     address: "179 Schenck Street, Kansas, Arkansas, 7340",
//   },
//   {
//     id:4,
//     name: "Mcintosh Garcia",
//     phone: "+1 (972) 445-3012",
//     email: "mcintoshgarcia@digifad.com",
//     fee:'1000',
//     age: '21',
//     salary: '65303',
//     specialist:'Anesthesiology',
//     isActive: true,
//     time:'8pm-10pm',
//     picture: "http://placehold.it/32x32",
//     gender: "male",
//     address: "409 Scott Avenue, Elrama, South Carolina, 1578",
//   },
//   {
//     id:5,
//     name: "Ayers Alexander",
//     phone: "+1 (903) 423-3484",
//     email: "ayersalexander@digifad.com",
//     fee:'1000',
//     age: '39',
//     salary: '67097',
//     specialist:'Children',
//     isActive: true,
//     time:'8pm-10pm',
//     picture: "http://placehold.it/32x32",
//     gender: "male",
//     address: "966 Brightwater Court, Brenton, Virginia, 828",
//   },
//   {
//     id:6,
//     name: "Witt West",
//     phone: "+1 (965) 463-3009",
//     email: "wittwest@digifad.com",
//     fee:'500',
//     age: '20',
//     salary: '54398',
//     specialist:'Women',
//     isActive: true,
//     time:'8pm-10pm',
//     picture: "http://placehold.it/32x32",
//     gender: "male",
//     address: "465 Gerald Court, Marne, Wyoming, 9714",
//   },
// ];

export default function PatientViewDoctor() {
  // const [data, setData] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   fetch("http://localhost:5000/approvedDoctors")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       console.log(data)
  //       setLoading(false)
  //     });
  // }, []);
  
  const fetchApprovedDoctors = async () => {
    let response = await fetch("http://localhost:5000/approvedDoctors")
    console.log('fetching data...')
    const data = await response.json()
    return data;
  }

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['approvedDoctors'],
    queryFn: fetchApprovedDoctors,
  })
  if (isLoading) {
    return <span>Loading doctors</span>
  }

  if (isError) {
    return <span>Failed to load data. Internal server error</span>
  }

  return (
    <TableContainer component={Paper}>
      {
        <Typography Typography variant="h6" sx={{ my: 3 }}>
          Total available doctors: {data?.length}
        </Typography>
      }
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
            <TableCell align="center">Make Appoinment</TableCell>
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
              <TableCell align="center" style={{ borderRight: "1px solid #ccc" }}>{doctorData.specialist}</TableCell>
              <TableCell align="center">{doctorData.time}</TableCell>
              <TableCell align="center">{doctorData.fee}</TableCell>
              <TableCell align="center">{doctorData.phone}</TableCell>
              <TableCell align="center">{doctorData.gender}</TableCell>
              <TableCell align="center">
                <NavLink to={`/addPatient/${doctorData.email}`}>
                  <input
                    style={{
                      color: "#fff",
                      background: "#000",
                      padding: "5px 10px",
                      cursor: "pointer",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#224B0C",
                    }}
                    id="submit"
                    type="submit"
                    name="appointment"
                    value="Appointment"
                  />
                </NavLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}
