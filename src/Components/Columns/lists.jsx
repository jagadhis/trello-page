import React , { useState,useEffect } from 'react'
import { Box , Typography , Button } from '@mui/material';
import {Add} from '@mui/icons-material';
import ModalForm from './modalForm';
import EntityCard from './Card';


const Lists = ({title}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const KEY = "Data";
  const initialValue=[{
    title:'',description:'',
  }]
  const [CardData,setCardData] = useState(()=>{
    return JSON.parse(window.localStorage.getItem(KEY) || [])
  })
  const [values, setValues] = useState(initialValue)
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [valid,setValid] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handletitleInputChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        title: event.target.value,
        
    }));
};
const handledescriptionInputChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        description:event.target.value,
    }));
};
const handleSubmit = (e) => {
    e.preventDefault();
    if(values.title && values.description ) {
        setValid(true);
    }
   
 

 setCardData([
  {title:values.title,description:values.description},
  ...CardData,
 ]);
    
    
    setOpen(false);
    setSubmitted(true);
   
};


useEffect(() => {
  window.localStorage.setItem(KEY, JSON.stringify(CardData));
}, [CardData]);



console.log(values);
console.log(CardData);
  return (
    <Box>
        <Box sx={{display:'flex', justifyContent: 'space-between',height:"40px"}}>
            
            <Typography variant="h5">
                {title}
            </Typography>
           
            
            <Button variant="contained" onClick={handleOpen}>
                    <Add />
            </Button>
   
            
        </Box>
        <ModalForm
        open={open}
        handleClose={handleClose}
        style={style}
        handleSubmit={handleSubmit}
        values={values}
        submitted={submitted}
        valid={valid}
        handletitleInputChange={handletitleInputChange}
        handledescriptionInputChange={handledescriptionInputChange}
      
      >
      
      </ModalForm>
        <EntityCard CardData={CardData} />
    </Box>
  )
}

export default Lists