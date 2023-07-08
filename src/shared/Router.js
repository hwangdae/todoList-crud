import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import WriteTodo from '../pages/WriteTodo'
import TodoList from '../pages/TodoList'
import Todo from '../pages/Todo'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/writeTodo' element={<WriteTodo/>}></Route>
            <Route path='/todoList' element={<TodoList/>}></Route>
            <Route path='/todoList/:id' element={<Todo/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router