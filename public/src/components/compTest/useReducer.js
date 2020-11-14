import { useState } from 'react'

export default function useReducer(reducer, initialState) {
    
    const [state, setState] = useState(initialState)

     async function dispatch(action){
        const nextState = await reducer(state, action) 
        setState(nextState)
    }

    return [state, dispatch]
    
}

const DoWeRequireTodo = type => { if(type in ['ADD', 'UPDATE']) throw new Error('todo required') }

export const todoReducer = async (state, {type, todo=DoWeRequireTodo(type)}) => {
        switch(type){
            case 'ADD': 
                return [...state, {todo, completed: false}]
            case 'GET': 
                return fetchTodos()
            default: throw new Error('this action type isn\'t defined')
        }
}


function fetchTodos(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
                {todo: "Go to work", completed: false},
                {todo: "Bring the groceries", completed: false},
                {todo: "Make dinner", completed: false}
        ])}, 1000 * 3)

        
    })
}

function wrapPromise(promise){
let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}