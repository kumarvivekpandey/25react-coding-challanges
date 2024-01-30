import { useState } from "react";


export default function LightDarkmode(){
    const[theme,setTheme] = useState(0);
     const themes=[
        {
            background: "#fff",
            color:"#000",


        },
        {
            background: "#000",
            color: "#fff",


        },
        
    ];
    function handleToggleTheme(){
        setTheme(theme=== 0 ? 1:0 )
    }
    return(
        <div className=" container-fluid ">
           
 <div className="light-dark-mode" style={themes[theme]}>
 <h4>  Light and dark mode</h4>
        <div className="container">
          <p style={themes[theme]}>Hello World !</p>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>
        </div>
    )
   
   
 }