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
import './style.css'
import approvalIcon from '../../../utils/no-approval.png'

export default function ApproveDoctor() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:5000/pendingDoctors")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [data]);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/doctors/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert("Deleted Successfully");
                }
            });
        // update the data
        fetch("http://localhost:5000/pendingDoctors")
            .then((res) => res.json())
            .then((data) => setData(data));
    };
    const handleApprove = (id) => {
        fetch(`http://localhost:5000/approve/${id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert("Approved Successfully");
                }
            });
        // update the data
        fetch("http://localhost:5000/pendingDoctors")
            .then((res) => res.json())
            .then((data) => setData(data));
    };

    return (
        <TableContainer component={Paper}>
            {
                data.length === 0 ? (
                    <Typography variant="h6" className="no-req">
                        <img className="icon" src={approvalIcon} alt="no-approval-icon" />
                        No Approval Request Found
                    </Typography>
                ) : (
                    <div >
                        <Typography variant="h6" sx={{ my: 3 }}>
                            APPROVAL REQUEST: {data ? data.length : "Loading Data"}
                        </Typography>
                        <Table className="table-parent" size="small" aria-label="table">
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
                                    <TableCell align="center">Remove</TableCell>
                                    <TableCell align="center">Approve</TableCell>
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
                                        {/* approve */}
                                        <TableCell align="center">
                                            <input
                                                style={{
                                                    color: "#fff",
                                                    background: "#000",
                                                    padding: "10px",
                                                    cursor: "pointer",
                                                    border: "none",
                                                    borderRadius: "5px",
                                                    backgroundColor: "green",
                                                }}
                                                onClick={() => {
                                                    handleApprove(doctorData._id);
                                                }}
                                                id="submit"
                                                type="submit"
                                                name="approve"
                                                value="Approve"
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                )
            }

        </TableContainer>
    );
}
