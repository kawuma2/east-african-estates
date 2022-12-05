import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contactus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uf7djpq', 'template_9u6xxs8', form.current, 'ceKI0pEXBLGJOkpGL')
      
      e.target.reset()
  }
  return (
    <section className='contact-us'>
      <div className='contact-intro'>
        <h5>Get in touch</h5>
      <h2>Contact us</h2>
      </div>
      
      <div className='contact-section'>
        <div className='contact-articles'>
          <article className='article-info1'>
              <span><MdOutlineEmail /></span>
              <h4>Email</h4>
            <h5>eafricanestates</h5>
            <a href='mailto:eafricanestates@gmail.com' target="_blank">send a message</a>
          </article>
          <article className='article-info2'>
            <span><BsWhatsapp /></span>
            <h4>WhatsApp</h4>
            <h5>+256707909961</h5>
            <a href='http://api.whatsapp.com/send?phone+256707909961' target="_blank">send whatsapp message</a>
          </article>
          <article className='article-info3'>
            <span><RiMessengerLine /></span>
            <h4>Messenger</h4>
            <h5>East African Estates</h5>
            <a href='https://m.me/eae.estates' target="_blank">send message</a>
          </article>
        </div>
        <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type='text' name='country' placeholder='Your Nationality' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required>

          </textarea>
          <button type='submit' className='btn-primary'>Send message</button>
        </form>
        </div>
      </div>

    </section>
  )
}
