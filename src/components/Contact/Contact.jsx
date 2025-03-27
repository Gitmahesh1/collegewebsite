import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8b2ce436-02b3-4158-9766-e73235444d59");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log("Success",data);
        setResult(data.message);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
         <h3> Send us a message <img src={msg_icon} alt=''/></h3>
         <p>
            Feel free to reach out through contact form or find our contact
            information below.Your feedback,Questions and suggestions are 
            important to us as we strive to provide serviceto our university communutiy

         </p>
         <ul>
            <li>
                <img src={mail_icon} alt=''/>aitla7821@gmail.com

            </li>
            <li><img src={phone_icon} alt=''/>+1 16304979015</li>
            <li><img src={location_icon} alt=''/> 1234 Main St, Anytown, USA 12345</li>
         </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter Your mobile number' required/>
            <label>Write Your message here</label>
            <textarea name='message' rows="6" placeholder='Enter Your message' required/>
            <button type='submit' className='btn dark-btn'>Submit<img src={white_arrow}/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
