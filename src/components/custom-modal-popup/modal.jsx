
import './styles.css';

export default function Modal( {id,header,body,footer,onClose}){
    return(
        <div id={id || "Modal"} className="modal">

           <div className="modal-content">
             <div className="header">
             <span onClick={onClose} className="close-modal-icon">&times;</span>
                <h2>{header?header:"Headder"}</h2>
            </div>
            <div className="body">
                {body?body:
                <div> "body"</div>}
            </div>
            <div className="footer">
                {footer?footer:"footer"}
            </div>
            </div>

        </div>

    );

}