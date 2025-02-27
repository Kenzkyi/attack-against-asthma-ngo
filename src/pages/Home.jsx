import '../styles/homepage.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";







const Home = () => {
  return (
    <div className='HomePageWrapper'>
      <div className='Firstbg'>
        <img src="src/assets/corner-flare.png" alt="" style={{ width: "800px"}}/>
        <div className='FirstbgColorDim'>
       <div className='FirstbgWriteup'>
       <span>Ensure healthy life and promote well being: Prevent premature mortality </span>
       <h2>Breathing Easier, One <span style={{color: "orangered", fontSize: '32px'}}>Inhaler </span> <br />At A Time</h2>
       <p> <span style={{color: "orangered", fontSize: '18px'}}> #attackagainstasthma</span> is dedicated to bridging the gap for individuals who <br />
        needs inhalers but cannot afford them, ensuring everyone has the chance <br />
        to breathe freely and live healthier lives.</p>
        <div className='Donatebuttonwrapper'>
          <button className='Donatebutton'>Donate</button>
          <div className='DonatebuttonApply'>Apply as  <IoIosArrowDown /> <IoIosArrowUp /></div>
        </div>
       </div>
       <div className='FirstbgFooter'>
        <p>Over 700 inhalers distributed in 2024</p> <hr /> <p>2000+ to be distributed in 2025</p>
        
       </div>
      </div>
      </div>
      <div className='Seconddiv'>
        <div className='SeconddivWrapper'>
          <div className='ImageHolder'>
            <img src="" alt=""  className='Image2'/>
          </div>
          <div className='TextwrapperSeconddiv'>
            <p><hr />Know About Us</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
