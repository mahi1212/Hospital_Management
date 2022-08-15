import { Button, IconButton, Snackbar, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import CloseIcon from '@mui/icons-material/Close';

const Feedback = () => {
    const form = useRef();
    function sendEmail(e) {
        emailjs.sendForm('service_jjhtxzt', 'template_h81rxii', form.current, 'user_0KA7wjoGRk8rOP5DKlqn4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        // alert('Your email already sent! Thanks for contributing with us :)')
        e.preventDefault()
    }
    const [snackPack, setSnackPack] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState(undefined);

    React.useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
    }, [snackPack, messageInfo, open]);

    const handleClick = (message) => () => {
        setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleExited = () => {
        setMessageInfo(undefined);
    };

    return (
        <Box sx={{
            background: '#fff',
            padding: '1rem 0.1rem',
            borderRadius: '0.5rem',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }} >
            <Typography variant="h5" sx={{ fontFamily: 'monospace' }}>
                Feedback
            </Typography>
            <form onSubmit={sendEmail} ref={form}>
                <TextField
                    autoComplete='off'
                    id="outlined-multiline-flexible"
                    label="Your Name Here"
                    // color="secondary"
                    name='name'
                    sx={{ width: '90%', mt: 3 }}
                />
                <TextField
                    autoComplete='off'
                    id="outlined-multiline-flexible"
                    label="Your Email Here"
                    name='email'
                    sx={{ width: '90%', mt: 3 }}
                />
                <TextField
                    autoComplete='off'
                    id="outlined-multiline-flexible"
                    label="Subject Here"
                    name='subject'
                    sx={{ width: '90%', mt: 3 }}
                />
                <TextField
                    autoComplete='off'
                    id="outlined-multiline-flexible"
                    label="Write Your Suggession Here"
                    multiline
                    rows={8}
                    name='message'
                    sx={{ width: '90%', mt: 4 }}
                />
                <Box sx={{ py: 2 }}>
                    <Button
                        type='submit' color='secondary' variant='contained' sx={{ width: '90%' }}
                        onClick={handleClick('Your email has been sent')}>
                        Send Message
                    </Button>
                    <Snackbar
                        key={messageInfo ? messageInfo.key : undefined}
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        TransitionProps={{ onExited: handleExited }}
                        message={messageInfo ? messageInfo.message : undefined}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                sx={{ p: 0.5 }}
                                onClick={handleClose}
                            >
                                <CloseIcon />
                            </IconButton>
                        }
                    />
                </Box>
            </form>

        </Box>
    )
}

export default Feedback