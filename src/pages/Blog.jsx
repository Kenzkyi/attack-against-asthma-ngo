import "../style/Blog.css"
import blog1 from '../assets/public/home-fourth-pic.png'
import blog2 from '../assets/public/blog-second-pic.png'

const Blog = () => {
  return (
   <div className='Body'>
    <div className='bodywrap'>
         <div className='textwrap'>
             <p>
              Know about attack against asthma
             </p>
             <p className='mobileviewText1'>Blog Updates</p>
             <h1 className='mobileviewText'> 
              The <strong>Stories</strong> We Uncover are Visible
             </h1>
             <h1>
              We are non governmental oraganisation
             </h1>
         </div>
         <div className='imagewrap'>
          <div className='imagewrap1'>
            <div className='img'>
            <img src={blog1}/>
            </div>
            <div className='textt'>
            <h1>
              #AttackAgainstAsthma in the university of ibadan
            </h1>
            </div>
            <div className='text1'>
             <h1>
              on the 22nd of september 2023, Temitope Omosebi initiated a aheslth charity Program 
              tagged AttackAggainstAsthema by donating
              50 inhalers to asthemati student in the University of Ibadan 
              The team that carried the program included the above named individual and some 
              of our <strong>VOLUNTEERS....</strong>
             </h1>
            </div>
            <div className='btn'>
                <span>Learn more</span>
            </div>
          </div>
          <div className='imagewrap3'>
          <div className='img'>
            <img src={blog1} />
            </div>
            <div className='textt'>
            <h1>
              #AttackAgainstAsthma in the university of ibadan
            </h1>
            </div>
            <div className='text1'>
             <h1>
              on the 22nd of september 2023, Temitope Omosebi initiated a aheslth charity Program 
              tagged AttackAggainstAsthema by donating
              50 inhalers to asthemati student in the University of Ibadan 
              The team that carried the program included the above named individual and some 
              of our <strong>VOLUNTEERS....</strong>
             </h1>
            </div>
            <div className='btn'>
                <span>Learn more</span>
            </div>
          </div>
          <div className='imagewrap2'>
          <div className='img'>
            <img src={blog1} />
            </div>
            <div className='textt'>
            <h1>
              #AttackAgainstAsthma in the university of ibadan
            </h1>
            </div>
            <div className='text1'>
             <h1>
              on the 22nd of september 2023, Temitope Omosebi initiated a aheslth charity Program 
              tagged AttackAggainstAsthema by donating
              50 inhalers to asthemati student in the University of Ibadan 
              The team that carried the program included the above named individual and some 
              of our <strong>VOLUNTEERS.....</strong>
             </h1>
            </div>
            <div className='btn'>
                <span>Learn more</span>
            </div>
          </div>
         </div>
    </div>
    <div className='bodywrap1'>
    <div className='imagewrap'>
          <div className='imagewrap1'>
            <div className='img'>
            <img src={blog1} />
            </div>
            <div className='textt'>
            <h1>
              #AttackAgainstAsthma in the university of ibadan
            </h1>
            </div>
            <div className='text1'>
             <h1>
              on the 22nd of september 2023, Temitope Omosebi initiated a aheslth charity Program 
              tagged AttackAggainstAsthema by donating
              50 inhalers to asthemati student in the University of Ibadan 
              The team that carried the program included the above named individual and some 
              of our <strong>VOLUNTEERS,.....</strong>
             </h1>
            </div>
            <div className='btn'>
                <span>Learn more</span>
            </div>
          </div>

          <div className='imagewrap3'>
          <div className='img'>
            <img src={blog1} />
            </div>
            <div className='textt'>
            <h1>
              #AttackAgainstAsthma in the university of ibadan
            </h1>
            </div>
            <div className='text1'>
             <h1>
              on the 22nd of september 2023, Temitope Omosebi initiated a aheslth charity Program 
              tagged AttackAggainstAsthema by donating
              50 inhalers to asthemati student in the University of Ibadan 
              The team that carried the program included the above named individual and some 
              of our <strong>VOLUNTEERS......</strong>
             </h1>
            </div>
            <div className='btn'>
                <span>Learn more</span>
            </div>
          </div>

          <div className='imagewrap2'>
          <div className='img'>
            <img src={blog1} />
            </div>
            <div className='textt'>
            <h1>
              #AttackAgainstAsthma in the university of ibadan
            </h1>
            </div>
            <div className='text1'>
             <h1>
              on the 22nd of september 2023, Temitope Omosebi initiated a aheslth charity Program 
              tagged AttackAggainstAsthema by donating
              50 inhalers to asthemati student in the University of Ibadan 
              The team that carried the program included the above named individual and some 
              of our <strong>VOLUNTEERS......</strong>
             </h1>
            </div>
            <div className='btn'>
                <span>Learn more</span>
            </div>
          </div>
         </div>
</div>
     <div className='bodywrap2'>
     <div className='bodywrapper' >
    <div className='bodywrapper2'>
      <p>Health Tips</p>
      <h1>Herere 10 Things To Know As An <strong>Asthmatics</strong></h1>
      <h2>navigating with certain health conditiond might
        seems impossible and biarsed but we have gathered sreamlined information
        and tips for you to effectively scale through............ 

      </h2>
      <button>Learn more</button>
    </div>
     </div>
     <div className='bodywrapper1' >
  <div className='manshowing'>
  <img src={blog2} />
  </div>
     </div>
     </div>

     <div className="content" style={{backgroundColor:'green'}}>
    <div className="Textwrap">
    <p>Health Tips</p>
      <h1>Herere 10 Things To Know As An <strong>Asthmatics</strong></h1>
      <h2>navigating with certain health conditiond might
        seems impossible and biarsed but we have gathered sreamlined information
        and tips for you to effectively scale through............ 

      </h2>
        <button className='mobileBtn'>Learn more</button>
    </div>
</div>
   </div>

  )
}

export default Blog

