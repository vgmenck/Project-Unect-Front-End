import React from 'react';
import './modalNewTask.css';
import { MdClose} from 'react-icons/md';
import { useState } from 'react'; 

const Modal = ({ isOpen, setModalOpen, children }) => {

    const [tituloTask, setTituloTask] = useState("");
    const [descricaoTask, setDescricaoTask] = useState("");
    
    const handleSubmit = (e) =>{
        e.preventeDefault();
        console.log();

        setTituloTask("");
        setDescricaoTask("");
    };


  if (!isOpen) return null;
  

  return (
    <>
    <div className="background-modal">
        <div className='modal-retnagulo'>
            <div className='fundo-branco'>
                <div className='line-modal'>
                    <div className='title-modal'>
                        <h1 className='title-style'>Nova Task</h1>
                        <div className='linha-azul-modal'></div>
                    </div>
                    <button className='btn-close-modal' onClick={setModalOpen}><div id='icon-close'><MdClose/></div></button>
                </div>
                <div className='forms-modal'>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <label className='campo-forms-modal'>
                                <span className='title-box-modal'>Título *</span> 
                                <input type="text" className='text-input-modal' name="tituloTask"  placeholder='Digite o título da tarefa' onChange={(e)=> setTituloTask(e.target.value)} value={tituloTask || ""}></input>
                            </label>
                        </div>
                        <div>
                            <label className='campo-forms-modal'>
                                <span className='title-box-modal'style={{marginTop: '20px'}}>Descrição</span> 
                                <input style={{height:'90px'}} type="text" className='text-input-modal' name="descricaoTask"  placeholder='Descrição da tarefa' onChange={(e)=> setDescricaoTask(e.target.value)} value={descricaoTask || ""} ></input>
                            </label> 
                        </div>
                    </form>
                    <button className='text-btn-modal' id='btn-forms-modal'>Criar task</button>
                </div>
                
            </div>
        </div>
    </div>      
    </>
  );
};

export default Modal;