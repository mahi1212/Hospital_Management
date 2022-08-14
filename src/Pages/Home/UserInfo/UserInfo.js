import { Box } from '@mui/material'
import React from 'react'

const UserInfo = () => {
    return (
        <Box sx={{
            background: '#fff',
            padding: '1rem',
            marginTop: '1.3rem',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
        }}>
            You have logged in as <strong>Admin</strong>
        </Box>
    )
}

export default UserInfo