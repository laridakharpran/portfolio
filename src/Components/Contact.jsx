import React from 'react'
import '../../src/index.css';
import Swal from 'sweetalert2';
import { ImFacebook2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "915fb82e-185a-4fbe-be86-5999e717f7c3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "success!",
        text: "Message send successfully",
        icon: "success"
      });
    }
  };
  return (
    <> 
    <div id="Contact" align="center">
    <h1>CONTACT</h1>
    </div>
    <section className="contact"> 
    <form onSubmit={onSubmit}>
    <h2>Contact Me</h2>
    <div className="input-box">
          <label align-text="center">Full Name</label>
          <input type="text" className="feild" placeholder="enter yor name" name="name" required/>
          <label align-text="center">Email Address</label>
          <input type="email" className="feild" placeholder="enter yor email" name="email" required/>
        </div>
        <div className="input-box">
          <label align="center">Your Message</label>
          <textarea name="message" id="" placeholder="enter your message" required></textarea>
        </div>
        <button type="submit">Send message</button>
    </form>
    </section>
    <div className='container-icon'>
     <a href="https://www.facebook.com/larida.kharpran/about/" target="blank" className="items"><ImFacebook2 className='icon' /></a>
     <a href="https://github.com/laridakharpran" target="blank" className="items"><FaGithub  className='icon' /></a>
     <a href="https://www.linkedin.com/in/larida-kharpran-8819681a1" target="blank" className="items"><FaLinkedin  className='icon' /></a>
    </div>
      </>
   )
}


export default Contact