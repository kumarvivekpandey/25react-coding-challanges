import { useRef } from "react";
import useFetch from "../use-fetch";
import './styles.css';
import ScrollToSection from "./scrolltosection";

export default function ScrollTopBottom(){
    const {data,error,loading} = useFetch('https://dummyjson.com/products',{})
   
   const bottomref = useRef(null)
    function scrolltop(){
        window.scrollTo({
            top:0,
            behavior:"smooth",
            left:0,
        })
    }
    function scrollbottom(){
        bottomref.current.scrollIntoView({ behavior:'smooth'})
    }
   
    return(
        <>
         <h3   className="heading"> Scroll to top and bottom </h3>
         <button onClick={scrollbottom}> Scroll to bottom </button>
           <p className="heading">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Itaque fuga eum odit possimus nesciunt mollitia commodi
             enim ex cumque neque! Omnis explicabo velit id amet veritatis 
             magnam non eius. Sunt.</p>
            
            
           
            {data && data.products && data.products.length ? 
            data.products.map((item)=><div key={item.key}>
               <p> {item.title}</p>
            </div>):null}
            <p ref={bottomref}>this is the bottom area </p>
            
            <button onClick={scrolltop}> Scroll to Top </button>
            <ScrollToSection />
        </>
    )
}