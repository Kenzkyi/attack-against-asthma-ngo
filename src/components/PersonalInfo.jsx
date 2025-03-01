import React,{useState} from 'react'
import "../style/PersonalInfo.css"

const PersonalInfo = ({setpage}) => {
    const [user, setUser] = useState({
         Name: "",
         Number: "",
        Address: "",
         Tnformation:"",
    });

      const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault()

        setpage("Select Amount")
        // .then((response) => {
        //     toast.success("successful!");
        //     setUser({ Name: "",  Number: "",  Address: "", Tnformation:"",});
        //     console.log(response)
        // })
        //     // Nav("/SelectAmount")
        //   .catch((error) => {
        //     toast.error(error.response?.data?.message || "Fill the empty input!");
        //   });
      };
    
  };

  return (
    <>
      <div className='Body'>
     <div className='InputDiv'>Your full Name
        <input className='InputStyle' type="Text" placeholder='full Name'
            value={user. Name}
          onChange={handleChange} 
        />
     </div>
     <div className='InputDiv'>Your Phone Number
        <input className='InputStyle' type="Text" placeholder=' Phone Number' 
          value={user. Number}
          onChange={handleChange} 
        />
     </div>
     <div className='InputDiv'>Address
        <input className='InputStyle' type="Text" placeholder='Address'
          value={user.Address}
          onChange={handleChange} 
        />
     </div>
     <div className='InputDiv'>Additional Tnformation
        <input className='InputStyle' type="Text" placeholder='Additional Tnformation' 
          value={user.Tnformation }
          onChange={handleChange} 
        />
     </div>
    <div className='ButtonDiv'>
    <div className='Button'  onClick={()=> setpage("Select Amount")}>Next</div>
    </div>
      </div>

      </>
  )
}

export default PersonalInfo