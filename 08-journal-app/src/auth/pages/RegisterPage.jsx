import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta' >
        <form>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Nombre completo" 
                type="texto" 
                placeholder="Nombre completo" 
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com" 
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña" 
                fullWidth
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button variant='contained' fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container='row' justifyContent='end'>
              <Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
              </Link>
              
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}