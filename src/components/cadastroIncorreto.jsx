import './cadastro.css'
import ImgCadastro from '../assets/ImgCadastro.svg';
import { useState } from 'react';
import {MdVisibilityOff,  MdVisibility} from 'react-icons/md';
import Modal2 from './modalCadastro';


const url = "http://localhost:3000/Cadastro"

const cadastro = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmeSenha, setConfirmeSenha] = useState("");
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);


    

    const mostrarSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    };


    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        if (!nome || !email || !senha || !confirmeSenha) {
            console.error("Por favor, preencha todos os campos.");
            return;
        }

        if (senha !== confirmeSenha) {
            console.error("As senhas não coincidem.");
            return;
        }
        
        const Cadastro = {
            nome,
            email,
            senha
        }

        try{
            console.log(Cadastro);

            const res = await fetch(url,{
                method: "Post",
                headers:{
                    "Content-Type":"application/json",
    
                },
                body:JSON.stringify(Cadastro),
            });
    
            setNome("");
            setEmail("");
            setSenha("");
            setConfirmeSenha("");
    

        } catch (error){
            console.error("Erro ao cadastrar o usuario", error.message);
        }
        


        
    };


  return (
    <>
        <nav style={{height:'52px'}}></nav>
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
                            <input type="text" className='text-input' name="nome"  placeholder='Seu nome de usuário' onChange={(e)=> setNome(e.target.value)} value={nome || ""}></input>
                        </label>
                    </div>
                    <div >
                        <label className='campo-forms'>
                            <span className='title-box'>E-mail</span> 
                            <input type="text" className='text-input' name="email"  placeholder='Endereço de e-mail' onChange={(e)=> setEmail(e.target.value)} value={email || ""}></input>
                        </label>
                    </div>
                    <div>
                        <label className='campo-forms'>
                            <span className='title-box'>Senha</span> 
                            <span type = 'button' className='icon-senha' onClick={mostrarSenha}>
                                {senhaVisivel ? <MdVisibility/> : <MdVisibilityOff/>}
                            </span>
                            <input type={senhaVisivel ? 'text' : 'password' } style={{background: '#FFE6E6', border:'1px solid #820000'}} className='text-input' name="senha"  placeholder='Senha secreta' onChange={(e)=> setSenha(e.target.value)} value={senha || ""} ></input>
                        </label>
                    </div>
                    <div>
                        <label className='campo-forms'>
                            <span className='title-box'>Confirme a senha</span> 
                            <span type = 'button' className='icon-senha' onClick={mostrarSenha}>
                                {senhaVisivel ? <MdVisibility/> : <MdVisibilityOff/>}
                            </span>
                            <input type={senhaVisivel ? 'text' : 'password' } style={{background: '#FFE6E6', border:'1px solid #820000'}} className='text-input' name="confirmeSenha"  placeholder='Senha secreta' onChange={(e)=> setConfirmeSenha(e.target.value)} value={confirmeSenha || ""} ></input>
                        </label>
                    </div>
                    <div className='senhas-nao-combinam'>Senhas não combinam, tente novamente.</div>
                    <button className='text-btn-enviar' id='btn-entrar' style={{marginTop: '14px'}} onClick={() => setOpenModal2(true)}>Criar Cadastro</button>  
                    <Modal2 isOpen={openModal2} setModalOpen2={() => setOpenModal2(!openModal2)}>
                        Conteúdo do modal
                    </Modal2>
                </form>
            </div>
            <div className='divisor' style={{marginLeft: '133px'}}></div>
            <div className='img-cadastro'>
                <img src={ImgCadastro} alt="cadastro" />
            </div>

        </div>
    </>
  )
}

export default cadastro