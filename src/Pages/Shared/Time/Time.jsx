import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import'../../Appointments/Appointment.css'
import { Container } from '@mui/system';
const Time = () => {
    const [value, setValue] = React.useState(new Date());

    return (
        <Container >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker 
            renderInput={(params) => 
            <TextField className='datetime' {...params} />}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            shouldDisableTime={(timeValue, clockType) => {
              if (clockType === 'hours' && timeValue % 1) {
                return true;
              }
  
              return false;
            }}
          />
      </LocalizationProvider>
      
       </Container>
    );
};

export default Time;