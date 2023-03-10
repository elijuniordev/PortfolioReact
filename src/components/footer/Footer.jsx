import React from 'react'
import './footer.css'
import {FiInstagram, FiLinkedin, FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>EliJunior.DEV</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

    <div className="footer__socials">
      <a href="https://www.instagram.com/elijunior.dev/"><FiInstagram/></a>
      <a href="https://www.linkedin.com/in/juniorsoares99/"><FiLinkedin/></a>
      <a href="https://github.com/elijuniordev"><FiGithub/></a>
    </div>
    </footer>
  )
}

export default Footer