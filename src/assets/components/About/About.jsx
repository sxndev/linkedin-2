import './About.css'
import influencerPhoto from '../../images/influencer.jpeg'
import developerPhoto from '../../images/developer.jpg'

import { ProfileCard } from '../ProfileCard/ProfileCard'
const About = () => {
    return (
        <div className="about">
            <h2 className='about-h2'>Sobre Nós</h2>
            <p className='about-p'>Somos uma equipe de desenvolvedores apaixonados por criar soluções inovadoras para o mercado de trabalho. Nosso objetivo é conectar profissionais a oportunidades de emprego de forma eficiente, personalizada e o mais rápido possível.</p>

            <p className='about-p'>Com anos de experiência no mercado digital, estamos comprometidos em oferecer uma plataforma intuitiva e fácil de usar para nossos usuários. Acreditamos que o futuro do trabalho está na tecnologia, e estamos aqui para ajudar as pessoas a se adaptarem a essa nova realidade.</p>

            <p className='about-p'>Nosso time é formado por especialistas em diversas áreas, incluindo desenvolvimento FullStack (Frontend e Backend), CyberSecurity, Design de UX/UI e Marketing Digital. Juntos, trabalhamos para criar uma experiência única para nossos usuários, garantindo rapidez na entrada ao mercado de trabalho.</p>

            <ProfileCard
                name='Nicolas Silva'
                img={developerPhoto} 
                job='Engenheiro de Software'
                bio='"Apaixonado por tecnologia desde criança"'
                className='developer-card'
                /> 
            <ProfileCard
                name='Pedro Henrique'
                img={influencerPhoto}
                job='Gestor de Marketing'
                bio='"Transformando ideias em posts virais de alta qualidade"' 
                className='developer-card'
            />
        </div>
    )
}

export { About } 