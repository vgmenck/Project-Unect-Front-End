import './login.css'
import ImgLogin from '../assets/ImgLogin.svg';
import { useEffect, useState } from "react"
import {MdVisibilityOff, MdVisibility} from 'react-icons/md';
import { Link } from 'react-router-dom';


const url = "http://localhost:3000/Cadastro"

const login = () => {

    const[Cadastro, setCadastro] = useState([]);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    const mostrarSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    };
    
    //const {data, items} = useFetch(url);

    useEffect(()=>{
        
        async function getData(){
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)

            setCadastro(data);
        }

        getData();
    },[]);

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
                            <input type="text" className='text-input' name="email"  placeholder='Endereço de e-mail' onChange={(e)=> setEmail(e.target.value)} value={email || ""}></input>
                        </label>
                    </div>
                    <div className='input-field'>
                        <label className='campo-forms'>
                            <span className='title-box'>Senha</span> 
                            <span type = 'button' className='icon-senha' onClick={mostrarSenha}>
                                {senhaVisivel ? <MdVisibility/> : <MdVisibilityOff/>}
                            </span>
                            <input type={senhaVisivel ? 'text' : 'password' } style={{background: '#FFE6E6', border:'1px solid #820000'}} className='text-input' name="senha"  placeholder='Senha secreta' onChange={(e)=> setSenha(e.target.value)} value={senha}></input>
                        </label> 
                    </div>
                </form>
                <div className='senha-incorreta'>Senha incorreta, tente novamente.</div>
                <div className='esqueceu-a-senha'>Esqueceu a senha ?</div>
                <Link to="/kanban" className='link-style'>
                    <button className='text-btn-enviar' id='btn-entrar'>Entrar</button>
                </Link>
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