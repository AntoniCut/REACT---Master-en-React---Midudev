import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './index.css'


//  *****  Creamos los 'turnos'  *****
const TURNS = {
  X: 'X',
  O: 'o'
}


//  *****  creamos un Componente 'cuadrado del tablero'  *****
const Square = ({ children, isSelected, updateBoard, index}) => {

  const className = `square ${ isSelected ? 'is-selected' : '' }`
    
  const handleClick = () => {
    updateBoard(index)
  }

  return (
      <div onClick={handleClick}  className={className}>
        {children}
      </div>
    )
}



//  **********  Componente 'Padre'  **********
function App() {

  //  creamos el tablero.
  const [board, setBoard] = useState(Array(9).fill(null))
  
      
  //  Creamos un estado para saber de quien es el turno.
  const [turn, setTurn] = useState(TURNS.X);
  
  //  Creamos la funcion para indicar cada uno de los pasos.
  //  Actualiza estados, Cambia turnos, saber quien es el ganador, etc.
  const updateBoard = (index) => {

    //  -----  actualizamos el tablero  -----
    
    //  No actualizamos esta posicion si ya tiene algo.
    if(board[index]) return



    const newBoard = [...board]   //  spread y rest operator.
    newBoard[index] = turn        //  puede ser 'X' u 'O'.
    setBoard(newBoard)

    //  -----  para Cambiar el turno  -----
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

  }



  return (

    <main className='board'>
      
      <h1> Tic Tac Toe </h1>
      
      <section className='game'>

        {
          board.map( ( _  , index) => {
            return (
              
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
                  
            )
          })
        }

      </section>

        <section className='turn'>
          
          <Square isSelected={turn === TURNS.X}> 
            {TURNS.X}
          </Square>
          
          <Square isSelected={turn === TURNS.O}> 
            {TURNS.O}
          </Square>

        </section>




    </main>

  )
}

export default App
