import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { Container } from '@mui/system';
import '../../Appointments/Appointment.css'
const Calender = () => {
  const [value, setValue] = React.useState(new Date());

  return (
    <Container >
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) =>
            <TextField className='datetime' {...params} />}
        />
      </LocalizationProvider>
    </Container>

  );
};

export default Calender;