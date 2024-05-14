import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import './login.css'
import { useNavigate } from 'react-router-dom';

function Login() {


  const history = useNavigate();

  return (
    <Box
      className="formContainer"
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <Button variant="contained" size="large" onClick={() => history('/game')}>Start</Button>
      <Button variant="contained" size="small">Regras</Button>
    </Box>
  );
}

export default Login;
