import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()
  return (
    <header>
            <button onClick={()=>{
                navigate("/")
            }}>홈버튼</button>
        </header>
  )
}

export default Header