import React from 'react'
import { Box , Grid } from '@mui/material';
import TodoList from './Todo/lists';
import ProgressList from './Inprogress/lists';
import DoneList from './Done/lists';


const Grids = () => {
  return (
    <Box sx={{flexGrow:1}}>
        <Grid container spacing={2} >
            <Grid item xs={12} md={8} lg={4}>
                <TodoList title="To do"/>
            </Grid>
            <Grid item xs={12} md={8} lg={4}>
                <ProgressList title="In Progress"/>
            </Grid>
            <Grid item xs={12} md={8} lg={4}>
                <DoneList title="Done"/>
            </Grid>

        </Grid>
    </Box>
  )
}

export default Grids