import './nav.css'
import './navDark.css'
import {MdDarkMode} from 'react-icons/md';
import logonavDark from '../assets/LogoAzul.svg';
import  {Link} from 'react-router-dom';

const nav = () => {
  return (
    <div className='organization-nav'>
        <div className='img-logo'><img src={logonavDark} alt="LogoDark" /></div>
        <div className="titleNav-dark" >uTask 3.0</div>
        <Link to="/Kanban" className='link-style'>
          <button className='btn-dark-mode' ><div className='icon-dark'id='circlue-dark'><MdDarkMode/></div></button>
        </Link>
    </div>
  )
}

export default nav


