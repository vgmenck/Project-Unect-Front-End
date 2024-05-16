import './login.css'
import ImgLogin from '../assets/ImgLogin.svg';
import { useEffect, useState } from "react"
import {MdVisibilityOff, MdVisibility} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';



const url = "http://localhost:3000/Cadastro"

const login = () => {

    
    const {Email,Senha, setEmail, setSenha} = useContext(CounterContext);
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    const mostrarSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    };
    
    const handleLogin = async (e) => {
        e.preventDefault();

        
        try {
            const response = await fetch(url); 
            const data = await response.json(); 

            const userData = data.some((usuario) => usuario.Email === Email && usuario.Senha === Senha);

            if (userData) {
                console.log("Usuário encontrado:", userData);
                window.location.href = "/kanban";
            } else {
                console.log("Usuário não encontrado.");
                window.location.href = "/senhaIncorreta";
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };
    
    
    
    const handleSubmit = (e) =>{
        e.preventeDefault();
        console.log();

        setEmail("");
        setSenha("");
    };
    

  return (
    <>
        <nav style={{height:'52px'}}></nav>
        <div className='orgainzation-login'>
            <div className='img-login'>
                <img src={ImgLogin} alt="login" />
            </div>
            <div className='divisor'></div>
            <div className='forms-entrada'>
                <h1 className='title-login-entrada'>uTask 3.0</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-field'>
                        <label className='campo-forms'>
                            <span className='title-box'  style={{marginTop: '32px'}}>E-mail</span> 
                            <input type="text" className='text-input' name="email"  placeholder='Endereço de e-mail' onChange={(e)=> setEmail(e.target.value)} value={Email}></input>
                        </label>
                    </div>
                    <div className='input-field'>
                        <label className='campo-forms'>
                            <span className='title-box'>Senha</span> 
                            <span type = 'button' className='icon-senha' onClick={mostrarSenha}>
                                {senhaVisivel ? <MdVisibility/> : <MdVisibilityOff/>}
                            </span>
                            <input type={senhaVisivel ? 'text' : 'password' } className='text-input' name="senha"  placeholder='Senha secreta' onChange={(e)=> setSenha(e.target.value)} value={Senha}></input>
                        </label> 
                    </div>
                </form>
                <div className='esqueceu-a-senha'>Esqueceu a senha ?</div>
                <button className='text-btn-enviar' id='btn-entrar' onClick={handleLogin}>Entrar</button>
                <div className='retangulo2-login'>
                    <div className='linha'></div> 
                    <Link to="/cadastro" className='link-style'>
                        <div className='não-tem-conta'>Não tem cadastro ? Crie uma conta</div> 
                    </Link>
                </div>
            </div>
        </div>
    </>
    
    )
}

export default login