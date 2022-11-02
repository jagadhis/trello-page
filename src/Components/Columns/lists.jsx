import React , { useState,useEffect } from 'react'
import { Box , Typography , Button } from '@mui/material';
import {Add} from '@mui/icons-material';
import ModalForm from './modalForm';
import EntityCard from './Card';
import { v4 as uuidv4 } from 'uuid';


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
    id:uuidv4(),title:'',description:'',
  }]
  const data = JSON.parse(window.sessionStorage?.getItem(KEY))
  const [CardData,setCardData] = useState(()=>{
   if(!Array.isArray(data)){
    return []
  }else{
    return data;
  }
  
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
  ...CardData,
  {id:uuidv4(),title:values.title,description:values.description},
  
 ]);

    
    
    setOpen(false);
    setSubmitted(true);
   
};
const handleUpdate = () =>{
  var existing  = window.sessionStorage.getItem(KEY);
  existing = existing?existing.split(','):[];
  existing.push('data')
  window.sessionStorage.setItem(KEY,JSON.stringify(CardData));
}



useEffect(() => {
  window.sessionStorage?.setItem(KEY, JSON.stringify(CardData));
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
      <Box onClick={handleOpen} >
        <EntityCard CardData={CardData} handleUpdate={handleUpdate} />
        </Box>
    </Box>
  )
}

export default Lists