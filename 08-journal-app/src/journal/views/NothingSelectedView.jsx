import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={ {minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 2}}
    >
      <Grid item
        // className='box-shadow'
        xs={12}
        // sx={{ 
        //     width: { sm:450 },
        //     backgroundColor: 'white', 
        //     padding: 3, 
        //     borderRadius: 2
        //     }}
      >
        <StarOutline sx={{ fontSize: 100, color: 'white' }}/>
      </Grid>
      <Grid item>
        <Typography color='white' variant='h5'>
          Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>

  )
}
