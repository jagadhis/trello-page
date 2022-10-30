import React from 'react'
import { Box , Typography , Button } from '@mui/material';
import {Add} from '@mui/icons-material';


const lists = ({title}) => {
  return (
    <Box sx={{bgcolor:'grey'}}>
        <Box sx={{display:'flex'}}>
            <Typography variant="h5">
                {title}
            </Typography>
            <Button type="Primary">
                    <Add />
            </Button>
        </Box>
    </Box>
  )
}

export default lists