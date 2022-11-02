import React from 'react'
import { Box , Typography , Card,CardActions,CardContent,Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const EntityCard = ({CardData,handleUpdate}) => {
  const id = uuidv4();
  return (
    <Box sx={{ minWidth: 275 }}>
        { Object.values(CardData).map((values) => {
          return(
            <Card variant="outlined" key={id}>
      <CardContent>
        <Typography>{id}</Typography>
      <Typography sx={{ fontSize: 24 ,fontColor:"black" }} color="text.secondary" gutterBottom>
       {values.description}
      </Typography>
    
      <Typography variant="h6">
{values.title}
      </Typography>
    </CardContent>
    <CardActions>
    <Button onClick={handleUpdate} variant="contained">Edit</Button>
    </CardActions>
      </Card>
          )
        }) 

        }
       
      
    </Box>
  )
}

export default EntityCard