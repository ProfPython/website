import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-w1.png'
import LogoSubtitle from '../../assets/images/logo-wsub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src = {LogoS} alt="logo" />
                <img className="sub-logo" src = {LogoSubtitle} alt="williams" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink onClick = {() => setShowNav(false)} exact = "true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick = {() => setShowNav(false)} exact = "true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick = {() => setShowNav(false)} exact = "true" activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick = {() => setShowNav(false)} exact = "true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon onClick = {() => setShowNav(false)} icon={faClose} color='#4d4d4e' size="3x" className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/williams-anthony-90aa1623b/'>
                        <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/ProfPython'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/ProfPython'>
                        <FontAwesomeIcon icon="fa-solid fa-file-lines" color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#4d4d4e" size="3x" className="hamburger-icon" />
        </div>
    )
}
export default Sidebar