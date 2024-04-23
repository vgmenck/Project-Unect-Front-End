import './cadastro.css'
import ImgCadastro from '../assets/ImgCadastro.svg';
import { useState } from 'react';
import {MdVisibilityOff} from 'react-icons/md';

const login = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmeSenha, setConfirmeSenha] = useState("");


    const handleSubmit = (e) =>{
        e.preventeDefault();
        console.log();

        setNome("");
        setEmail("");
        setSenha("");
        setConfirmeSenha("");
    };


  return (
    <div className='orgainzation-login'>
        <div className='forms-cadastro'>
            <div className='box-title-cadastro'>
                <h1 className='title-login-entrada' style={{marginLeft: '0px'}}>uTask 3.0</h1>
                <div className='linha'style={{marginTop: '-12px'}}></div> 
            </div>
            <div className='crie-uma-conta'>Crie uma conta</div>
            <form onSubmit={handleSubmit}>
                <div >
                    <label className='campo-forms'>
                        <span className='title-box'  style={{marginTop: '13px'}}>Nome de usuário</span> 
                        <input type="text" name="nome"  placeholder='Seu nome de usuário' onChange={(e)=> setNome(e.target.value)} value={nome || ""}></input>
                    </label>
                </div>
                <div >
                    <label className='campo-forms'>
                        <span className='title-box'>E-mail</span> 
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
                <div>
                    <label className='campo-forms'>
                        <span className='title-box'>Confirme a senha</span> 
                        <span className='icon-senha'><MdVisibilityOff/></span>
                        <input type="text" name="confirmeSenha"  placeholder='Senha secreta' onChange={(e)=> setConfirmeSenha(e.target.value)} value={confirmeSenha || ""} ></input>
                    </label>
                </div>
                <button className='text-btn-enviar' id='btn-entrar' style={{marginTop: '32px'}}>Criar Cadastro</button>  
            </form>
        </div>
        <div className='divisor' style={{marginLeft: '133px'}}></div>
        <div className='img-cadastro'>
            <img src={ImgCadastro} alt="cadastro" />
        </div>

    </div>
  )
}

export default login