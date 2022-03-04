import React from 'react'
import Todo from './Todo'

const TodoList = ({ todoList,removeTask }) => {

    return (
        <div>
            {
                todoList.map((todo, index) => {
                    return (<Todo todo={todo} key={index} onClickRemove={()=>removeTask(index)}/>)
                })
            }



        </div>
    )
}

export default TodoList