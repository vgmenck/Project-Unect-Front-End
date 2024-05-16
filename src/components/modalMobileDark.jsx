import React from 'react';
import { MdTipsAndUpdates} from 'react-icons/md';
import { MdClose} from 'react-icons/md';
import './modalMobile.css';

const modalMobileDark = ({isOpen, setModalOpenMobileDark}) => {

    if (!isOpen) return null;

  return (
    <>
        <div className="background-modal">
            <div className="retangulo-frase-do-dia-mobile" style={{background: '#3D3D3D'}} >
                <div className='fundo-amarelo-claro-mobile'style={{background: '#515151'}} >
                    <div className='icon-tips-mobile' style={{background: '#3D3D3D', color: '#FAFAFA'}} id='fundo-amarelo-medio-mobile'>
                        <MdTipsAndUpdates/>
                    </div>                  
                 </div>
                <div className="title-frase-do-dia-mobile" style={{color: '#FAFAFA'}} >Frase do dia</div>
                <button className='btn-close-modal-mobile' style={{background: 'none'}} onClick={setModalOpenMobileDark} ><div id='icon-close'><MdClose/></div></button>
                <h3 className="text-retangulo-frase-do-dia-mobile" style={{color: '#FAFAFA'}}>Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você<br /> 
                quer conquistar o mundo, acredite em você porque Deus já te deu tudo o que você precisa para você vencer.</h3>
                </div>
        </div>
    </>
  )
}

export default modalMobileDark