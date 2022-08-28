import React, { useState } from "react";
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

const SERVICE_ID = process.env.REACT_APP_serviceID;
const TEMPLATE_ID = process.env.REACT_APP_templateID;
const EMAIL_ID = process.env.REACT_APP_EMAIL_ID;


/** ContactForm :
 *  state: formData, sent(t/f)
 * 
 * uses mailJS to send messages to my email 
 */
function ContactForm() {
  const [formData, setFormData] = useState({});
  const [sent, isSent] = useState(false)


  // handle form inputs on submit and send email 
  function handleSubmit(evt) {
    evt.preventDefault()
    // send form info to emailJS
    emailjs.sendForm(SERVICE_ID, 
                     TEMPLATE_ID, 
                     evt.target, 
                     EMAIL_ID)
      .then((result) => {
        isSent(true)
      }, (error) => {
        console.log(error.text);
      });
  }
  // handle individual inputs on forms 
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log(evt.target)
    setFormData(fData => ({
      ...fData,
      [name]: value.trim(),
    }));
  }

  if (sent) {
    console.log(formData)
    return (
    <Alert color="dark" className="text-center">
      Thanks for reaching out, I'll get back to you right away!
    </Alert>
    )
  }
  return (
    <motion.div className="ContactFormBody"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 1 }}>
      <h2 className="ContactFormMessage">Contact Me</h2>
      <h6 className="ContactFormMessage"><i>You can also reach me at me@perryvon.dev</i></h6>
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