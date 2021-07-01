import React, { useState } from "react";
import { EMAIL_ID, serviceID, templateID } from "./secret_key";
import * as emailjs from "emailjs-com";
import "./ContactForm.css"
import { motion } from "framer-motion";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Alert
} from 'reactstrap';



function ContactForm() {
  const [formData, setFormData] = useState({});
  const [sent, isSent] = useState(false)



  function handleSubmit(evt) {

    evt.preventDefault()
    emailjs.sendForm(serviceID, templateID, evt.target, EMAIL_ID)
      .then((result) => {
        console.log(result.status);
        isSent(true)
      }, (error) => {
        console.log(error.text);
      });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value.trim(),
    }));
  }

  if (sent) {
    return (
    <Alert color="dark" className="text-center">
      Thanks for reaching out, I'll get back to you right away!
    </Alert>
    )
  }
  return (
    <motion.div className="ContactFormBody"
      animate={{ x: 0 }}
      initial={{ x: 2000 }}
      transition={{ delay: .5 }}>
      <h2 className="ContactFormMessage">Contact Me</h2>
      <Form className="ContactForm" onChange={handleChange} onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Your Email?</Label>
          <Input className="ContactFormField"
            type="email"
            name="from_email"
            id="from_email"
            placeholder="your@email.com"
            required

          />
          <FormFeedback>can't see this</FormFeedback>
          <Label for="exampleEmail">Subject</Label>
          <Input className="ContactFormField"
            type="text"
            name="subject"
            id="subject"
            placeholder="I want to hire you ASAP!"
            required
          />
          <Label for="message">message</Label>
          <Input className="ContactFormField"
            type="textarea"
            name="message"
            id="message"
            placeholder="..."
            required
          />
        </FormGroup>

        {!sent && <motion.div
          whileTap={{ scale: .9 }}>
          <Button type="submit" className="ContactFormButton">Send!</Button>
        </motion.div>
        }
      </Form>
    </motion.div>
  );
}



export default ContactForm;