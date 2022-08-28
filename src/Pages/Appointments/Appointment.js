import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import "./Appointment.css";
import Calender from "../Shared/Calender/Calender";
import Time from "../Shared/Time/Time";
export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      id: "",
      name: "",
    };
  }

  async getOptions() {
    const res = await axios.get("./appointmentData.json");
    const data = res.data;
    const options = data.map((d) => ({
      value: d.fee,
      label: d.name,
    }));
    this.setState({ selectOptions: options });
  }
  handleChange(e) {
    this.setState({ fee: e.value, name: e.label });
  }
  componentDidMount() {
    this.getOptions();
  }

  render() {
    return (
      <Box
        sx={{ background: "#fff", height:"100%" }}
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
      >
        <form className="text-center">
          <Box className="appointment">
            <h3 style={{ padding: "1rem 0" }}>Take An Appointment</h3>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <h4>Select Doctor</h4>
              </Grid>
              <Grid item xs={12} md={4}>
                <Select
                  style={{ width: "50%", textAlign: "center" }}
                  options={this.state.selectOptions}
                  onChange={this.handleChange.bind(this)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <h4>Consultency Fee</h4>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="textA" style={{ textAlign: "center" }}>
                  {this.state.fee}
                </div>
              </Grid>
            </Grid>
          </Box>
          <Grid sx={{mt:2 }} container spacing={2}>
            <Grid item xs={12} md={4}>
              <h4>Select Date</h4>
            </Grid>
            <Grid item xs={12} md={4}>
              <Calender />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <h4>Select Time</h4>
            </Grid>
            <Grid item xs={12} md={4}>
              <Time />
            </Grid>
          </Grid>
          <input
            style={{
              background: "#1C0633",
              color: "#FAF5FA ",
              "margin-bottom": "5%",
              "margin-top": "6%",
              padding: "1rem 5rem",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
            type="submit"
          />
        </form>
      </Box>
    );
  }
}
