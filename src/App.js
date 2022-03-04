import React, { useState } from 'react'
import TodoList from '../src/components/TodoList'
import styled from 'styled-components';

const Input = styled.input`
border-radius:50px;
height:40px;
`
const Button = styled.button`
border-radius:50px;
height:40px;
background-color:red;

&:active{
  background:orange;
}
`

function App() {

  const [todoList, setTodo] = useState([]);
  const [text, setText] = useState([]);

  const onTextChange = ({ target: { value } }) => {
    setText(value);
  }

  const addTask = () => {

    if(text !== ""){
          setTodo([
      ...todoList,
      text
    ]);

    //clearText
    setText('');
    }

  }

  const removeTask =(index) =>{
    console.log(index);

    let todo =[...todoList]

    todo.splice(index,1)
    setTodo(todo)
  }

  return (
    <div className="">
      <div>
        <Input type="text" name="" id="" value={text} placeholder="Type Something" onChange={onTextChange} />
        <Button onClick={addTask}>Add</Button>
</div>

      <TodoList todoList={todoList} removeTask={removeTask} />

    </div>
  )
}

export default App
