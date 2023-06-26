import * as React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginInput from '../components/LoginInput';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

const defaultTheme = createTheme();

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <LoginInput login={onLogin} />
      </Grid>
    </ThemeProvider>
  );
}

export default LoginPage;
