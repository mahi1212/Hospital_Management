import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardActions, Divider } from '@mui/material';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function TodaysDoctors() {
    const [value, setValue] = React.useState(4);
    return (
        <Box sx={{
            margin: '2rem 0',
            padding: '3rem 1rem',
            background: '#fff',
            borderRadius: '0.5rem',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex', justifyContent: 'space-around', alignItems: 'center',
            flexWrap: 'wrap',
            gap:'1rem'
        }}>
            <Card sx={{ maxWidth: 300 }} elevation={3}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="160"
                        image="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=996&t=st=1659640512~exp=1659641112~hmac=3587a885638b8ca8621583b406c74569e2474e99107b4a5859e96a0e65bfa567.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Dr. Mona Smith
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Neurologist
                        </Typography>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                                my: 2,
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                        </Box>
                    </CardContent>
                </CardActionArea>
                <Divider />
                <CardActions sx={{ display: 'flex', justifyContent: 'center', color: '#999' }}>
                    <AccessTimeIcon sx={{ mr: 2 }} />
                    <Typography> 3:30 to 6:30</Typography>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 300 }} elevation={3}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="160"
                        image="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=996&t=st=1659640904~exp=1659641504~hmac=41f6c3cf567608b5797231bb0422c2a781f23b0138fba4611afd5ae696ed2493.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Dr. James Bond
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cardiologyst
                        </Typography>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                                my: 2,
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                        </Box>
                    </CardContent>
                </CardActionArea>
                <Divider />
                <CardActions sx={{ display: 'flex', justifyContent: 'center', color: '#999' }}>
                    <AccessTimeIcon sx={{ mr: 2 }} />
                    <Typography> 4:00 to 8:00</Typography>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 300, }} elevation={3}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="160"
                        image="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=996&t=st=1659641456~exp=1659642056~hmac=ab784b721e6691428b434b1f62ddf1a2925f5f6a70be99ce556e18e177622b4a.jpg"
                        alt="Doctors Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Dr. Jane Sara
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phycolologist
                        </Typography>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                                my: 2,
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                        </Box>
                    </CardContent>
                </CardActionArea>
                <Divider />
                <CardActions sx={{ display: 'flex', justifyContent: 'center', color: '#999' }}>
                    <AccessTimeIcon sx={{ mr: 2 }} />
                    <Typography> 6:00 to 9:00</Typography>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 300 }} elevation={3}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="160"
                        image="https://img.freepik.com/premium-photo/portrait-beautiful-nurse_1258-16469.jpg?w=996.jpg"
                        alt="Doctors Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Dr. Anaya Luwis
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Orthopedic Surgeon
                        </Typography>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                                my: 2,
                            }}
                        >
                            <Rating name="read-only" value={value} readOnly />
                        </Box>
                    </CardContent>
                </CardActionArea>
                <Divider />
                <CardActions sx={{ display: 'flex', justifyContent: 'center', color: '#999' }}>
                    <AccessTimeIcon sx={{ mr: 2 }} />
                    <Typography> 8:00 to 11:00</Typography>
                </CardActions>
            </Card>
        </Box>
    );
}
