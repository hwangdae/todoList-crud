import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header';

function Home() {

    const navigate = useNavigate();

  return (
    <>
        <Header/>
        <main>
            <button onClick={()=>{
                navigate("/WriteTodo")
            }}>할일 작성하기</button>
            <button onClick={()=>{
                navigate("/TodoList")
            }}>TodoList</button>
        </main>
    </>
  )
}

export default Home