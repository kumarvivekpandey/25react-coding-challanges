import { useRef } from "react";


export default function ScrollToSection(){
 const ref = useRef();
 const data =[
    {
        label: "First Card",
        style: {
          width: "100%",
          height: "600px",
          background: "red",
        },
      },
      {
        label: "Second Card",
        style: {
          width: "100%",
          height: "600px",
          background: "grey",
        },
      },
      {
        label: "Third Card",
        style: {
          width: "100%",
          height: "600px",
          background: "blue",
        },
      },
      {
        label: "Fourth Card",
        style: {
          width: "100%",
          height: "600px",
          background: "green",
        },
      },
      {
        label: "Fifth Card",
        style: {
          width: "100%",
          height: "600px",
          background: "orange",
        },
      },
 ];

 function  Scrollsection (){
let pos = ref.current.getBoundingClientRect().top;

window.scrollTo({
    top: pos,
    behavior:'smooth',
}) 

}
    return(

        < div>
        <h1 className="heading">
             Scroll To Section
        </h1>
        <button onClick={Scrollsection}>Scoll To that Section </button>
            {
                data.map((item,index)=>(<div key={index} ref={index === 2 ? ref : null}  style={item.style}>{item.label}</div>))
            }
        </div>
    )
}