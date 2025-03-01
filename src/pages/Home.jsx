/* eslint-disable no-irregular-whitespace */
import "../style/Home.css"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegDotCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { navigate} from "react-router-dom";






const Home = () => {

  const [dropDown, setDropDown] = useState(false)

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  }
    const [ toggleDown, setToggleDown ] = useState(false)

    const handleTgoggleDrop = () => {
      setToggleDown(!toggleDown)
    }
  
  return (
    <div className='HomePageWrapper'>
      <div className='Firstbg'>
        <img src="src/assets/public/corner-flare.png" alt="" style={{ width: "100%"}}/>
        <div className='FirstbgColorDim'>
       <div className='FirstbgWriteup'>
       <span>Ensure healthy life and promote well being: Prevent premature mortality </span>
       <h2>Breathing Easier, One <b style={{color: "orangered",}} className="spnheader">Inhaler </b> <br />At A Time</h2>
       <p> <span className="attackagainstCancerText" > #attackagainstasthma</span> is dedicated to bridging the gap for individuals who <br />
        needs inhalers but cannot afford them, ensuring everyone has the chance <br />
        to breathe freely and live healthier lives.</p>
        <div className='Donatebuttonwrapper'>
          <button className='Donatebutton'>Donate</button>
          <div className='DonatebuttonApply' onClick={toggleDropDown}>Apply as 
              <span> { !dropDown ?  <IoIosArrowDown  size={20}/>: <IoIosArrowUp size={20} /> }</span></div>
              {dropDown && (
                <div className='dropDown'>
                  <h4 onClick={()=>navigate('/asthmatic-student')}>Asthetic Student</h4>
                  <h4 onClick={()=>navigate('/volunteer')}>Volunteer</h4>
                </div>
                
              )}
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
            <img src="src/assets/public/home-second-pic.jpg" alt=""  className='Image2'/>
          </div>
          <div className='TextwrapperSeconddiv'>
            <div className='textright'>
            <p><hr />Know About Us</p>
            <h1>What We Do At Attack <br /> Against <span className="AsthmaText">Asthma</span> </h1>
            <h3>We provide healthcare materials for asthmatic students and socioe 
             conomic marginalized groups in Nigeria to promote good health amon
             g the patients and reduce the risk of asthma, premature mortality and
              asthma communities.</h3>
              <button className='Donatebutton'>Donate</button>
            </div>
          </div>
        </div>
      </div>
      <div className='Thirddivwrapper'>
        <div className='Thirddiv'>
         <div className='RightTexthld'>
            <div className='RightTextDiv'>
             <p> <hr />Our Services </p>
             <h1>Our Initiative is motivated by  <br /><span className="SDGText">SDG 3. Target 4</span> 
             </h1>
             <div className='dive'> <FaRegDotCircle  style={{color: "orangered", fontSize: '18px'}}/>      To provide free asthmatic medications for students across tertiary <br /> institutions in Nigeria
             </div>
             <div className='dive'> <FaRegCircle  style={{color: "orangered", fontSize: '18px'}}/>      To proffer free asthma medications to socioeconomically <br /> marginalized groups, communities and individuals in Nigeri.
             </div>
             <div className='dive'> <FaRegDotCircle  style={{color: "orangered", fontSize: '18px'}}/>      To improve access to healthcare among socioeconomically <br /> disadvantaged through awareness, free medication and health promotion activities.</div>
             <button className='LearnMorebtn' onClick={()=>navigate('/about-us')}>Learn More  <FaArrowRight /></button>
            </div>
         </div>
         <div className='LeftImg'>
          <img src="src/assets/public/home-third-pic.jpg" alt=""  className='thirdimage'/>
         </div>
        </div>
      </div>
      <div className='fourtsectionWrapper'>
        <div className='fourtsection'>
           <div className='uppersection'>
            <p> <hr /> PROJECTS WE HAVE DONE </p>
            <h2>Breathing Easy, Thriving <br /> Together</h2>
           </div>
           <div className='downsection'>
            <div className='downsectionbox'>
              <div className='box1'>
                <img src="src/assets/public/home-fourth-pic.png" alt=""  className='imagebox1'/>
              </div>
              <div className='box2'>
                <div className='box11'>
                #AttackAgainetAsthma in the University of lbadan
                </div>
                <div className='box12'>
                We want to organize free or low-cost asthma 
                screenings in program tagged Attack-Against-Asthma by
                 donating 40 inhalers to asthmatic students in the 
                 University of Ibadan. The team thatll carry out the 
                 program includes Obedina Ayomide, Saka Ayeni and some 
                 of our <span style={{color: "orangered", fontSize: '11px'}}>volunteers...</span>

                </div>
                <button className='LearnMorebtn'>Learn More</button>
              </div>
            </div>
            <div className='downsectionbox'>
              <div className='box1'>
                <img src="src/assets/public/home-fifth-pic.jpg" alt=""  className='imagebox1'/>
              </div>
              <div className='box2'>
                <div className='box11'>
                Asthma Management Education in Schools
                & Inhaler Access and Support.                </div>
                <div className='box12'>
                This project is to provide asthma education workshop and training for students,
                 lecturers, and school authorities of  <span style={{color: "orangered", fontSize: '11px'}}>UNILORIN</span>, teach them how to recognize asthma symptoms. 
                 use inhalers properly, and respond in emergencies. The goal is to create a supportive and safe 
                 environment for students.
                 

                </div>
                <button className='LearnMorebtn'>Learn More</button>
              </div>
            </div>
            <div className='downsectionbox'>
              <div className='box1'>
                <img src="src/assets/public/home-sixth-pic.jpg" alt=""  className='imagebox1'/>
              </div>
              <div className='box2'>
                <div className='box11'>
                Research and Advocacy for Asthma-Friendly Policies.
                </div>
                <div className='box12'>
                An advocacy project that all focus on
                        influencing local governments and institutions to adopt policies that
                 will improve air quality. reduce pollution, and ensure better living conditions for asthma sufferers in 
                  <span style={{color: "orangered", fontSize: '11px'}}>Obafemi
                  Awolowo university </span>

                 

                </div>
                <button className='LearnMorebtn'>Learn More</button>
              </div>
            </div>
            <div className='downsectionbox'>
              <div className='box1'>
                <img src="src/assets/public/home-seventh-pic.jpg" alt=""  className='imagebox1'/>
              </div>
              <div className='box2'>
                <div className='box11'>
                Research and Advocacy for Asthma-Friendly Policies.
                </div>
                <div className='box12'>
                An advocacy project will focus on influencing local governments and institutions 
                to adopt policies that improve air quality, reduce pollution, and ensure better living 
                conditions for asthma sufferers in <span style={{color: "orangered", fontSize: '11px'}}>Obafemi Awalawa University</span>
                . This includes lobbying for better
                 access to affordable asthma medication.
                </div>
                <button className='LearnMorebtn'>Learn More</button>
              </div>
            </div>
            
           </div >
        </div>
      </div>
      <div className='ourpatners'>
        <div className='ourpartnerup'>
          <div className='partnertext'>
            <h4>Our Partners</h4>
            <h1>United For A Breath Of Hope</h1>
          </div>
          <div className='partnerlog'>
            <div className='imgpartners'>
              <img src="src/assets/public/home-patners/download 2.png" alt="" className='partnerslogos'/>
            </div>
            <div className='imgpartners'>
              <img src="src/assets/public/home-patners/download 3.png" alt="" className='partnerslogos'/>
            </div>
            <div className='imgpartners'>
              <img src="src/assets/public/home-patners/download 4.png" alt="" className='partnerslogos'/>
            </div>
            <div className='imgpartners'>
              <img src="src/assets/public/home-patners/download 5.png" alt="" className='partnerslogos'/>
            </div>
            <div className='imgpartners'>
              <img src="src/assets/public/home-patners/download 6.png" alt="" className='partnerslogos'/>
            </div>
            <div className='imgpartners'>
              <img src="src/assets/public/home-patners/download 7.png" alt="" className='partnerslogos'/>
            </div>
            <div className='imgpartners'>
              <img src="src/assets/public/home-patners/download 8.png" alt="" className='partnerslogos'/>
            </div>
          </div>
        </div>
        <div className='ourpartnerdown'>
          <div className='HWSODonations1'>
            <h2><hr />How Spend Your Donations <hr /></h2>
            <h5>Nigeria is among the highest ranking African countries in terms of the prevalence of asthma. <br />
            However, more than half of asthma patients in Nigeria do not have access to the appropriate <br /> asthma care and knowledge</h5>
          </div>
          <div className='HWSODonations2'>
            <div className='HWSDCard'>
              <div className='CardImage'>
                <img src="src/assets/public/home-eight-pic.jpg" alt=""  className='CardImfg' />
              </div>
              <div className='CardText'>
                <h2>Inhaler Distribution In 2024</h2>
                <h5>Over 700+ Inhalers were distributed in 2024 to 15 universities in Nigeria. We had a total of 52 donors and 34 new volunteers to achieve this great goal.
                A well detailed account of these events can be found here...</h5>
              </div>
              <div className='CardFooter'>
              <FaFacebook  size={30} style={{color: "Blue"}}/>
              23rd October, 2024 <br />
              #attackagainstasthma
              <h4>See More</h4>
              </div>
            </div>
            <div className='HWSDCard'>
              <div className='CardImage'>
                <img src="src/assets/public/home-nine-pic.jpg" alt=""  className='CardImfg' />
              </div>
              <div className='CardText'>
                <h2>Inhaler Distribution In 2024</h2>
                <h5>On the 22nd of September 2023, Temitope Omosebi initiated a health charity program tagged AttackAgainstAsthma by donating 40 inhalers to asthmatic students in the University of Ibadan. The team that carried the program included the above named individual and some
                of our <span style={{color: "orangered", fontSize: '15px', textDecoration: "underline"}}>
                  VOLUNTEERS.</span></h5>
              </div>
              <div className='CardFooter'>
              <FaFacebook  size={30} style={{color: "Blue"}}/>
              23rd October, 2024 <br />
              #attackagainstasthma
              <h4>See More</h4>
              </div>
            </div>
            <div className='HWSDCard'>
              <div className='CardImage'>
                <img src="src/assets/home-tenth-pic.jpg" alt=""  className='CardImfg' />
              </div>
              <div className='CardText'>
                <h2>Inhaler Distribution In 2024</h2>
                <h5>We visited 10 other school for asthma campaign tagged #attackagainstasthma. The movement was led by the founder,<span style={{color: "orangered", fontSize: '15px',}}> Temitope Omosebi</span>  with our volunteers. 20% of the donation was used for campaigns for the year 2024 which yielded good result in alignment with the our goals.</h5>
              </div>
              <div className='CardFooter'>
              <FaFacebook  size={30} style={{color: "Blue"}}/>
              23rd October, 2024 <br />
              #attackagainstasthma
              <h4>See More</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className='homefooter'>
          <div className='upfooter'>
            <div className='upfooterwrapper'>

            <h4>UpcComing Event And Affairs <hr /></h4>
            <div className='uperfooterbox'>
               <div className='FooterBox'>
                <div className='FB1'>
                  <h1>13</h1>
                  <p>Apr</p>
                </div>
                <div className='FB2'>
                  <h5>NEXT EVENTS<hr /></h5>
                  <h3>Asthmatic Awareness WorkShop with Teenegars And Students </h3>
                </div>
                <div className='FB3'> <FiArrowRightCircle /></div>
               </div>
               <div className='FooterBox1'>
                <div className='FB1'>
                  <h1>13</h1>
                  <p>Apr</p>
                </div>
                <div className='FB2'>
                  <h5>NEXT EVENTS<hr /></h5>
                  <h3>Asthmatic Awareness WorkShop with Teenegars And Students </h3>
                </div>
                <div className='FB3'> <FiArrowRightCircle /></div>
               </div>
            </div>
            </div>
          </div>
          <div className='downfooter'>
            <div className='downfooterdim'>
              <div className='downfootertext'>
                <h1>You Can Contribute To A Society That Is Asthma Aware
                   And Providing Inhalers For Asthmatic Student. </h1>
                  <div className='btnandselect'>
                    <button className='Donatefooterbtn' onClick={()=> navigate('/donate')}>Donate</button>
                    <div className="selectbtn" onClick={handleTgoggleDrop}>
                       Apply as 
                   <span> { !toggleDown ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp /> } </span> </div>
                   { toggleDown && (
                    <div className='Toggledrop2'>
                      <h4 onClick={()=>navigate('/asthmatic-student')}>Asthmatic Students</h4>
                       <h4 onClick={()=>'/volunteer'}>Volunteer</h4>
                    </div>
                   )}
                  </div>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home