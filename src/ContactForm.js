import React, { useState } from "react";
import "./ContactForm.css"
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

function ContactForm(){
  const [formData, setFormData] = useState({});

  function handleSubmit(evt){
    evt.preventDefault()
  }
  
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value.trim(),
    }));
    
  }

  return (
    <div className="App">
      <h2 className="ContactFormMessage">Contact Me</h2>
      <Form className="ContactForm" onChange={handleChange} onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Your Email?</Label>
          <Input className="ContactFormField"
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
          />
          <Label for="exampleEmail">Subject</Label>
          <Input className="ContactFormField"
            type="text"
            name="subject"
            id="subject"
            placeholder="I want to hire you ASAP!"
          />
          <Label for="message">message</Label>
          <Input className="ContactFormField"
            type="textarea"
            name="message"
            id="message"
            placeholder="..."
          />
        </FormGroup>
      
        
      <Button className="ContactFormButton">Send!</Button>
    </Form>
  </div>
);
}



export default ContactForm;