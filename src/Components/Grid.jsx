import React from 'react'
import { Box , Grid } from '@mui/material';
import Lists from './Columns/lists';

const Grids = () => {
  return (
    <Box sx={{flexGrow:1}}>
        <Grid container spacing={2} >
            <Grid item xs={12} md={8} lg={4}>
                   <Lists title="To do"/>
            </Grid>
            <Grid item xs={12} md={8} lg={4}>
            <Lists title="in Progress"/>
            </Grid>
            <Grid item xs={12} md={8} lg={4}>
            <Lists title="Done"/>
            </Grid>

        </Grid>
    </Box>
  )
}

export default Grids