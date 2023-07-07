/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Paper,
  Typography,
} from '@mui/material';
import useInput from '../hooks/useInput';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Register
        </Typography>
        <Box component='form' sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            label='Nama'
            name='nama'
            autoComplete='nama'
            autoFocus
            value={name}
            onChange={onNameChange}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            onChange={onEmailChange}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            value={password}
            onChange={onPasswordChange}
          />
          <Button
            type='button'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            onClick={() => register({ name, email, password })}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/login' variant='body2'>
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
