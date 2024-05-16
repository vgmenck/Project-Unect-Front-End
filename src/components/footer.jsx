import './footer.css'
import { MdFavorite} from 'react-icons/md';

const footer = () => {

  const handleUnect = () => {
    window.location.href = 'https://unect.com.br'; 
  }

  return (
    <>
      <div className='alinharfooter'>
        <div className='box-trainee' id='text-box-trainee'>© Processo de Trainee  <strong style={{cursor: 'pointer'}} onClick={handleUnect}> Unect Jr. </strong></div>
        <div className='alinhar-box'>
          <div className='box-feito-com-amor' id='text-feito-com-amor'>Feito com <span className='favorite'><MdFavorite/></span> por <strong>Vitor Menck</strong></div>
        </div>
        
      </div>
      
    </>
        
  )
}

export default footer