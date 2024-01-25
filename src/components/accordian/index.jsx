import React from 'react'
import './styles.css'
import { useState } from 'react';
import data from './data'

const Accordian = () => {
    const [selected,setSelected]=useState(null);
   
    

    function handleSingleSelection(getCurrentId)
    {
        setSelected(getCurrentId===selected?null:getCurrentId)

    }
   
  return (
    <div className="wrapper">
    
  <div className="accordian">
    {
        data && data.length > 0 ?
        data.map(dataItems=><div className="item">
<div onClick={
  
  ()=>handleSingleSelection(dataItems.id)} className="title">
    <h3>{dataItems.question}</h3>
    <span>+</span>
    
      {
        selected===dataItems.id?
        <div className="content">
            <p>{dataItems.answer}</p>
        </div>
        
        :null
      }
    
</div>
        </div>)

        :<div>no data found</div>
    }
  </div>
    </div>
  )
}

export default Accordian