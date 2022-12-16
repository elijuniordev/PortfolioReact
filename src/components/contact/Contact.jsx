import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Deseja entrar em contato?</h5>
      <h2>Entre em contato comigo!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>elijunior.dev@gmail.com</h5>
            <a href="mailto:elijunior.dev@gmail.com" target='_blank' rel="noopener noreferrer">Envie uma mensagem</a>
          </article> 

          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@elijunior.dev</h5>
            <a href="https://www.instagram.com/elijunior.dev/" target='_blank' rel="noopener noreferrer">Envie uma mensagem</a>
          </article> 

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(11) 97123-0281</h5>
            <a href="https://wa.me/5511971230281" target='_blank' rel="noopener noreferrer">Envie uma mensagem</a>
          </article> 
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Seu nome completo' required />
          <input type="email" name="email" placeholder='Seu email' required/>
          <textarea name="message" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type="submit" className='btn btn-primary'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact