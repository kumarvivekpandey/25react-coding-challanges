import { useState } from "react";
import Modal from "./modal";

export default function ModalTest(){
    const [showmodal,setShowModal]= useState(false)
   function handletoggle(){
         setShowModal(!showmodal)
   }
   function onClose(){
    setShowModal(false)
   }
    return(
    <div>
        <button onClick={handletoggle}>Open Popup</button>
        {
            showmodal && <Modal  body={"uio"} onClose={onClose} />
        }
    </div>
    );
}