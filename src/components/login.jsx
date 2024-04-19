import './login.css'
import ImgLogin from '../assets/ImgLogin.svg';
import { useState } from 'react';
import {MdVisibilityOff} from 'react-icons/md';

const login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const handleSubmit = (e) =>{
        e.preventeDefault();
        console.log();

        setEmail("");
        setSenha("");
    };


  return (
    <div className='orgainzation-login'>
        <div className='img-login'>
            <img src={ImgLogin} alt="login" />
        </div>
        <div className='divisor'></div>
        <div className='forms-entrada'>
            <h1 className='title-login-entrada'>uTask 3.0</h1>
            <form onSubmit={handleSubmit}>
                <div >
                    <label className='campo-forms'>
                        <span className='title-box'>E-mail</span> 
                        <input type="text" name="email"  placeholder='Endereço de e-mail' onChange={(e)=> setEmail(e.target.value)} value={email || ""}></input>
                    </label>
                </div>
                <div>
                    <label className='campo-forms'>
                        <span className='title-forms'>Senha</span> <i className='icon-visibility-off'><MdVisibilityOff/></i>
                        <input type="text" name="senha"  placeholder='Senha secreta' onChange={(e)=> setSenha(e.target.value)} value={senha || ""} ></input>
                    </label>
                </div>
            </form>
            <div className='esqueceu-a-senha'></div>
        </div>
    </div>
  )
}

export default login