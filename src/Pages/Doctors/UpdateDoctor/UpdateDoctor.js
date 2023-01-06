import { ElevatorSharp } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UpdateDoctor = () => {
  const [searchTerm, setSearchTerm] = useState(""); // value of the search input
  const [doctors, setDoctors] = useState([]); // list of doctors
  const [filteredNames, setFilteredNames] = useState([]); // list of names that match the search term

  //   search doctor by name

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const name = formData.get("name");
//     const phone = formData.get("phone");
//     const address = formData.get("address");
//     const data = {
//       name,
//       phone,
//       address,
//     }; // picture
//     handleUpdate(data);
//   };
  const handleUpdate = (id) => {    
    fetch(`http://localhost:5000/doctors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        specialist: "Cardiologist", 
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Updated Successfully");
        }
      });
  };

  const handleSearch = () => {
    if (searchTerm === "") {
      return alert("Please enter a name to search");
    } else {
      const filteredNames = doctors.filter((doctor) => {
        return doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredNames(filteredNames);
    }
  };

  return (
    <div style={{ height: "100%" }}>
      {/* search box */}
      <input
        type="text"
        placeholder="Search Doctor"
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
        {filteredNames.map((doctor) => (
          <div key={doctor._id}>
            <form
              style={{ background: "#fff", borderRadius: "5px" }}
              onSubmit={handleUpdate}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mr: 5, mt: 2 }}>
                  Name
                </Typography>
                <TextField
                  id="Name"
                  name="name"
                  variant="standard"
                  defaultValue={doctor.name}
                  contentEditable
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mr: 5 }}>
                  Age
                </Typography>
                <TextField
                  id="Name"
                  name="age"
                  variant="standard"
                  defaultValue={doctor.age}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mr: 5, mt: 2 }}>
                  Address
                </Typography>
                <TextField
                  id="address"
                  name="address"
                  variant="standard"
                  value={doctor.address}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mr: 5, mt: 2 }}>
                  Email
                </Typography>
                <TextField id="Name" variant="standard" defaultValue={doctor.email} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mr: 5, mt: 2 }}>
                  Phone
                </Typography>
                <TextField id="Name" variant="standard" value={doctor.phone} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mr: 5, mt: 2 }}>
                  Degrees
                </Typography>
                <TextField
                  id="Name"
                  variant="standard"
                  defaultValue={doctor.degrees}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mr: 5, mt: 2 }}>
                  Salary
                </Typography>
                <TextField id="Name" variant="standard" defaultValue={doctor.salary} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mr: 5, mt: 2 }}>
                  Specialist
                </Typography>
                <TextField
                  id="Name"
                  variant="standard"
                  defaultValue={doctor.specialist}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mr: 5, mt: 2 }}>
                  Time
                </Typography>
                <TextField id="Name" variant="standard" defaultValue={doctor.time} />
              </Box>
              {/* update button */}
              <Button
                variant="contained"
                sx={{ mt: 2, mb: 2, ml: 2 }}
                onClick={() => {
                    handleUpdate(doctor._id);
                }}
              >
                Update
              </Button>
            </form>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UpdateDoctor;
