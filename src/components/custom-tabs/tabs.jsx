import { useState } from "react";
import './styles.css';
export default function Tabs({tabsContent,onChange}){


const[currentTabIndex ,setcurrentTabIndex] = useState(0) 
function handleonclick(getcurrentindex){
    setcurrentTabIndex(getcurrentindex)
    onChange(getcurrentindex);
}
    return(
        <div className="wrapper">
        <div className="heading">
        {
            tabsContent.map((tabItem,index)=>(<div   className={`tab-item ${currentTabIndex === index ? "active" : ""}`}  key={tabItem.label} onClick={()=>handleonclick(index)}>
                 <span className="label">{tabItem.label}</span>
            </div>
            ))
        }
        </div>
     

     <div className="content" style={{color:"red"}}>
       
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
       
       
     </div>

     </div>
    );
}