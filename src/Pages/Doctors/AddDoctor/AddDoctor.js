import { Box, Button, Chip, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
// ListItem

const AddDoctor = () => {
    return (
        <Box style={{ border: '2px solid #ccc', padding: '1rem 1rem', background: '#fff' }}>
            <Box style={{ display: 'flex' }}>
                <Button variant='contained' >
                    <NavLink to="/doctors" style={{ textDecoration: 'none', width: '100%', color: '#fff' }}>
                        Doctors List
                    </NavLink>
                </Button>
            </Box>
            <hr></hr>
            <form>
                <Grid container spacing={2} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    padding: '.5rem 2rem',
                    textAlign: 'start'
                }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant='OVERLINE TEXT'>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
                        <TextField id="standard-basic" label="Enter name" required fullWidth />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='OVERLINE TEXT'>
                            Email
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
                        <TextField id="standard-basic" label="Enter email" required fullWidth />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='OVERLINE TEXT'>
                            Phone
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
                        <TextField id="standard-basic" label="Enter number" required fullWidth />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='OVERLINE TEXT'>
                            Designation
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
                        <TextField id="standard-basic" label="Designation" required fullWidth />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='OVERLINE TEXT'>
                            Address
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
                        <TextField id="standard-basic" label="Enter Address" variant="standard" multiline rows={5} fullWidth />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='OVERLINE TEXT'>
                            Degree
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
                        <TextField id="standard-basic" label="Choose Degree" variant="standard" multiline rows={5} fullWidth />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='OVERLINE TEXT'>
                            Salary
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
                        <TextField id="standard-basic" label="Enter salary" required fullWidth />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='OVERLINE TEXT'>
                            Sex
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            required
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='OVERLINE TEXT'>
                            Date of joining
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
                        <TextField id="standard-basic" label="Enter joining date" required fullWidth />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='OVERLINE TEXT'>
                            Decision
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
                        <Box sx={{ display: 'flex', margin: '1rem 0' }}>
                            <Button variant="outlined" color="error" type='reset'>
                                RESET
                            </Button>
                            <Chip label="OR" color="secondary" style={{ marginLeft: '-.8rem', marginRight: '-.8rem', marginTop: '.1rem' }} />
                            <Button variant="outlined" color="success" type='submit'>
                                SAVE
                            </Button>
                        </Box>
                    </Grid>

                </Grid>

            </form>

        </Box>
    )
}

export default AddDoctor