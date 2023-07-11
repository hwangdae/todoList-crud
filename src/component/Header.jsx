import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const HeaderWrap = styled.header`
  background : #fff;
  box-shadow : 1px 1px 5px rgba(0,0,0,0.2);
`
const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width : 1200px;
  margin : 0 auto;
  padding : 20px 0px;
`
const HomeButton = styled.button`
  background : none;
  border:none;
  font-family: 'Belanosima', sans-serif;
  font-size : 28px;
  font-weight :400;
  cursor: pointer;
`
const WriteButton = styled.button`
  padding : 14px 42px;
  background : #A7727D;
  border : none;
  border-radius : 4px;
  font-size : 14px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`

function Header() {

  const navigate = useNavigate()

  return (
    <HeaderWrap>
      <HeaderInner>
        <HomeButton onClick={() => {
          navigate("/")
        }}>GreenEat</HomeButton>
        <WriteButton onClick={() => {
          navigate("/WriteTodo")
        }}>식단 공유하기</WriteButton>
      </HeaderInner>
    </HeaderWrap>
  )
}

export default Header