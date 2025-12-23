import React from 'react'
import { Layout } from './Layout';

const getAlltodos = ({todos}) => {
    console.log(todos);
    
  return (
    <Layout title="todo App">
    <div>Hello this are all todos
      <form action='/todos' method='post'>
         <input type='text' name='title' required></input>
         <button >add</button>
      </form>
        <ul>
      {todos.map((todo)=>(
        <li  key={todo._id}>
            <span style={{textDecoration:todo.completed?'line-through':'none'}}>{todo.title}</span>
            <button data-id={todo._id.toString()} >delete</button>
            </li>
      ))}
        </ul>
    </div>
    </Layout>
  )
}

export default getAlltodos