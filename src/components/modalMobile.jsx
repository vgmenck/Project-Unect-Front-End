import React from 'react';
import { MdTipsAndUpdates} from 'react-icons/md';
import { MdClose} from 'react-icons/md';
import './modalMobile.css';

const modalMobile = ({isOpen, setModalOpenMobile}) => {

    if (!isOpen) return null;

  return (
    <>
        <div className="background-modal">
            <div className="retangulo-frase-do-dia-mobile" >
                <div className='fundo-amarelo-claro-mobile' >
                    <div className='icon-tips-mobile'id='fundo-amarelo-medio-mobile'>
                        <MdTipsAndUpdates/>
                    </div>                  
                 </div>
                <div className="title-frase-do-dia-mobile" >Frase do dia</div>
                <button className='btn-close-modal-mobile' onClick={() => setModalOpenMobile(false)}><div id='icon-close'><MdClose/></div></button>
                <h3 className="text-retangulo-frase-do-dia-mobile">Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você quer conquistar o mundo, acredite em você porque Deus já te deu tudo o que você precisa para você vencer.</h3>
                </div>
        </div>
    </>
  )
}

export default modalMobile