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
                        <span className='title-box'  style={{marginTop: '32px'}}>E-mail</span> 
                        <input type="text" name="email"  placeholder='Endereço de e-mail' onChange={(e)=> setEmail(e.target.value)} value={email || ""}></input>
                    </label>
                </div>
                <div>
                    <label className='campo-forms'>
                        <span className='title-box'>Senha</span> 
                        <span className='icon-senha'><MdVisibilityOff/></span>
                        <input type="text" name="senha"  placeholder='Senha secreta' onChange={(e)=> setSenha(e.target.value)} value={senha || ""} ></input>
                    </label>
                </div>
            </form>
            <div className='esqueceu-a-senha'>Esqueceu a senha ?</div>
            <button className='text-btn-enviar' id='btn-entrar'>Entrar</button>
            <div className='retangulo2-login'>
                <div className='linha'></div> 
                <div className='não-tem-conta'>Não tem cadastro ? Crie uma conta</div> 
            </div>
        </div>
        

    </div>
  )
}

export default login