import React from 'react'
import { Box , Typography , Button } from '@mui/material';
import {Add} from '@mui/icons-material';


const lists = ({title}) => {
  return (
    <Box>
        <Box sx={{display:'flex', justifyContent: 'space-between',height:"40px"}}>
            
            <Typography variant="h5">
                {title}
            </Typography>
           
            
            <Button variant="contained">
                    <Add />
            </Button>
            
        </Box>
    </Box>
  )
}

export default lists