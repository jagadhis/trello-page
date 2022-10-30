
import React ,{useState} from 'react'
import "./modalForm.css";

const ModalForm = () => {
    const [values, setValues] = useState({
       title:'',
       description:'',
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
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
        setSubmitted(true);
       
    };
    console.log(values);
  return (
    <div> 
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


    </div>
  )
}

export default ModalForm;