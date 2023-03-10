import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
{
  id: 1,
  image: IMG1,
  title: 'FlixLi - Cópia do Netflix',
  github: 'https://github.com/elijuniordev/FlixLi',
  demo: 'https://flixli.herokuapp.com/',
},
{
  id: 2,
  image: IMG2,
  title: 'Comunidade Tech',
  github: 'https://github.com/elijuniordev/ComunidadeTech',
  demo: 'https://comunidadetech.herokuapp.com/',
},
{
  id: 3,
  image: IMG3,
  title: 'iTube Downloader - Baixe vídeos do Youtube',
  github: 'https://github.com/elijuniordev/iTubeDownloader',
  demo: 'https://itubedownload.herokuapp.com/',
},
{
  id: 4,
  image: IMG4,
  title: 'iCalc - Calculadora financeira (calcule salário, férias e horas extras)',
  github: 'https://github.com/elijuniordev/iCalc',
  demo: 'https://icalc.herokuapp.com/calculadorasalario',
},
{
  id: 5,
  image: IMG5,
  title: 'Dashboard Covid-19',
  github: 'https://github.com/elijuniordev/Dashboard-Covid-19',
  demo: 'https://dashboard-covid.herokuapp.com/',
},
{
  id: 6,
  image: IMG6,
  title: 'Em breve...',
  github: 'https://github.com/elijuniordev/',
  demo: '#',
},
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus projetos recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
               <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Ao Vivo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio