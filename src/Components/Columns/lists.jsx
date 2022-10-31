import React , { useState } from 'react'
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
  const [CardData,setCardData] = useState([])
  const [values, setValues] = useState({
    title:'',
    description:'',
 });
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
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
   
 setValues('');
 CardData.push({
title:values.title,
description:values.description,
 })
 setCardData(CardData);
    
    
    setOpen(false);
    setSubmitted(true);
   
};
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
            <ModalForm
        open={open}
        handleClose={handleClose}
        style={style}
        handleSubmit={handleSubmit}
        values={values}
        handletitleInputChange={handletitleInputChange}
        handledescriptionInputChange={handledescriptionInputChange}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
      </ModalForm>
            
        </Box>
        <EntityCard CardData={CardData} />
    </Box>
  )
}

export default Lists