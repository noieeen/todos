import React from 'react'

const Todo = ({todo,onClickRemove}) =>{
return (
    <div className="todo">
        {todo}
        <button onClick={onClickRemove}>Remove</button>
    </div>
)
}

export default Todo