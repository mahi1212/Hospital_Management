import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions, Chip, Divider, Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { NavLink } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

const ViewDoctors = () => {
  const [doctors, setDoctors] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("http://localhost:5000/approvedDoctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false); // Set loading to false when data fetching is complete
      });
  }, []);

  return (
    <div>
      <h3 style={{ marginTop: "1rem", textAlign: "left", color: 'orange' }}>
        <Chip label="FIRST SELECT A DOCTOR FOR PATIENT" color="success" />
      </h3>
      {loading ? (
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            margin: "2rem 0",
            padding: "3rem 1rem",
            background: "#fff",
            borderRadius: "0.5rem",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {/* Render skeleton loading cards */}
          {Array.from({ length: 2 }).map((index) => (
            <Card elevation={3} key={index} style={{maxWidth: '250px', width: '100%'}}>
              <CardActionArea sx={{display: 'flex'}}>
                <Skeleton height={200} style={{ borderRadius: "3px" }} />
                <CardContent sx={{ textAlign: "left" }}>
                  <Skeleton width={120} height={20} style={{ marginBottom: "1rem" }} />
                  <Skeleton width={180} height={14} style={{ marginBottom: "1rem" }} />
                  Loading data...
                  <Skeleton width={80} height={14} style={{ marginBottom: "1rem" }} />
                  <Skeleton width={100} height={14} style={{ marginBottom: "1rem" }} />
                </CardContent>
              </CardActionArea>
              <Divider />
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#999",
                }}
              >
                <AccessTimeIcon sx={{ mr: 2 }} />
                <Skeleton width={60} height={14} />
              </CardActions>
            </Card>
          ))}
        </Grid>
      ) : (
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            margin: "2rem 0",
            padding: "3rem 1rem",
            background: "#fff",
            borderRadius: "0.5rem",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {doctors.map((doctor) => (
            <NavLink
              to={"/addPatient/" + doctor.email}
              style={{
                textDecoration: "none",
                display: "flex",
                background: "#ccc",
                flexDirection: "row",
              }}
            >
              <Card elevation={3}>
                <CardActionArea sx={{display: 'flex'}}>
                  <img
                    src={`data:image/png;base64,${doctor.image}`}
                    alt="doctor Image"
                    style={{ width: "300px", height: "200px", borderRadius: "3px" }}
                  />
                  <CardContent sx={{ textAlign: "left" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {doctor.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      SPECIALITY: {doctor.specialist.toUpperCase()}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      FEE: {doctor.fee ? doctor.fee : "Free"} TK
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      GENDER: {doctor.gender.toUpperCase()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Divider />
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#999",
                  }}
                >
                  <AccessTimeIcon sx={{ mr: 2 }} />
                  <Typography> {doctor.time}</Typography>
                </CardActions>
              </Card>
            </NavLink>
          ))}
        </Grid>
      )}
    </div>
  );
};


export default ViewDoctors;
