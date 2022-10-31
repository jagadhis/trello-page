import React from 'react'
import { Box , Typography , Card,CardActions,CardContent } from '@mui/material';
const EntityCard = (CardData) => {
  return (
    <Box sx={{ minWidth: 275 }}>
        { Object.values(CardData).map((CardData,index) => {
          return(
            <Card variant="outlined" key={index}>
      <CardContent>
      <Typography sx={{ fontSize: 14 ,fontColor:"black" }} color="text.secondary" gutterBottom>
       {CardData.title}
      </Typography>
    
      <Typography variant="body2">
{CardData.description}
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