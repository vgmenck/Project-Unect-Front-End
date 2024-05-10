import { MdTipsAndUpdates,MdAdd} from 'react-icons/md';
import NavDark from './navDark';
import './corpo.css';
import './kanbanDarkMode.css';
import Footer from './footer';
import { MdMoreVert} from 'react-icons/md';
import {MdExpandMore} from 'react-icons/md';
import {MdExpandLess} from 'react-icons/md';
import {MdDeleteOutline} from 'react-icons/md';
import {MdNavigateNext} from 'react-icons/md';
import {MdNavigateBefore} from 'react-icons/md';
import {MdReplay} from 'react-icons/md';
import ModalDark from './modalDark';
import { useState } from 'react';



const kanbanDark = () => {

  const [openDarkModal, setOpenDarkModal] = useState(false);
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
    backgroundColor: ' #3D3D3D',
  };

  const handleDescription = () => {
    setShowDescription(!showDescription);
    setShowLess(showDescription);
    setIsExpanded(!isExpanded);
  };

  const handleClickBotao = () => {
    setShowMenu(!showMenu);
    setBotaoInvisivel(showMenu);

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

  return (
    <>
      <div className='kanbanDarkMode'>
      <nav style={{background: '#333333'}}><NavDark/></nav>
      <div className="retangulo-frase-do-dia-dark">
        <div className="fundo-amarelo-claro-dark">
          <div className="icon-tips" id="fundo-amarelo-medio" style={{background:'#3D3D3D', color:'#FFFFFF'}}>
            <MdTipsAndUpdates/>
          </div>                  
        </div>
        <div className="title-frase-do-dia" style={{color:'#FFFFFF'}}>Frase do dia</div>
        <h3 className="text-retangulo-frase-do-dia" style={{color:'#FFFFFF'}}>Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você<br /> 
          quer conquistar o mundo, acredite em você porque Deus já te deu tudo o<br />
          que você precisa para você vencer.
        </h3>
      </div>
      <div className="kanban">
        <div className='aFazer'>
          <div className='itens-kanban'>
            <h1 className='text-aFazer' style={{color: '#FAFAFA'}}>A fazer</h1>
            <button className='btn-aFazer' style={{background : 'none'}} onClick={() => setOpenDarkModal(true)}><div id='icon-add'><MdAdd/></div></button>
            <ModalDark isOpen={openDarkModal} setModalDarkOpen={() => setOpenDarkModal(!openDarkModal)}>
              Conteúdo do modal
            </ModalDark>
          </div>
          <div className='fundo-cinza-dark'>
            <div className='frame'>
              <div style={styleBoxTask}>
                <div className='posicionamento'>
                  <h1 className='text-tasks' style={{color: '#FAFAFA'}}>Pagar conta de luz</h1>
                  <div className='rectangle-component'>
                    <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                      <button className='more-vert' style={{color: '#FAFAFA'}} onClick={handleClickBotao}><MdMoreVert/></button>
                      {botaoInvisivel && <button className='delete-rectangle' style={{background: '#535353'}}>
                        <div id='icon-delete' style={{color:'#FFAFAF'}}><MdDeleteOutline/></div>
                        <div id='text-delete' style={{color:'#FFAFAF'}}>Excluir</div>
                      </button>}
                    </div>
                  </div>
                </div>
                <div className='organization'>
                  <h2 className='desc-tasks-dark' style={textLerDescricao}>Ler descrição</h2>
                  <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                    <button style={styleExpandindMore} className='expanding-more-dark' onClick={handleDescription} ><MdExpandMore/></button>
                    {showDescription && <div style={descricaoCompleta}>
                    <h2 className='desc-tasks' style={{ color:'#5C9DFF', width: '118px'}}>Esconder descrição</h2>
                    <div className='expanding-less' style={{ color:'#5C9DFF'}} onClick={handleDescription}><MdExpandLess/></div>
                    <h3 className='descrição' style={{color: '#FAFAFA'}}>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                  </div>
                  <button className='btn-next-dark' style={navigateNext}><div className='navegate-next' style={{color:'#3D3D3D'}} ><MdNavigateNext/></div></button>
                </div>
              </div>
              <div style={styleBoxTask}>
                <div className='posicionamento'>
                  <h1 className='text-tasks' style={{color: '#FAFAFA'}}>Fazer compras no mercado</h1>
                  <div className='rectangle-component'>
                    <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                      <button className='more-vert' style={{color: '#FAFAFA'}} onClick={handleClickBotao}><MdMoreVert/></button>
                      {botaoInvisivel && <button className='delete-rectangle' style={{background: '#535353'}}>
                        <div id='icon-delete' style={{color:'#FFAFAF'}}><MdDeleteOutline/></div>
                        <div id='text-delete' style={{color:'#FFAFAF'}}>Excluir</div>
                      </button>}
                    </div>
                  </div>
                </div>
                <div className='organization'>
                  <h2 className='desc-tasks-dark' style={textLerDescricao}>Ler descrição</h2>
                  <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                    <button style={styleExpandindMore} className='expanding-more-dark' onClick={handleDescription} ><MdExpandMore/></button>
                    {showDescription && <div style={descricaoCompleta}>
                      <h2 className='desc-tasks' style={{ color:'#5C9DFF', width: '118px'}}>Esconder descrição</h2>
                      <div className='expanding-less' style={{ color:'#5C9DFF'}}onClick={handleDescription}><MdExpandLess/></div>
                      <h3 className='descrição' style={{color: '#FAFAFA'}}>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                  </div>
                  <button className='btn-next-dark' style={navigateNext}><div className='navegate-next' style={{color:'#3D3D3D'}}><MdNavigateNext/></div></button>
                </div>
              </div>
              <div style={styleBoxTask}>
                <div className='posicionamento'>
                  <h1 className='text-tasks' style={{color: '#FAFAFA'}}>Fazer manicure</h1> 
                    <div className='rectangle-component'>
                      <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                        <button className='more-vert' style={{color: '#FAFAFA'}} onClick={handleClickBotao}><MdMoreVert/></button>
                        {botaoInvisivel && <button className='delete-rectangle' style={{background: '#535353'}}>
                          <div id='icon-delete' style={{color:'#FFAFAF'}}><MdDeleteOutline/></div>
                          <div id='text-delete' style={{color:'#FFAFAF'}}>Excluir</div>
                        </button>}
                      </div>
                    </div>
                </div>
                <div className='organization'>
                  <h2 className='desc-tasks-dark' style={textLerDescricao}>Ler descrição</h2>
                  <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                    <button style={styleExpandindMore} className='expanding-more-dark' onClick={handleDescription} ><MdExpandMore/></button>
                    {showDescription && <div style={descricaoCompleta}>
                      <h2 className='desc-tasks' style={{ color:'#5C9DFF', width: '118px'}}>Esconder descrição</h2>
                      <div className='expanding-less' style={{ color:'#5C9DFF'}} onClick={handleDescription}><MdExpandLess/></div>
                      <h3 className='descrição' style={{color: '#FAFAFA'}}>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                  </div>
                  <button className='btn-next-dark' style={navigateNext}><div className='navegate-next' style={{color:'#3D3D3D'}} ><MdNavigateNext/></div></button>
                </div> 
              </div>
              <div style={styleBoxTask}>
                <div className='posicionamento'>
                  <h1 className='text-tasks' style={{color: '#FAFAFA'}}>Fazer manicure</h1> 
                  <div className='rectangle-component'>
                    <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                      <button className='more-vert' style={{color: '#FAFAFA'}} onClick={handleClickBotao}><MdMoreVert/></button>
                      {botaoInvisivel && <button className='delete-rectangle' style={{background: '#535353'}}>
                        <div id='icon-delete' style={{color:'#FFAFAF'}}><MdDeleteOutline/></div>
                        <div id='text-delete' style={{color:'#FFAFAF'}}>Excluir</div>
                      </button>}
                    </div>
                  </div>
                </div>
                <div className='organization'>
                  <h2 className='desc-tasks-dark' style={textLerDescricao}>Ler descrição</h2>
                  <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                    <button style={styleExpandindMore} className='expanding-more-dark' onClick={handleDescription} ><MdExpandMore/></button>
                    {showDescription && <div style={descricaoCompleta}>
                      <h2 className='desc-tasks' style={{ color:'#5C9DFF', width: '118px'}}>Esconder descrição</h2>
                      <div className='expanding-less' style={{ color:'#5C9DFF'}} onClick={handleDescription}><MdExpandLess/></div>
                      <h3 className='descrição' style={{color: '#FAFAFA'}}>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                </div>
                <button className='btn-next-dark' style={navigateNext}><div className='navegate-next' style={{color:'#3D3D3D'}}><MdNavigateNext/></div></button>
              </div> 
            </div>
          </div>
        </div> 
      </div>

      <div className='em-andamento'>
        <h1 className='text-aFazer' style={{whiteSpace: 'nowrap', color: '#FAFAFA'}}>Em andamento</h1>
        <div className='fundo-cinza-dark'style={{overflow: 'auto',marginTop: '8px' }}>
          <div className='frame'>
            <div style={styleBoxTask}>
              <div className='posicionamento'>
                <h1 className='text-tasks' style={{color: '#FAFAFA'}}>Fazer manicure</h1> 
                <div className='rectangle-component'>
                  <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                    <button className='more-vert' style={{color: '#FAFAFA'}} onClick={handleClickBotao}><MdMoreVert/></button>
                    {botaoInvisivel && <button className='delete-rectangle' style={{background: '#535353'}}>
                      <div id='icon-delete' style={{color:'#FFAFAF'}}><MdDeleteOutline/></div>
                      <div id='text-delete' style={{color:'#FFAFAF'}}>Excluir</div>
                    </button>}
                  </div>
                </div>
              </div>
              <div className='organization'>
                <h2 className='desc-tasks-dark' style={textLerDescricao}>Ler descrição</h2>
                <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                  <button style={styleExpandindMore} className='expanding-more-dark' onClick={handleDescription} ><MdExpandMore/></button>
                  {showDescription && <div style={descricaoCompleta}>
                    <h2 className='desc-tasks' style={{ color:'#5C9DFF', width: '118px'}}>Esconder descrição</h2>
                    <div className='expanding-less' style={{ color:'#5C9DFF'}}onClick={handleDescription}><MdExpandLess/></div>
                    <h3 className='descrição' style={{color: '#FAFAFA'}}>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                </div>
                <button className='btn-before-dark' style={navigateBefore}><div className='navegate-before'><MdNavigateBefore/></div></button>
                <button className='btn-next-dark' style={navigateNext2}><div className='navegate-next' style={{color:'#3D3D3D'}} ><MdNavigateNext/></div></button>
              </div>   
            </div>
          </div>    
        </div>
      </div>

      <div className='feito'>
        <h1 className='text-aFazer' style={{color: '#FAFAFA'}}>Feito</h1>
        <div className='fundo-cinza-dark'style={{overflow: 'auto', marginTop: '8px'}}>
          <div className='frame'>
            <div style={styleBoxTask}>
              <div className='posicionamento'>
                <h1 className='text-tasks' style={{textDecorationLine: 'line-through', color: '#FAFAFA'}}>Fazer manicure</h1> 
                <div className='rectangle-component'>
                  <div className={`more-vert-menu ${showMenu ? 'open' : ''}`}>
                    <button className='more-vert' style={{color: '#FAFAFA'}} onClick={handleClickBotao}><MdMoreVert/></button>
                    {botaoInvisivel && <button className='delete-rectangle' style={{background: '#535353'}}>
                      <div id='icon-delete' style={{color:'#FFAFAF'}}><MdDeleteOutline/></div>
                      <div id='text-delete' style={{color:'#FFAFAF'}}>Excluir</div>
                    </button>}
                  </div>
                </div>
              </div>
              <div className='organization'>
                <h2 className='desc-tasks-dark' style={textLerDescricao}>Ler descrição</h2>
                <div className={`expand-more-menu ${showDescription ? 'open' : ''}`}>
                  <button style={styleExpandindMore} className='expanding-more-dark' onClick={handleDescription} ><MdExpandMore/></button>
                  {showDescription && <div style={descricaoCompleta}>
                    <h2 className='desc-tasks' style={{ color:'#5C9DFF', width: '118px'}}>Esconder descrição</h2>
                    <div className='expanding-less' style={{ color:'#5C9DFF'}}onClick={handleDescription}><MdExpandLess/></div>
                    <h3 className='descrição' style={{color: '#FAFAFA'}}>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3></div>}
                </div>
                <button className='btn-before-dark' style={navigateBefore}><div className='navegate-before'><MdNavigateBefore/></div></button>
                <button className='btn-next-dark' style={navigateNext2}><div className='navegate-next' style={{color:'#3D3D3D'}}><MdReplay/></div></button>
              </div>  
            </div>  
          </div>
        </div>       
      </div>
    </div>       
    <footer style={{background :' #111111'}}>
      <Footer/>
    </footer>
      </div>
    </>
  )
}

export default kanbanDark
