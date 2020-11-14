import React, { useState, useEffect }  from 'react'
import useReducer, { todoReducer } from './useReducer'

export default function TodoCompo() {
    const [ todos, dispatch] = useReducer(todoReducer, [])
    const [ todo, setTodo ] = useState('')

    useEffect(() => {
        dispatch({type: 'GET'})
    })

    const spinner = (
        <span
          className="fa fa-circle-o-notch fa-spin"
          style={{
            marginLeft: 4,
            fontSize: "small",
            visibility: todos.length === 0
              ? "visible"
              : "hidden"
          }}
        />
      );
    function handleClick(){
        dispatch({type: 'ADD', todo})
    }
    return (
       <>
         <input value={todo} onChange={e => setTodo(e.target.value)} />
         <button onClick={handleClick}>add</button>
            <Todos todos={todos}  spinner={spinner}></Todos>
       </> 
    )
}


function Todos({ todos, spinner }){
    return <>
        { todos.length === 0 ? spinner : null}
         {todos.map(({todo, completed}, index) => (
                <li key={index}>{todo} | {String(completed)}</li>
                ))}
    </>
}