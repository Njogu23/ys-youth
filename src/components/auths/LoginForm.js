import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm = ({title, setEmail, setPassword, handleAction}) => {
    return (
        <div style={{
            textAlign: "center"
        }}>
            <div className="heading-container">
                <h3>User {title}</h3>
            </div>
            <Box
                component="form"
                sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                noValidate
                autoComplete="off"
            >
                <TextField
                 id="email" 
                 label="Enter Email" 
                 variant="outlined" 
                 onChange={(e)=> setEmail(e.target.value)}
                 />
                <TextField 
                id="password" 
                label="Enter Password" 
                variant="outlined" 
                onChange={(e)=> setPassword(e.target.value)}/>
            </Box>
            <Button variant="contained" onClick={handleAction}>{title}</Button>
        </div>
    );
}

export default LoginForm;
