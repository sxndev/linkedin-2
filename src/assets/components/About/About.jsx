import './About.css'
import influencerImg from '../../images/influencer.jpeg'
import developerImg from '../../images/developer-2.jpg'
import cybersecImg from '../../images/cybersec.jpeg'
import managerImg from '../../images/manager-2.jpeg'

import { ProfileCard } from '../ProfileCard/ProfileCard'
const About = () => {
    return (
        <div className="about">
            <h2 className='about-h2'>Sobre Nós</h2>
            <p className='about-p'>Somos uma equipe de desenvolvedores altamente capacitados e treinados para criar soluções inovadoras para o mercado de trabalho. Nosso objetivo é conectar profissionais a oportunidades de emprego de forma eficiente, personalizada e o mais rápido possível.</p>

            <p className='about-p'>Com anos de experiência no mercado digital, estamos comprometidos em oferecer uma plataforma intuitiva e fácil de usar para nossos usuários. Acreditamos que o futuro do trabalho está na tecnologia, e estamos aqui para ajudar as pessoas a se adaptarem a essa nova realidade.</p>

            <p className='about-p'>Nosso time é formado por especialistas em diversas áreas, incluindo desenvolvimento FullStack (Frontend e Backend), CyberSecurity, Design de UX/UI e Marketing Digital. Juntos, trabalhamos para criar uma experiência única para nossos usuários, garantindo rapidez na entrada ao mercado de trabalho.</p>

            <ProfileCard
                name='Luis Gustavo'
                img={managerImg}
                job='Gerente do LinkedIn 2.0'
                bio='"Liderando a equipe para criar a melhor plataforma de conexão profissional"' 
            />
            <ProfileCard
                name='Nicolas Silva'
                img={developerImg} 
                job='Engenheiro de Software'
                bio='"Apaixonado por tecnologia desde criança"'
                /> 


            <ProfileCard
                name='Pedro Henrique'
                img={influencerImg}
                job='Gestor de Marketing'
                bio='"Transformando ideias em posts virais de alta qualidade"' 
            />
            <ProfileCard
                name='Paulo Ricardo'
                img={cybersecImg}
                job='Especialista em CyberSecurity'
                bio='"Defendendo redes contra ameaças cibernéticas"' 
            />
        </div>
    )
}
 
export { About } 