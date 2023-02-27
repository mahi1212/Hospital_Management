import { ElevatorSharp } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FindDoctor = () => {
  const [searchTerm, setSearchTerm] = useState(""); // value of the search input
  const [doctors, setDoctors] = useState([]); // list of doctors
  const [filteredNames, setFilteredNames] = useState([]); // list of names that match the search term
  const [ifSearched, setIfSearched] = useState(false);
  console.log(doctors);
  // const [name, setName] = useState(""); // name of the doctor to be updated
  // const [phone, setPhone] = useState(""); // phone of the doctor to be updated
  // const [address, setAddress] = useState(""); // address of the doctor to be updated
  // const [specialist, setSpecialist] = useState(""); // specialist of the doctor to be updated

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const handlePhoneChange = (e) => {
  //   setPhone(e.target.value);
  // };
  // const handleAddressChange = (e) => {
  //   setAddress(e.target.value);
  // };
  //   search doctor by name

  useEffect(() => {
    fetch("http://localhost:5000/approvedDoctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setIfSearched(true);
  };

  // const handleUpdate = (id) => {
  //   fetch(`http://localhost:5000/doctors/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       phone: phone,
  //       address: address,
  //       specialist: specialist,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result) {
  //         alert("Updated Successfully");
  //       }
  //     });
  // };
  const handleSearch = () => {
    if (searchTerm === "") {
      return alert("Please enter a valid name to search");
    } else {
      const filteredNames = doctors.filter((doctor) => {
        return doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredNames(filteredNames);
      setIfSearched(true);
    }
  };

  return (
    <div style={{ height: "100%", background: '#fff', padding: '20px' }}>
      {/* search box */}
      <input
        type="text"
        placeholder="Search Doctor By Name"
        value={searchTerm}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px 15px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {ifSearched === true && filteredNames.length !== 0 ? (
          filteredNames.map((doctor) => (
            <Grid key={doctor._id} container spacing={2} sx={{ mt: 4, pb:4, borderBottom: "1px solid #ccc"  }}>
              <Grid
                item
                xs={4}
                md={4}
                lg={4}
                sx={{ borderRight: "1px solid #ccc", pb: 10}}
              >
                {/* image and name with speciality */}
                <img
                  src={`data:image/png;base64,${doctor.image}`}
                  alt="doctor Image"
                  style={{ width: "80%", height: "80%", borderRadius: "50%" }}
                />

                <Typography component="h1" variant="h5" sx={{ my: 1 }}>
                  {doctor.name.toUpperCase()}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {doctor.specialist}
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                md={8}
                lg={8}
                sx={{ textAlign: "left", textTransform: 'uppercase'}}
              >
                <Box sx={{pl: 4}}>
                  <Typography component="h2" variant="h6" sx={{mt: 2}}>
                    Name : {doctor.name}
                  </Typography>
                  <Typography component="h2" variant="h6" sx={{mt: 2}}>
                    Phone : {doctor.phone}
                  </Typography>
                  <Typography component="h2" variant="h6" sx={{mt: 2}}>
                    Fee : {doctor.fee}
                  </Typography>
                  <Typography component="h2" variant="h6" sx={{mt: 2}}>
                    Degree : {doctor.degrees}
                  </Typography>
                  <Typography component="h2" variant="h6" sx={{mt: 2}}>
                    Salary : {doctor.salary}
                  </Typography>
                  <Typography component="h2" variant="h6" sx={{mt: 2}}>
                    Time : {doctor.time}
                  </Typography>
                  <Typography component="h2" variant="h6" sx={{mt: 2}}>
                    gender : {doctor.gender}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))
        ) : (
          <div style={{marginLeft: '-30px'}}>
            <h3>ENTER VALID NAME</h3>
          </div>
        )}
      </ul>
    </div>
  );
};

export default FindDoctor;
