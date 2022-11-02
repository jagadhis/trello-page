
import React from 'react'
import { Box ,  Modal } from '@mui/material';
import "./Modalform.css";

const ModalForm = ({open,handleClose,style,values,handleSubmit,handletitleInputChange,handledescriptionInputChange,submitted,valid}) => {
 
    
   

  return (
    <div> 
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form class='register-form' onSubmit={handleSubmit}>
        <input
    id="title"
    className="form-field"
    type="text"
    placeholder="Title"
    name="title"
    onChange={handletitleInputChange}
    value={values.title}
/>
{ submitted && !values.title && <span id="title-error">Please enter Title</span>}

<input
    id="description"
    className="form-field"
    type="text"
    placeholder="Description"
    name="description"
    onChange={handledescriptionInputChange}
    value={values.description}
/>
{submitted && !values.description && <span id="description-error">Please enter Description</span>}

<button type='submit'>Submit </button>
</form>
        </Box>
      </Modal>



    </div>
  )
}

export default ModalForm;