import React from 'react'
import { Box , Typography , Card,CardActions,CardContent } from '@mui/material';
const EntityCard = ({CardData}) => {
  return (
    <Box sx={{ minWidth: 275 }}>
        { Object.values(CardData).map((values,index) => {
          return(
            <Card variant="outlined" key={index}>
      <CardContent>
      <Typography sx={{ fontSize: 14 ,fontColor:"black" }} color="text.secondary" gutterBottom>
       {values.description}
      </Typography>
    
      <Typography variant="body2">
{values.title}
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