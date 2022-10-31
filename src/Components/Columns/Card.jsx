import React from 'react'
import { Box , Typography , Card,CardActions,CardContent } from '@mui/material';
const EntityCard = (CardData) => {
  return (
    <Box sx={{ minWidth: 275 }}>
        { CardData.map((values,index) => {
          return(
            <Card variant="outlined" key={index}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       {values.title}
      </Typography>
    
      <Typography variant="body2">
{values.description}
      </Typography>
    </CardContent>
    <CardActions>
   
    </CardActions>
      </Card>
          )
        })

        }
       
      
    </Box>
  )
}

export default EntityCard