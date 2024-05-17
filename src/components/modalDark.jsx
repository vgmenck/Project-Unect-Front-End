import React from 'react';
import './modalNewTask.css';
import { MdClose} from 'react-icons/md';
import { useState } from 'react'; 
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const url = "http://localhost:3000/Tasks"

const ModalDark = ({ isOpen, setModalDarkOpen, children }) => {

    const {Title, setTitle} = useContext(CounterContext);
    const {Description, setDescription} = useContext(CounterContext);
    const {Status, setStatus} =  useContext(CounterContext);
    const[tamanhoTela, setTamanhoTela] = useState({
        largura: window.innerWidth,
        altura: window.innerHeight,
      });
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        const Tasks = {
            Title,
            Description,
            Status
        }

        try{

            const res = await fetch(url,{
                method: "Post",
                headers:{
                    "Content-Type":"application/json",
    
                },
                body:JSON.stringify(Tasks),
            });

            if(res.ok){
                console.log("Tarefa cadastrado");
                window.location.reload();
            }else {
                setError("Erro ao cadastrar a Tarefa.");
            }
        } catch (error){
            console.error("Erro ao cadastrar a Tarefa");
        }
    };


  if (!isOpen) return null;
  

  return (
    <>
    <div className="background-modal">
        <div className='modal-retnagulo'>
            <div className='fundo-branco' style={{background: '#3D3D3D'}}>
                <div className='line-modal'>
                    <div className='title-modal'>
                        <h1 className='title-style'>Nova Task</h1>
                        <div className='linha-azul-modal'></div>
                    </div>
                    <button className='btn-close-modal'style={{backgroundColor: '#3D3D3D'}} onClick={setModalDarkOpen}><div id='icon-close'><MdClose/></div></button>
                </div>
                <div className='forms-modal'>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <label className='campo-forms-modal'>
                                <span className='title-box-modal' style={{color: '#FAFAFA'}}>Título *</span> 
                                {tamanhoTela.largura > 426 ?(<input style={{background:'#333333', border: 'none', color: '#FAFAFA'}} type="text" className='text-input-modal' name="tituloTask"  placeholder='Digite o título da tarefa' onChange={(e)=> setTitle(e.target.value)} value={Title || ""}></input>):(<input style={{background:'#333333', border: 'none', color: '#FAFAFA', width:'255px'}} type="text" className='text-input-modal' name="tituloTask"  placeholder='Digite o título da tarefa' onChange={(e)=> setTitle(e.target.value)} value={Title || ""}></input>)}
                            </label>
                        </div>
                        <div>
                            <label className='campo-forms-modal'>
                                <span className='title-box-modal'style={{marginTop: '20px', color: '#FAFAFA'}}>Descrição</span> 
                                {tamanhoTela.largura > 426 ?(<input style={{height:'90px', background:'#333333', border: 'none', color: '#FAFAFA'}} type="text" className='text-input-modal' name="descricaoTask"  placeholder='Descrição da tarefa' onChange={(e)=> setDescription(e.target.value)} value={Description || ""} ></input>):(<input style={{height:'90px', background:'#333333', border: 'none', color: '#FAFAFA', width:'255px'}} type="text" className='text-input-modal' name="descricaoTask"  placeholder='Descrição da tarefa' onChange={(e)=> setDescription(e.target.value)} value={Description || ""} ></input>)}
                                
                            </label> 
                        </div>
                    </form>
                    <button className='text-btn-modal' id='btn-forms-modal' onClick={handleSubmit}>Criar task</button>
                </div>
                
            </div>
        </div>
    </div>      
    </>
  );
};

export default ModalDark;