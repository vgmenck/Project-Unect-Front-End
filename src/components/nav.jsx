import './nav.css'
import {MdLightMode} from 'react-icons/md';
import logonav from '../assets/LogoBranca.svg';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
    <div className='organization-nav'>
        <div className='img-logo'><img src={logonav} alt="Logo" /></div>
        <div className="titleNav">uTask 3.0</div>
        <Link to="/KanbanDark" className='link-style'>
          <button className='btn-light-mode'><div className='icon-light' id='circlue-ligth'><MdLightMode/></div></button>
        </Link>
    </div>
  )
}

export default nav