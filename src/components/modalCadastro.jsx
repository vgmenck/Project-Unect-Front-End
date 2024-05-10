import React from 'react';
import ModalVector from '../assets/vetorModal2.svg';
import  './modalCadastro.css'

const modalCadastro = ({isOpen, setModal2Open, children}) => {

    if (!isOpen) return null;

  return (
    <>
        <div className="background-modal">
            <div className='rectangle-modal-cadastro'>
                <div className='background-modal-2'>
                    <img className='position-vetor' src={ModalVector} alt="vetor" />
                    <h1 className='title-modal-2'>Conta criada com sucesso</h1>
                    <h3 className='subtitle-modal-2'>Um instante, iremos te redirecionar ao login !</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default modalCadastro