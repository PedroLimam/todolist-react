import React, { useRef, useState } from "react";
import {FaPlus, FaWindowClose, FaEdit} from 'react-icons/fa'

function Main(){

    const [tarefas, setTarefas] = useState([])
    const newTarefa = useRef('')

    function adcTarefas(){
        if(typeof newTarefa.current.value[0] !== 'string') return

        for(let tarefa in tarefas){
            if(tarefas[tarefa] === newTarefa.current.value) return      
        }

        setTarefas(prevState => [...prevState,  newTarefa.current.value])
    }

    function deleteTarefa(e, index){
        e.preventDefault()
        const tarefasFilter = tarefas.filter(tarefa => tarefas.indexOf(tarefa) !== index)
        setTarefas(tarefasFilter)
    }

    function editTarefa(el, index){
        newTarefa.current.value = tarefas[index]
    }

    return(
        <div className="container__main" >
            <h2> Lista de tarefas</h2>

            <form action="#">
                <input className="container__main-input-text" ref={newTarefa} type="text" required></input>
                <button className="container__main-button" onClick={adcTarefas}> <FaPlus/> </button>
            </form>

            <div className="container__main-box-tarefas" >
                <ul>
                    { tarefas.map((el, index) => (
                        <li className="container__main-tarefa" key={index}> {el}  <div><FaEdit onClick={el => editTarefa(el, index)} className="edit"/> <FaWindowClose onClick={(e) => deleteTarefa(e, index)} className="delete" /></div></li>
                    )) }
                </ul>
            </div>
        </div>
    )
}

export default Main;