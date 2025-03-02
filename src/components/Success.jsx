import { useNavigate } from 'react-router-dom'
import '../style/Success.css'

const Success = () => {
  const nav = useNavigate()
  return (
    <div className='success'>
      <div className="success-holder">
        <nav>
            <h5>Success!</h5>
            <h6>Your message has been successfully sent.</h6>
            <p>Your message has been successfully sent. We appreciate you taking your time to contact us, and our team will get back to you as soon as possible</p>
            <button onClick={()=>nav('/')}>Return To Home</button>
        </nav>
      </div>
    </div>
  )
}

export default Success
