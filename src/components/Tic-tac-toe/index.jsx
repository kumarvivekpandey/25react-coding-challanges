 import { useState,useEffect } from 'react'
import './styles.css'
function Square({value,onClick}){
    return <button    onClick={onClick} className='square'>{value} </button>
}

export default function TicTacToe(){
    const[square,setSquare] = useState(Array(9).fill(''))
    const[isXTurn,setIsXTurn]= useState(true);
    const[status,setStatus] = useState("");
    function handleClick(getCurrentSquare){

        let cpySquare = [...square]
        if( getwinner(cpySquare) || cpySquare[getCurrentSquare]) return;
        cpySquare[getCurrentSquare]= isXTurn? "X" : "O";
        setIsXTurn(!isXTurn);
        setSquare(cpySquare);
    }
    function handleRestart() {
        setIsXTurn(true);
        setSquare(Array(9).fill(""));
    }
    useEffect(() => {
        if (!getwinner(square) && square.every((item) => item !== "")) {
          setStatus(`This is a draw ! Please restart the game`);
        } else if (getwinner(square)) {
          setStatus(`Winner is ${getwinner(square)}. Please restart the game`);
        } else {
          setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
        }
      }, [square, isXTurn]);

    function  getwinner(square){
        const winningpattern=[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ];
        for (let i=0; i<winningpattern.length;i++){
            const [x,y,z]= winningpattern[i];
            if(square[x] && square[x]=== square[y] && square[x]=== square[z]){
                return square[x];
            }
        }
        return null;
    }
    return(
        <>
              <div className="tic-tac-toe">
              <div className="row">
                 <Square  value={square[0]} onClick={()=> handleClick(0)} />
                 <Square value={square[1]}   onClick={()=> handleClick(1)} />
                 <Square  value={square[2]}  onClick={()=> handleClick(2)} />
                 </div>  
                <div className="row">
                    <Square  value={square[3]}   onClick={()=> handleClick(3)}/>
                    <Square  value={square[4]}  onClick={()=> handleClick(4)} />
                    <Square  value={square[5]}  onClick={()=> handleClick(5)} />
                    </div>
                <div className="row
                "><Square value={square[6]}    onClick={()=> handleClick(6)}/>
                <Square value={square[7]}   onClick={()=> handleClick(7)} />
                <Square value={square[8]}   onClick={()=> handleClick(8)} /></div>
                <h1>{status}</h1>
                <button onClick={handleRestart}>Restart</button>
              </div>
        </>
    )
}