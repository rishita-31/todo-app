import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
        </div>
        <hr />
        </>
        //agr khali onDelete likhte to func pass hota ... abi arrow func ki wajah se func call hoga nd usme func pass hoga
    )
}
//agr yaha (props) hota toh props.todo and props.onDelete use hota just like in Todos.js