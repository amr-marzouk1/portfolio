import React, { useRef } from 'react'
import './contact.css'
import client1 from '../../assets/Walmart.png'
import client2 from '../../assets/Google.png'
import client3 from '../../assets/Adobe.png'
import client4 from '../../assets/Facebook.png'
import facebook from '../../assets/facebook-icon.png'
import twitter from '../../assets/twitter-icon.png'
import youtube from '../../assets/youtube-icon.png'
import instagram from '../../assets/instagram-icon.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
  //add EmailJS service
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_e18xgme', 'template_2afzmhx', form.current, {
        publicKey: 'h7uzsuytWLEGOBQas',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          e.target.reset()
          alert('email sent !')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <section className="contactPage">
      <div id="clients">
        <h2 className="contactTitle">My Clients</h2>
        <p className="contactDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          asperiores facere labore repudiandae dicta ea temporibus vero repellat
          debitis eius?
        </p>
        <div className="clientImgs">
          <img src={client1} alt="client1" className="clientImg" />
          <img src={client2} alt="client2" className="clientImg" />
          <img src={client3} alt="client3" className="clientImg" />
          <img src={client4} alt="client4" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactTitle">Contact Me</h1>
        <p className="contactDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          error repellendus soluta vel et quae?
        </p>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="enter your name"
            name="from_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="enter your email"
            name="from_email"
            required
          />
          <textarea
            className="msg"
            placeholder="your message"
            rows="5"
            name="message"
            required
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={facebook} alt="facebook" className="link" />
            <img src={twitter} alt="twitter" className="link" />
            <img src={youtube} alt="youtube" className="link" />
            <img src={instagram} alt="instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact
