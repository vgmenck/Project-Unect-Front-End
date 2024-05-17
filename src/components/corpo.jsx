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
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ModalMobile from './modalMobile';

const url = "http://localhost:3000/Tasks"

const corpo = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModalMobile, setOpenModalMobile] = useState(false);
    const [botaoInvisivel, setBotaoInvisivel] = useState(false);
    const [showLess, setShowLess] = useState(false);
    const [showMenu, setShowMenu] = useState({});
    const [showDescription, setShowDescription] = useState({});
    const [activeButton, setActiveButton] = useState(null);
    const [slidesPerView, setSlidesPerView] = useState("");
    const [pagination, setPagination] = useState ("");
    const [isExpanded, setIsExpanded] = useState(false);
    const {Title, setTitle, Description, setDescription, Status, setStatus} = useContext(CounterContext);
    const [tasks, setTasks] = useState([]);
    const [aFazerTask, setAFazerTask] = useState([]);
    const [emAndamentoTask, setEmAndamentoTask] = useState([]);
    const [feitoTask, setFeitoTask] = useState([]);
    const[tamanhoTela, setTamanhoTela] = useState({
      largura: window.innerWidth,
      altura: window.innerHeight,
    });
    
    useEffect(() => {
      const handleResize = () => {
        setTamanhoTela({
          largura: window.innerWidth,
          altura: window.innerHeight,
        });
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
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

    
  const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/Tasks');
        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();


        const afazerTasks = data.filter(task => task.Status === 'A fazer');
        const emAndamentoTasks = data.filter(task => task.Status === 'Em andamento');
        const feitoTasks = data.filter(task => task.Status === 'Feito');

        setAFazerTask(afazerTasks);
        setEmAndamentoTask(emAndamentoTasks);
        setFeitoTask(feitoTasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
  };


  const handleMoveTaskAfazer = async (taskId, newStatus, title, description) => {
    try {
        const response = await fetch(`http://localhost:3000/Tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Status: newStatus, Title: title, Description: description })
        });

        if (!response.ok) {
            throw new Error('Failed to move task');
        }

        await fetchData(); 
    } catch (error) {
        console.error('Error moving task:', error);
    }
  };

  const handleMoveTaskEmAndamento = async (taskId, newStatus, title, description) => {
    try {
      const response = await fetch(`http://localhost:3000/Tasks/${taskId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ Status: newStatus, Title: title, Description: description })
      });

      if (!response.ok) {
          throw new Error('Failed to move task');
      }

      await fetchData(); 
  } catch (error) {
      console.error('Error moving task:', error);
  }
  };

  const handleMoveTaskFeito = async (taskId, newStatus, title, description) => {
    try {
      const response = await fetch(`http://localhost:3000/Tasks/${taskId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ Status: newStatus, Title: title, Description: description })
      });

      if (!response.ok) {
          throw new Error('Failed to move task');
      }

      await fetchData(); 
  } catch (error) {
      console.error('Error moving task:', error);
  }
  };

  const handleDeleteTask = async (taskId) => {
    try {
        const response = await fetch(`http://localhost:3000/Tasks/${taskId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete task');
        }

        await fetchData(); 
    } catch (error) {
        console.error('Error deleting task:', error);
    }
  };

    const styleBoxTask = (taskId) => ({
        width: isExpanded[taskId]  ? '253px' : '253px',
        height: isExpanded[taskId] ? '116px' : '74px', 
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '14px',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
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

      const TaskComponent = ({ task, styleBoxTask, showMenu, handleClickBotao, handleDeleteTask, showDescription, handleDescription, textLerDescricao, styleExpandindMore, descricaoCompleta, navigateNext, handleMoveTaskAfazer, handleMoveTaskEmAndamento, handleMoveTaskFeito, navigateBefore, navigateNext2}) => (

        <div key={task.id}>
          <div style={styleBoxTask(task.id)}>
            <div className='posicionamento'>
              <h1 className='text-tasks'>{task.Title}</h1>
              <div className='rectangle-component'>
                <div className={`more-vert-menu ${showMenu[task.id] ? 'open' : ''}`}>
                  <button className='more-vert' onClick={() => handleClickBotao(task.id)}><MdMoreVert/></button>
                  {showMenu[task.id] && <button className='delete-rectangle' onClick={() => handleDeleteTask(task.id)}>
                    <div id='icon-delete'><MdDeleteOutline/></div>
                    <div id='text-delete'>Excluir</div>
                  </button>}
                </div>
              </div>
            </div>
            <div className='organization'>
              <h2 className='desc-tasks' style={textLerDescricao (task.id)}>Ler descrição</h2>
              <div className={`expand-more-menu ${showDescription[task.id] ? "open" : ""}`}>
                  <button style={styleExpandindMore (task.id)} className='expanding-more' onClick={() => handleDescription(task.id)}><MdExpandMore/></button>
                    {showDescription[task.id] && <div style={descricaoCompleta (task.id)}>
                    <h2 className='desc-tasks' style={{ color:'#002D6C', width: '118px'}}>Esconder descrição</h2>
                    <button className='expanding-less' onClick={() => handleDescription(task.id)}><MdExpandLess/></button>
                    <h3 className='descrição'>{task.Description}</h3></div>}
                </div>
             {task.Status === 'A fazer' &&(
                 <button className='btn-next' style={navigateNext(task.id)} onClick={() => handleMoveTaskAfazer(task.id, 'Em andamento',task.Title, task.Description )}><div className='navegate-next' ><MdNavigateNext/></div></button>
             )} 
             {task.Status === 'Em andamento' &&(
                  <button className='btn-before' style={navigateBefore(task.id)} onClick={() => handleMoveTaskEmAndamento(task.id, 'A fazer',task.Title, task.Description)}><div className='navegate-before'><MdNavigateBefore/></div></button>
                  
             )}
             {task.Status === 'Em andamento' &&(
              <button className='btn-next' style={navigateNext2(task.id)} onClick={() => handleMoveTaskEmAndamento(task.id, 'Feito',task.Title, task.Description)}><div className='navegate-next' ><MdNavigateNext/></div></button>
             )}
              {task.Status === 'Feito' &&(
              <button className='btn-before' style={navigateBefore(task.id)} onClick={() => handleMoveTaskFeito(task.id, 'Em andamento',task.Title, task.Description)}><div className='navegate-before'><MdNavigateBefore/></div></button>
             )}
             {task.Status === 'Feito' &&(
              <button className='btn-next' style={navigateNext2(task.id)} onClick={() => handleMoveTaskFeito(task.id, 'A fazer',task.Title, task.Description)}><div className='navegate-next' ><MdReplay/></div></button>
             )}
            </div>
          </div>
        </div>      
        )


  return (
    <>
      <div className='container-global'>
      <nav><Nav/></nav>
            <ModalMobile isOpen={openModalMobile}  setModalOpenMobile={() => setOpenModalMobile(!openModalMobile)}>
                            Conteúdo do modal
            </ModalMobile>
            {tamanhoTela.largura > 426 ?(
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
            ):(
                <div className="retangulo-frase-do-dia" onClick={() => setOpenModalMobile(true)}>
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
            )}
              
          
            {tamanhoTela.largura > 426 ?(
              <div className="kanban">
              <div className='aFazer'>
                 <div className='itens-kanban'>
                 <h1 className='text-aFazer'>A fazer</h1>
                 <button className='btn-aFazer' style={{background : 'none'}} onClick={() => setOpenModal(true)}><div id='icon-add'><MdAdd/></div></button>
                 <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                             Conteúdo do modal
                 </Modal>
             </div>
             <div className='fundo-cinza'>
                         <div className='frame'>
                            {aFazerTask.map(task => (
                              <TaskComponent key={task.id} task={task} styleBoxTask={styleBoxTask} showMenu={showMenu} handleClickBotao={handleClickBotao} handleDeleteTask={handleDeleteTask} textLerDescricao={textLerDescricao} showDescription={showDescription} styleExpandindMore={styleExpandindMore} handleDescription={handleDescription} descricaoCompleta={descricaoCompleta} navigateNext={navigateNext} navigateBefore={navigateBefore}  handleMoveTaskAfazer={handleMoveTaskAfazer} handleMoveTaskEmAndamento={handleMoveTaskEmAndamento} handleMoveTaskFeito={handleMoveTaskFeito} navigateNext2={navigateNext2}  />
                            ))}
                         </div>
                     </div>
               </div>
               
               <div className='em-andamento'>
             <h1 className='text-aFazer' style={{whiteSpace: 'nowrap'}}>Em andamento</h1>
             <div className='fundo-cinza'style={{marginTop: '8px' }}>
                 <div className='frame'>
                 {emAndamentoTask.map((task) => (
                  <TaskComponent key={task.id} task={task} styleBoxTask={styleBoxTask} showMenu={showMenu} handleClickBotao={handleClickBotao} handleDeleteTask={handleDeleteTask} textLerDescricao={textLerDescricao} showDescription={showDescription} styleExpandindMore={styleExpandindMore} handleDescription={handleDescription} descricaoCompleta={descricaoCompleta} navigateNext={navigateNext} navigateBefore={navigateBefore} handleMoveTaskAfazer={handleMoveTaskAfazer} handleMoveTaskEmAndamento={handleMoveTaskEmAndamento} handleMoveTaskFeito={handleMoveTaskFeito} navigateNext2={navigateNext2}  />
                 ))}
                 </div>
                 
             </div>
             </div>

             <div className='feito'>
               <h1 className='text-aFazer'>Feito</h1>
             <div className='fundo-cinza'style={{ marginTop: '8px'}}>
                 <div className='frame'>
                 {feitoTask.map((task) => (
                  <TaskComponent key={task.id} task={task} styleBoxTask={styleBoxTask} showMenu={showMenu} handleClickBotao={handleClickBotao} handleDeleteTask={handleDeleteTask} textLerDescricao={textLerDescricao} showDescription={showDescription} styleExpandindMore={styleExpandindMore} handleDescription={handleDescription} descricaoCompleta={descricaoCompleta} navigateNext={navigateNext} navigateBefore={navigateBefore} handleMoveTaskAfazer={handleMoveTaskAfazer} handleMoveTaskEmAndamento={handleMoveTaskEmAndamento} handleMoveTaskFeito={handleMoveTaskFeito} navigateNext2={navigateNext2}  />
                 ))}
                 </div>
             </div>
           </div>
           </div>

              
            ):(
                <div className="kanban" >
              <span className='navegate-before-mobile'><MdNavigateBefore/></span>
              <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                                Conteúdo do modal
                    </Modal>
              <Swiper pagination={true}   style={{width: '300px', height: '434px'}}>
              <SwiperSlide>  
                  <div className='aFazer'>
                    <div className='itens-kanban'>
                    <h1 className='text-aFazer'>A fazer</h1>
                    <button className='btn-aFazer' style={{background : 'none'}} onClick={() => setOpenModal(true)}><div id='icon-add'><MdAdd/></div></button>
                </div>
                <div className='fundo-cinza'>
                            <div className='frame'>
                                {aFazerTask.map(task => (
                                    <TaskComponent key={task.id} task={task} styleBoxTask={styleBoxTask} showMenu={showMenu} handleClickBotao={handleClickBotao} handleDeleteTask={handleDeleteTask} textLerDescricao={textLerDescricao} showDescription={showDescription} styleExpandindMore={styleExpandindMore} handleDescription={handleDescription} descricaoCompleta={descricaoCompleta} navigateNext={navigateNext} navigateBefore={navigateBefore} handleMoveTaskAfazer={handleMoveTaskAfazer} handleMoveTaskEmAndamento={handleMoveTaskEmAndamento} handleMoveTaskFeito={handleMoveTaskFeito} navigateNext2={navigateNext2}  /> 
                                ))}
                            </div>
                        </div>
                  </div>

              </SwiperSlide>
              
              <SwiperSlide>
              <div className='em-andamento'>
                <h1 className='text-aFazer' style={{whiteSpace: 'nowrap'}}>Em andamento</h1>
                <div className='fundo-cinza'style={{marginTop: '8px' }}>
                    <div className='frame'>
                    {emAndamentoTask.map((task) => (
                            <TaskComponent key={task.id} task={task} styleBoxTask={styleBoxTask} showMenu={showMenu} handleClickBotao={handleClickBotao} handleDeleteTask={handleDeleteTask} textLerDescricao={textLerDescricao} showDescription={showDescription} styleExpandindMore={styleExpandindMore} handleDescription={handleDescription} descricaoCompleta={descricaoCompleta} navigateNext={navigateNext} navigateBefore={navigateBefore} handleMoveTaskAfazer={handleMoveTaskAfazer} handleMoveTaskEmAndamento={handleMoveTaskEmAndamento} handleMoveTaskFeito={handleMoveTaskFeito} navigateNext2={navigateNext2}  />
                    ))}
                    </div>
                    
                </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className='feito'>
                  <h1 className='text-aFazer'>Feito</h1>
                <div className='fundo-cinza'style={{marginTop: '8px'}}>
                    <div className='frame'>
                    {feitoTask.map((task) => (
                           <TaskComponent key={task.id} task={task} styleBoxTask={styleBoxTask} showMenu={showMenu} handleClickBotao={handleClickBotao} handleDeleteTask={handleDeleteTask} textLerDescricao={textLerDescricao} showDescription={showDescription} styleExpandindMore={styleExpandindMore} handleDescription={handleDescription} descricaoCompleta={descricaoCompleta} navigateNext={navigateNext} navigateBefore={navigateBefore} handleMoveTaskAfazer={handleMoveTaskAfazer} handleMoveTaskEmAndamento={handleMoveTaskEmAndamento} handleMoveTaskFeito={handleMoveTaskFeito} navigateNext2={navigateNext2}  />
                    ))}
                    </div>
                </div>
              </div>
              </SwiperSlide>
          </Swiper>
          <span className='navegate-before-mobile'><MdNavigateNext/></span>
          </div>
            )}
            
        
            <footer>
                <Footer/>
            </footer>
      </div>
            
    </>
  )
}


export default corpo