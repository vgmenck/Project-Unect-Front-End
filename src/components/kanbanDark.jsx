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
import { useEffect } from 'react';
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import ModalMobileDark from './modalMobileDark';

const url = "http://localhost:3000/Tasks"

const kanbanDark = () => {

  const [openDarkModal, setOpenDarkModal] = useState(false);
  const [openModalMobileDark, setOpenModalMobileDark] = useState(false);
  const [botaoInvisivel, setBotaoInvisivel] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [tasks, setTasks] = useState([]);
  const {Title, setTitle, Description, setDescription, Status, setStatus} = useContext(CounterContext);
  const [aFazerTask, setAFazerTask] = useState([]);
  const [emAndamentoTask, setEmAndamentoTask] = useState([]);
  const [feitoTask, setFeitoTask] = useState([]);

  useEffect(()=>{
    async function getData(){
        const response = await fetch(url); 
        const data = await response.json();

        setAFazerTask([]);
        setEmAndamentoTask([]);
        setFeitoTask([]);

        data.forEach(tasks => {
            if (tasks.Status === 'A fazer') {
                setAFazerTask(prevState => [...prevState, tasks]);
            } else if (tasks.Status === 'Em andamento') {
                setEmAndamentoTask(prevState => [...prevState, tasks]);
            } else if (tasks.Status === 'Feito') {
                setFeitoTask(prevState => [...prevState, tasks]);
            }
        });

    }

    getData();

  },[]);


  const handleMoveTaskAfazer = (taskId, newStatus) => {
      const taskIndex = aFazerTask.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
          const movedTask = aFazerTask.splice(taskIndex, 1)[0];
          movedTask.status = newStatus;
          if (newStatus === 'Em andamento') {
              setEmAndamentoTask(prevState => [...prevState, movedTask]);
          }
          setAFazerTask([...aFazerTask]);
      }
  };

  const handleMoveTaskEmAndamento = (taskId, newStatus) => {
      const taskIndex = emAndamentoTask.findIndex(tasks => tasks.id === taskId);
      if (taskIndex !== -1) {
          const movedTask = emAndamentoTask.splice(taskIndex, 1)[0];
          movedTask.Status = newStatus;
          if (newStatus === 'A fazer') {
              setAFazerTask(prevState => [...prevState, movedTask]);
          } else if (newStatus === 'Feito') {
              setFeitoTask(prevState => [...prevState, movedTask]);
          }
          setEmAndamentoTask([...emAndamentoTask]);
      }
  };

  const handleMoveTaskFeito = (taskId, newStatus) => {
      const taskIndex = feitoTask.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
          const movedTask = feitoTask.splice(taskIndex, 1)[0];
          movedTask.status = newStatus;
          if (newStatus === 'A fazer') {
              setAFazerTask(prevState => [...prevState, movedTask]);
          } else if (newStatus === 'Em andamento') {
              setEmAndamentoTask(prevState => [...prevState, movedTask]);
          }
          setFeitoTasksetEmAndamentoTask([...feitoTask]);
      }
  };

  const handleDeleteTask = (taskId) => {
    const updatedAFazerTasks = aFazerTask.filter(task => task.id !== taskId);
    const updatedEmAndamentoTasks = emAndamentoTask.filter(task => task.id !== taskId);
    const updatedFeitoTasks = feitoTask.filter(task => task.id !== taskId);
    setAFazerTask(updatedAFazerTasks);
    setEmAndamentoTask(updatedEmAndamentoTasks);
    setFeitoTask(updatedFeitoTasks);
};


  const styleBoxTask = (taskId) => ({
    width: isExpanded[taskId]  ? '253px' : '253px',
    height: isExpanded[taskId] ? '116px' : '74px', 
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '14px',
    borderRadius: '10px',
    backgroundColor: ' #3D3D3D',
  });

  const styleExpandindMore =  (taskId) => ({
    display: isExpanded[taskId] ? 'none' : 'flex',
  });

  const textLerDescricao = (taskId) => ({
    display: isExpanded[taskId] ? 'none' : 'flex',
  });

  const navigateNext = (taskId) => ( {
    marginLeft: isExpanded[taskId]  ? '46px' : '115px',
    marginTop: isExpanded[taskId] ? '44px' : '0px',
  });

  const navigateNext2 = (taskId) => ( {
    marginLeft: isExpanded[taskId]  ? '3px' : '3px',
    marginTop: isExpanded[taskId] ? '44px' : '0px',
  });

  const  navigateBefore = (taskId) => ( {
    marginLeft: isExpanded[taskId]  ? '26px' : '89px',
    marginTop: isExpanded[taskId] ? '44px' : '0px',
  });

  const descricaoCompleta = (taskId) => ({
    display: isExpanded[taskId] ? 'flex' : 'none',
  });

  const handleDescription = (taskId) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [taskId]: !prevState[taskId],
    }));
    
    setIsExpanded((prevState) => ({
        ...prevState,
        [taskId]: !prevState[taskId],
    }));
  };

  const handleClickBotao = (taskId) => {
    setShowMenu((prevState) => ({
      ...prevState,
      [taskId]: !prevState[taskId],
    }));
    setBotaoInvisivel(showMenu[taskId]);
  };

  return (
    <>
      <div className='kanbanDarkMode'>
      <nav style={{background: '#333333'}}><NavDark/></nav>
      <ModalMobileDark isOpen={openModalMobileDark} setOpenModalMobileDark={() => setOpenModalMobileDark(!openModalMobileDark)}>
              Conteúdo do modal
      </ModalMobileDark>
      <div className="retangulo-frase-do-dia-dark" onClick={() => setOpenModalMobileDark(true)}>
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
      <span className='navegate-before-mobile'><MdNavigateBefore/></span>
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
            {aFazerTask.map(task => (
              <div key={task.id}>
              <div style={styleBoxTask(task.id)}>
                <div className='posicionamento'>
                  <h1 className='text-tasks' style={{color: '#FAFAFA'}}>{task.Title}</h1>
                  <div className='rectangle-component'>
                    <div className={`more-vert-menu ${showMenu[task.id] ? 'open' : ''}`}>
                      <button className='more-vert' style={{color: '#FAFAFA'}} onClick={() => handleClickBotao(task.id)}><MdMoreVert/></button>
                      {showMenu[task.id] && <button className='delete-rectangle' style={{background: '#535353'}} onClick={() => handleDeleteTask(task.id)}>
                        <div id='icon-delete' style={{color:'#FFAFAF'}}><MdDeleteOutline/></div>
                        <div id='text-delete' style={{color:'#FFAFAF'}}>Excluir</div>
                      </button>}
                    </div>
                  </div>
                </div>
                <div className='organization'>
                  <h2 className='desc-tasks-dark' style={textLerDescricao(task.id)}>Ler descrição</h2>
                  <div className={`expand-more-menu ${showDescription[task.id] ? "open" : ""}`}>
                    <button style={styleExpandindMore (task.id)} className='expanding-more-dark' onClick={() => handleDescription(task.id)}><MdExpandMore/></button>
                    {showDescription && <div style={descricaoCompleta (task.id)}>
                    <h2 className='desc-tasks' style={{ color:'#5C9DFF', width: '118px'}}>Esconder descrição</h2>
                    <div className='expanding-less' style={{ color:'#5C9DFF'}} onClick={() => handleDescription(task.id)}><MdExpandLess/></div>
                    <h3 className='descrição' style={{color: '#FAFAFA'}}>{task.Description}</h3></div>}
                  </div>
                  <button className='btn-next-dark' style={navigateNext(task.id)} onClick={() => handleMoveTaskAfazer(task.id, 'Em andamento')} ><div className='navegate-next' style={{color:'#3D3D3D'}} ><MdNavigateNext/></div></button>
                  </div>
                </div>
              </div>
            ))}
          </div>    
        </div> 
      </div>

      <div className='em-andamento'>
        <h1 className='text-aFazer' style={{whiteSpace: 'nowrap', color: '#FAFAFA'}}>Em andamento</h1>
        <div className='fundo-cinza-dark'style={{overflow: 'auto',marginTop: '8px' }}>
          <div className='frame'>
          {emAndamentoTask.map(task => (
              <div key={task.id}>
              <div style={styleBoxTask(task.id)}>
                <div className='posicionamento'>
                  <h1 className='text-tasks' style={{color: '#FAFAFA'}}>{task.Title}</h1>
                  <div className='rectangle-component'>
                    <div className={`more-vert-menu ${showMenu[task.id] ? 'open' : ''}`}>
                      <button className='more-vert' style={{color: '#FAFAFA'}} onClick={() => handleClickBotao(task.id)}><MdMoreVert/></button>
                      {showMenu[task.id] && <button className='delete-rectangle' style={{background: '#535353'}} onClick={() => handleDeleteTask(task.id)}>
                        <div id='icon-delete' style={{color:'#FFAFAF'}}><MdDeleteOutline/></div>
                        <div id='text-delete' style={{color:'#FFAFAF'}}>Excluir</div>
                      </button>}
                    </div>
                  </div>
                </div>
                <div className='organization'>
                  <h2 className='desc-tasks-dark' style={textLerDescricao(task.id)}>Ler descrição</h2>
                  <div className={`expand-more-menu ${showDescription[task.id] ? "open" : ""}`}>
                    <button style={styleExpandindMore(task.id)} className='expanding-more-dark' onClick={() => handleDescription(task.id)} ><MdExpandMore/></button>
                    {showDescription && <div style={descricaoCompleta(task.id)}>
                    <h2 className='desc-tasks' style={{ color:'#5C9DFF', width: '118px'}}>Esconder descrição</h2>
                    <div className='expanding-less' style={{ color:'#5C9DFF'}} onClick={() => handleDescription(task.id)}><MdExpandLess/></div>
                    <h3 className='descrição' style={{color: '#FAFAFA'}}>{task.Description}</h3></div>}
                  </div>
                <button className='btn-before-dark' style={navigateBefore(task.id)} onClick={() => handleMoveTaskEmAndamento(task.id, 'A fazer')}><div className='navegate-before'><MdNavigateBefore/></div></button>
                <button className='btn-next-dark' style={navigateNext2(task.id)} onClick={() => handleMoveTaskEmAndamento(task.id, 'Feito')}><div className='navegate-next' style={{color:'#3D3D3D'}} ><MdNavigateNext/></div></button>
                  </div>
                </div>
              </div>
            ))}
          </div>    
        </div>
      </div>

      <div className='feito'>
        <h1 className='text-aFazer' style={{color: '#FAFAFA'}}>Feito</h1>
        <div className='fundo-cinza-dark'style={{overflow: 'auto', marginTop: '8px'}}>
          <div className='frame'>
          {feitoTask.map(task => (
              <div key={task.id}>
              <div style={styleBoxTask(task.id)}>
                <div className='posicionamento'>
                  <h1 className='text-tasks' style={{textDecorationLine: 'line-through',color: '#FAFAFA'}}>{task.Title}</h1>
                  <div className='rectangle-component'>
                    <div className={`more-vert-menu ${showMenu[task.id] ? 'open' : ''}`}>
                      <button className='more-vert' style={{color: '#FAFAFA'}} onClick={() => handleClickBotao(task.id)}><MdMoreVert/></button>
                      {showMenu[task.id] && <button className='delete-rectangle' style={{background: '#535353'}} onClick={() => handleDeleteTask(task.id)}>
                        <div id='icon-delete' style={{color:'#FFAFAF'}}><MdDeleteOutline/></div>
                        <div id='text-delete' style={{color:'#FFAFAF'}}>Excluir</div>
                      </button>}
                    </div>
                  </div>
                </div>
                <div className='organization'>
                  <h2 className='desc-tasks-dark' style={textLerDescricao(task.id)}>Ler descrição</h2>
                  <div className={`expand-more-menu ${showDescription[task.id] ? "open" : ""}`}>
                    <button style={styleExpandindMore(task.id)} className='expanding-more-dark' onClick={() => handleDescription(task.id)} ><MdExpandMore/></button>
                    {showDescription && <div style={descricaoCompleta(task.id)}>
                    <h2 className='desc-tasks' style={{ color:'#5C9DFF', width: '118px'}}>Esconder descrição</h2>
                    <div className='expanding-less' style={{ color:'#5C9DFF'}} onClick={() => handleDescription(task.id)}><MdExpandLess/></div>
                    <h3 className='descrição' style={{color: '#FAFAFA'}}>{task.Description}</h3></div>}
                  </div>
                <button className='btn-before-dark' style={navigateBefore(task.id)} onClick={() => handleMoveTaskFeito(task.id, 'Em andamento')}><div className='navegate-before'><MdNavigateBefore/></div></button>
                <button className='btn-next-dark' style={navigateNext2(task.id)} onClick={() => handleMoveTaskFeito(task.id, 'A fazer')}><div className='navegate-next' style={{color:'#3D3D3D'}}><MdReplay/></div></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>       
      </div>
      <div className='bolinhas-mobile'>
                <div className='bolinhas'></div>
                <div className='bolinhas' style={{backgroundColor:'#C4C4C4'}}></div>
                <div className='bolinhas' style={{backgroundColor:'#C4C4C4'}}></div>
      </div>
      <span className='navegate-before-mobile' style={{marginLeft: '116px'}}><MdNavigateNext/></span>
      </div>     
    <footer style={{background :' #111111'}}>
      <Footer/>
    </footer>
      </div>
    </>
  )
}

export default kanbanDark
