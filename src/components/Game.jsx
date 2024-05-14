import React, { useState }  from 'react';
import './Game.css';
import Board from './Board';
import {calculateWinner} from '../helper';


const Game = () => {
    const [board, setBoard ] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        //определяем был ли клик и не закончена ли игра
        if ( winner || boardCopy[index] ) return null
        //определяем чей ход
        boardCopy[index] = xIsNext  ? 'X' : 'O'
        // обновить стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button className = 'restart' onClick={() => setBoard(Array(9).fill(null))}>
                Очистить поле
            </button>
        )
    }


    return (
        <div className = 'wrapper'>
            { startNewGame() }
            <Board squares={board} click={handleClick}/>
            <p className = 'gameInfo'>
                { winner ? 'Победитель ' + winner : "Сейчас ходит " + (xIsNext ? 'X' : 'O' ) }
            </p>        
        </div>
    );
}

export default Game;
