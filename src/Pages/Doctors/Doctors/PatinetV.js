import React from 'react';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";
import { NavLink} from 'react-router-dom';
const PatinetV = (props) => {

    const {id,name,fee,time,specialist,phone,gender} = props.patient;

    return (
        <TableBody>
            <TableRow
              
              key={name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{borderRight:'1px solid #ccc'}}>
                {name}
              </TableCell>
              <TableCell align="center">{specialist}</TableCell>
              <TableCell align="center">{time}</TableCell>
              <TableCell align="center">{fee}</TableCell>
              <TableCell align="center">{phone}</TableCell>
              <TableCell align="center">{gender}</TableCell>
              <TableCell align="center">
                <form name="button">
 <NavLink to={`/appointment/${id}`}>
                    <input
                      style={{
                        color: "#fff",
                        background: "#000",
                        padding: "5px 10px",
                        cursor: "pointer",
                        border:'none',
                        borderRadius:'5px',
                        backgroundColor:'#224B0C'
                      }}
                      id="edit"
                      type="submit"
                      name="appointment"
                      value="Appointment"
                    />
                  </NavLink> 
                  {/* <NavLink to="/appointment/{_viewId}">
                    <input
                      style={{
                        color: "#fff",
                        background: "#000",
                        padding: "5px 10px",
                        cursor: "pointer",
                        border:'none',
                        borderRadius:'5px',
                        backgroundColor:'#224B0C'
                      }}
                      id="edit"
                      type="submit"
                      name="appointment"
                      value="Appointment"
                    />
                  </NavLink> */}
                </form>
              </TableCell>
            </TableRow>
        </TableBody>
      
    );
};

export default PatinetV;