import './corpo.css';
import Footer from './footer';
import { MdMoreVert} from 'react-icons/md';
import { MdTipsAndUpdates} from 'react-icons/md';
import {MdExpandMore} from 'react-icons/md';
import {MdExpandLess} from 'react-icons/md';
import {MdDeleteOutline} from 'react-icons/md';
import {MdAdd} from 'react-icons/md';
import {MdNavigateNext} from 'react-icons/md';
import {MdNavigateBefore} from 'react-icons/md';
import {MdReplay} from 'react-icons/md';
import Nav from '../components/nav';
import Modal from './modalNewTask';
import { useState } from 'react';




const corpo = () => {

    const [openModal, setOpenModal] = useState(false);
    const [botaoInvisivel, setBotaoInvisivel] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showLess, setShowLess] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const styleBoxTask = {
        width: isExpanded  ? '253px' : '253px',
        height: isExpanded ? '116px' : '74px', 
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '14px',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
    };

    const styleExpandindMore = {
        display: isExpanded ? 'none' : 'flex',
    };

    const textLerDescricao = {
        display: isExpanded ? 'none' : 'flex',
    }

    const navigateNext = {
        marginLeft: isExpanded  ? '46px' : '115px',
        marginTop: isExpanded ? '44px' : '0px',
    }

    const navigateNext2 = {
        marginLeft: isExpanded  ? '3px' : '3px',
        marginTop: isExpanded ? '44px' : '0px',
    }
    
    const  navigateBefore = {
        marginLeft: isExpanded  ? '26px' : '89px',
        marginTop: isExpanded ? '44px' : '0px',
    }

    const descricaoCompleta = {
        display: isExpanded ? 'flex' : 'none',
    }

    const handleDescription = () => {
        setShowDescription(!showDescription);
        setShowLess(showDescription);
        setIsExpanded(!isExpanded);
    };

    const handleClickBotao = () => {
        setShowMenu(!showMenu);
        setBotaoInvisivel(showMenu);

    };


  return (
    <>
        <nav><Nav/></nav>
        <div className="retangulo-frase-do-dia">
            <div className='fundo-amarelo-claro' >
                <div className='icon-tips'id='fundo-amarelo-medio'>
                    <MdTipsAndUpdates/>
                </div>                  
            </div>
            <div className="title-frase-do-dia">Frase do dia</div>
            <h3 className="text-retangulo-frase-do-dia">Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você<br /> 
            quer conquistar o mundo, acredite em você porque Deus já te deu tudo o<br />
            que você precisa para você vencer.</h3>
        </div>

        <div className="kanban">
            <div className='aFazer'>
                <div className='itens-kanban'>
                        <h1 className='text-aFazer'>A fazer</h1>
                        <button className='btn-aFazer' onClick={() => setOpenModal(true)}><div id='icon-add'><MdAdd/></div></button>
                        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                            Conteúdo do modal
                        </Modal>
                </div>
                <div className='fundo-cinza'>
                    <div className='frame'>
                        <div style={styleBoxTask}>
                            <div className='posicionamento'>
                                <h1 className='text-tasks'>Pagar conta de luz</h1>
                                    <div className='rectangle-component'>
                                        <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                                            <button className='more-vert' onClick={handleClickBotao}><MdMoreVert/></button>
                                            {botaoInvisivel && <button className='delete-rectangle'>
                                                                    <div id='icon-delete'><MdDeleteOutline/></div>
                                                                    <div id='text-delete'>Excluir</div>
                                                                </button>}
                                        </div>
                                    </div>
                            </div>
                            <div className='organization'>
                                <h2 className='desc-tasks' style={textLerDescricao}>Ler descrição</h2>
                                <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                                                <button style={styleExpandindMore} className='expanding-more' onClick={handleDescription} ><MdExpandMore/></button>
                                                {showDescription && <div style={descricaoCompleta}>
                                                    <h2 className='desc-tasks' style={{ color:'#002D6C', width: '118px'}}>Esconder descrição</h2>
                                                    <div className='expanding-less'onClick={handleDescription}><MdExpandLess/></div>
                                                    <h3 className='descrição'>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                                            </div>
                                <button className='btn-next' style={navigateNext}><div className='navegate-next' ><MdNavigateNext/></div></button>
                            </div>
                        </div>
                        <div style={styleBoxTask}>
                        <div className='posicionamento'>
                            <h1 className='text-tasks'>Fazer compras no mercado</h1>
                                    <div className='rectangle-component'>
                                        <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                                            <button className='more-vert' onClick={handleClickBotao}><MdMoreVert/></button>
                                            {botaoInvisivel && <button className='delete-rectangle'>
                                                                    <div id='icon-delete'><MdDeleteOutline/></div>
                                                                    <div id='text-delete'>Excluir</div>
                                                                </button>}
                                        </div>
                                    </div>
                            </div>
                            <div className='organization'>
                                <h2 className='desc-tasks' style={textLerDescricao}>Ler descrição</h2>
                                <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                                                <button style={styleExpandindMore} className='expanding-more' onClick={handleDescription} ><MdExpandMore/></button>
                                                {showDescription && <div style={descricaoCompleta}>
                                                    <h2 className='desc-tasks' style={{ color:'#002D6C', width: '118px'}}>Esconder descrição</h2>
                                                    <div className='expanding-less'onClick={handleDescription}><MdExpandLess/></div>
                                                    <h3 className='descrição'>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                                            </div>
                                <button className='btn-next' style={navigateNext}><div className='navegate-next' ><MdNavigateNext/></div></button>
                            </div>
                        </div>
                        <div style={styleBoxTask}>
                            <div className='posicionamento'>
                                <h1 className='text-tasks'>Fazer manicure</h1> 
                                <div className='rectangle-component'>
                                    <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                                        <button className='more-vert' onClick={handleClickBotao}><MdMoreVert/></button>
                                        {botaoInvisivel && <button className='delete-rectangle'>
                                                                <div id='icon-delete'><MdDeleteOutline/></div>
                                                                <div id='text-delete'>Excluir</div>
                                                            </button>}
                                    </div>
                                </div>
                            </div>
                            <div className='organization'>
                                <h2 className='desc-tasks' style={textLerDescricao}>Ler descrição</h2>
                                <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                                                <button style={styleExpandindMore} className='expanding-more' onClick={handleDescription} ><MdExpandMore/></button>
                                                {showDescription && <div style={descricaoCompleta}>
                                                    <h2 className='desc-tasks' style={{ color:'#002D6C', width: '118px'}}>Esconder descrição</h2>
                                                    <div className='expanding-less'onClick={handleDescription}><MdExpandLess/></div>
                                                    <h3 className='descrição'>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                                            </div>
                                <button className='btn-next' style={navigateNext}><div className='navegate-next' ><MdNavigateNext/></div></button>
                            </div> 
                        </div>
                        <div style={styleBoxTask}>
                        <div className='posicionamento'>
                            <h1 className='text-tasks'>Fazer manicure</h1> 
                                    <div className='rectangle-component'>
                                        <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                                            <button className='more-vert' onClick={handleClickBotao}><MdMoreVert/></button>
                                            {botaoInvisivel && <button className='delete-rectangle'>
                                                                    <div id='icon-delete'><MdDeleteOutline/></div>
                                                                    <div id='text-delete'>Excluir</div>
                                                                </button>}
                                        </div>
                                    </div>
                            </div>
                            <div className='organization'>
                                <h2 className='desc-tasks' style={textLerDescricao}>Ler descrição</h2>
                                <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                                                <button style={styleExpandindMore} className='expanding-more' onClick={handleDescription} ><MdExpandMore/></button>
                                                {showDescription && <div style={descricaoCompleta}>
                                                    <h2 className='desc-tasks' style={{ color:'#002D6C', width: '118px'}}>Esconder descrição</h2>
                                                    <div className='expanding-less'onClick={handleDescription}><MdExpandLess/></div>
                                                    <h3 className='descrição'>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                                            </div>
                                <button className='btn-next' style={navigateNext}><div className='navegate-next'><MdNavigateNext/></div></button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        
            <div className='em-andamento'>
                <h1 className='text-aFazer' style={{whiteSpace: 'nowrap'}}>Em andamento</h1>
                <div className='fundo-cinza'style={{overflow: 'hidden',marginTop: '8px' }}>
                    <div className='frame'>
                        <div style={styleBoxTask}>
                        <div className='posicionamento'>
                                <h1 className='text-tasks'>Fazer manicure</h1> 
                                        <div className='rectangle-component'>
                                            <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                                                <button className='more-vert' onClick={handleClickBotao}><MdMoreVert/></button>
                                                {botaoInvisivel && <button className='delete-rectangle'>
                                                                        <div id='icon-delete'><MdDeleteOutline/></div>
                                                                        <div id='text-delete'>Excluir</div>
                                                                    </button>}
                                            </div>
                                        </div>
                                </div>
                                <div className='organization'>
                                    <h2 className='desc-tasks' style={textLerDescricao}>Ler descrição</h2>
                                    <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                                                    <button style={styleExpandindMore} className='expanding-more' onClick={handleDescription} ><MdExpandMore/></button>
                                                    {showDescription && <div style={descricaoCompleta}>
                                                        <h2 className='desc-tasks' style={{ color:'#002D6C', width: '118px'}}>Esconder descrição</h2>
                                                        <div className='expanding-less'onClick={handleDescription}><MdExpandLess/></div>
                                                        <h3 className='descrição'>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                                                </div>
                                    <button className='btn-before' style={navigateBefore}><div className='navegate-before'><MdNavigateBefore/></div></button>
                                    <button className='btn-next' style={navigateNext2}><div className='navegate-next' ><MdNavigateNext/></div></button>
                                </div>   
                        </div>
                    </div>
                      
                    
                </div>
            </div>

            <div className='feito'>
            <h1 className='text-aFazer'>Feito</h1>
                <div className='fundo-cinza'style={{overflow: 'hidden', marginTop: '8px'}}>
                    <div className='frame'>
                        <div style={styleBoxTask}>
                            <div className='posicionamento'>
                                <h1 className='text-tasks' style={{textDecorationLine: 'line-through'}}>Fazer manicure</h1> 
                                    <div className='rectangle-component'>
                                        <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                                            <button className='more-vert' onClick={handleClickBotao}><MdMoreVert/></button>
                                                {botaoInvisivel && <button className='delete-rectangle'>
                                                    <div id='icon-delete'><MdDeleteOutline/></div>
                                                    <div id='text-delete'>Excluir</div>
                                            </button>}
                                        </div>
                                    </div>
                            </div>
                            <div className='organization'>
                                <h2 className='desc-tasks' style={textLerDescricao}>Ler descrição</h2>
                                <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                                    <button style={styleExpandindMore} className='expanding-more' onClick={handleDescription} ><MdExpandMore/></button>
                                        {showDescription && <div style={descricaoCompleta}>
                                                                <h2 className='desc-tasks' style={{ color:'#002D6C', width: '118px'}}>Esconder descrição</h2>
                                                                <div className='expanding-less'onClick={handleDescription}><MdExpandLess/></div>
                                                                <h3 className='descrição'>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                                                            </div>
                                        <button className='btn-before' style={navigateBefore}><div className='navegate-before'><MdNavigateBefore/></div></button>
                                        <button className='btn-next' style={navigateNext2}><div className='navegate-next' ><MdReplay/></div></button>
                                    </div>  
                        </div>  
                    </div>
                </div>
                
            </div>
        </div>
        <footer>
            <Footer/>
        </footer>
        
    </>
  )
}


export default corpo