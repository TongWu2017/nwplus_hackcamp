
import React from 'react'; 
import {useNavigate} from "react-router-dom"
  
const Home = () => { 
  const navigate = useNavigate(); 
    
  return ( 
      <> 
      <div>test home div</div>
        <h1 style={{color:"green"}}>GeeksForGeeks</h1> 
        <button onClick={()=>navigate("/about")}>About</button> 
      </> 
  ) 
}; 
  
export default Home; 