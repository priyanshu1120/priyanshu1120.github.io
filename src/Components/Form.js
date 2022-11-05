import "./Form.css"
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm("mjvzgqdd");

  if (state.succeeded) {
     alert("Thanku for joining");
     
}

  return (
    <>
        <h1 style={{textAlign:"center", marginTop:"30px"}} id="contect">Contact Me</h1>
    <div className="form">
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" required />
            <label>Email</label>
            <input type="email" name="email" required />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
            <label>Subject</label>
            <input type="text" name="subject" required />
            <label>Message</label>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
            
            <textarea rows="6"  placeholder="Type Your Message Here"  name="message" required/>
            <button className="Btn" type="submit" disabled={state.submitting}>Submit</button>

        </form>

    </div>
    </>
  )
}

export default Form


