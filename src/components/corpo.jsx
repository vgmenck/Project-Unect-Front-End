import './corpo.css'
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




const corpo = () => {

  return (
    <>
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
                        <button className='btn-aFazer'><div id='icon-add'><MdAdd/></div></button>
                </div>
                <div className='fundo-cinza'>
                    <div className='frame'>
                        <div className='task'>
                            <h1 className='text-tasks'>Pagar conta de luz</h1>
                            <div className='more-vert' style={{color: 'blue'}}><MdMoreVert/></div>
                            <div className='organization'>
                                <h2 className='desc-tasks' style={{marginTop: '10px'}}>Ler descrição</h2>
                                <div className='expanding-more'><MdExpandMore/></div>
                                <div className='delete-rectangle'>
                                    <div id='icon-delete'><MdDeleteOutline/></div>
                                    <div id='text-delete'>Excluir</div>
                                </div>
                            </div>
                        </div>
                        <div className='text-more-description'>
                            <h1 className='text-tasks'>Fazer compras no mercado</h1>
                            <div className='more-vert'><MdMoreVert/></div>
                            <h2 className='desc-tasks' style={{ color:'#002D6C', width: '118px'}}>Esconder descrição</h2>
                            <div className='expanding-less'><MdExpandLess/></div>
                            <div className='organization'>
                                <h3 className='descrição'>Comprar batata, cenoura,<br /> feijão, alho, arroz e pipoca.</h3>
                                <button className='btn-next'><div className='navegate-next'><MdNavigateNext/></div></button>
                            </div>
                        </div>
                        <div className='task'>
                            <h1 className='text-tasks'>Fazer manicure</h1> 
                            <div className='more-vert'><MdMoreVert/></div>
                            <div className='organization'>
                                <h2 className='desc-tasks' style={{marginTop: '10px', marginBottom: '13px'}}>Ler descrição</h2>
                                <div className='expanding-more'><MdExpandMore/></div>
                                <button className='btn-next' style={{marginLeft: '115px', marginTop:'10px'}}><div className='navegate-next' ><MdNavigateNext/></div></button>
                            </div>   
                        </div>
                        <div className='task'>
                            <h1 className='text-tasks'>Fazer manicure</h1> 
                            <div className='more-vert'><MdMoreVert/></div>
                            <div className='organization'>
                                <h2 className='desc-tasks' style={{marginTop: '10px', marginBottom: '13px'}}>Ler descrição</h2>
                                <div className='expanding-more'><MdExpandMore/></div>
                                <button className='btn-next' style={{marginLeft: '115px', marginTop:'10px'}}><div className='navegate-next' ><MdNavigateNext/></div></button>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        
            <div className='em-andamento'>
                <h1 className='text-aFazer' style={{whiteSpace: 'nowrap'}}>Em andamento</h1>
                <div className='fundo-cinza'style={{overflow: 'hidden',marginTop: '8px' }}>
                    <div className='task' style={{marginLeft: '20px', marginTop:'20px'}}>
                            <h1 className='text-tasks'>Fazer manicure</h1> 
                            <div className='more-vert'><MdMoreVert/></div>
                            <div className='organization'>
                                <h2 className='desc-tasks' style={{marginTop: '10px', marginBottom: '13px'}}>Ler descrição</h2>
                                <div className='expanding-more'><MdExpandMore/></div>
                                <button className='btn-before'><div className='navegate-before' ><MdNavigateBefore/></div></button>
                                <button className='btn-next' style={{marginLeft: '6px', marginTop:'10px'}}><div className='navegate-next' ><MdNavigateNext/></div></button>
                            </div>   
                    </div>  
                </div>
            </div>

            <div className='feito'>
            <h1 className='text-aFazer'>Feito</h1>
                <div className='fundo-cinza'style={{overflow: 'hidden', marginTop: '8px'}}>
                    <div className='task' style={{marginLeft: '20px', marginTop:'20px'}}>
                            <h1 className='text-tasks' style={{textDecorationLine: 'line-through'}}>Fazer manicure</h1> 
                            <div className='more-vert'><MdMoreVert/></div>
                            <div className='organization'>
                                <h2 className='desc-tasks' style={{marginTop: '10px', marginBottom: '13px'}}>Ler descrição</h2>
                                <div className='expanding-more'><MdExpandMore/></div>
                                <button className='btn-before'><div className='navegate-before' ><MdNavigateBefore/></div></button>
                                <button className='btn-next' style={{marginLeft: '6px', marginTop:'10px'}}><div className='navegate-next' ><MdReplay/></div></button>
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