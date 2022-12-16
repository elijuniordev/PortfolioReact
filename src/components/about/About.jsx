import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Conheça</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Imagem Sobre" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiência</h5>
              <small>6 meses e evoluindo!</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>Em breve!</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>5+ completos</small>
            </article>
          </div>
          <p>
            Olá pessoal!
          </p><br/>
          <p><br/>
            Sou o Eli Junior, e tenho muito amor por desenvolvimento Web!
          </p>
          <p><br/>
            Estou sempre em busca de coisas novas para apreender, a web é a minha paixão e estou sempre disposto a aprender mais e mais. Qualquer coisa que possa me ajudar a expandir meus conhecimentos é sempre bem vinda.
          </p>
          <p><br/>
            Este portfolio foi desenvolvido com ReactJS, e você pode conferir o código fonte no meu GitHub.
          </p>
          <p><br/>
            Espero que você goste :)
          </p>
          <a href='#contact' className='btn btn-primary'>Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About