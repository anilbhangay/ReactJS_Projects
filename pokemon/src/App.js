
import { useState, createContext } from "react";
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';

export const myContext = createContext();

function App() {

  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const myname = (event) => {
    setName(event.target.value);
  };

  const mycolor = (event) => {
    setColor(event.target.value);
  };


  return (
    <myContext.Provider value={{ name, color }}>
     <Navbar />
     <form className="inpt">
         <input
             className="input-1"
             type={"text"}
             placeholder="Enter User Name"
             value={name}
             onChange={myname}
         />
         <input
             className="input-2"
             type={"text"}
             placeholder="Enter a Color name"
             value={color}
             onChange={mycolor}
         />
     </form>
     <HeroSection/>
    </myContext.Provider>
  )
}

export default App