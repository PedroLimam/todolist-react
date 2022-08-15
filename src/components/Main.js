import React, { useRef, useState } from "react";
import {FaPlus} from 'react-icons/fa'

function Main(){

    const [tarefas, setTarefas] = useState([])
    const newTarefa = useRef()

    function adcTarefas(){
        setTarefas(prevState => [...prevState,  newTarefa.current.value])
        console.log(tarefas)
    }

    return(
        <div className="container__main" >
            <h2> Lista de tarefas</h2>

            <form action="#">
                <input className="container__main-input-text" ref={newTarefa} type="text" ></input>
                <button className="container__main-button" onClick={adcTarefas}> <FaPlus/> </button>
            </form>

            <div className="container__main-box-tarefas" >
                <ul>
                    { tarefas.map((el, index) => <li className="container__main-tarefa" key={index}> {el} </li>) }
                </ul>
            </div>
        </div>
    )
}

export default Main;