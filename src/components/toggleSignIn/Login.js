import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MyContext } from '../../MyContext';

const Login = () => {
 
    const { setEmail, setPassword, handleAction } = useContext(MyContext)
    return (
        <div style={{
            textAlign: "center"
        }}>
            <div className="heading-container">
                <h3>User Login</h3>
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
                type='password'
                onChange={(e)=> setPassword(e.target.value)}/>
            </Box>
            <Button onClick={()=> handleAction(1)} variant="contained">login</Button>
        </div>
    );
}

export default Login;
