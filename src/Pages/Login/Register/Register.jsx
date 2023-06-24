import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DoctorReg from '../DoctorReg/DoctorReg';
import AdminReg from '../AdminReg/AdminReg';
import PatientReg from '../PatientReg/PatientReg';
import { Card, Container } from '@mui/material';

function TabPanel(props) {


  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Register() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const boxSX = {
    // "&:hover": {
    //   border: "1px solid rgb(45, 225, 240);",
    //   color: 'black',
    //   borderRadius:'30px',
    //   backgroundColor: 'white',
    //   maxWidth:'80px'
    // },
    "&:focus": {
      backgroundColor: "white",
      borderRadius: '30px',
      color: 'black'
    }
  };

  return (
    <Card sx={{
      minWidth: 300,
      maxWidth: '100vw',
      background: 'rgb(45, 225, 240)',
      marginTop: '50px',
      borderRadius: '5px',
      backgroundColor: 'white',
    }}  >

      <Container fixed >
        <Box >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
            sx={{
              backgroundColor: '#e6ecf0',
              borderRadius: '100px',
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

            }} >
            <Tab label="Patient" {...a11yProps(0)} sx={boxSX} />
            <Tab label="Doctor" {...a11yProps(1)} sx={boxSX} />
            {/* <Tab label="Admin" {...a11yProps(2)} sx={boxSX} /> */}
          </Tabs>
        </Box>
        {/* for patient */}
        <TabPanel value={value} index={0}>
          <PatientReg></PatientReg>
        </TabPanel>
        {/* for doctor */}
        <TabPanel value={value} index={1}>
          <DoctorReg></DoctorReg>
        </TabPanel>
        {/* <TabPanel value={value} index={2}> */}
        {/* <AdminReg></AdminReg> */}
        {/* </TabPanel> */}
      </Container>
    </Card>
  );
}
