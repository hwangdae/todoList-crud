import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import useInput from "../hooks/useInput";
import { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

const WriteMainWrap = styled.main`
  padding-top: 40px;
`
const WriteMainInner = styled.div`
  max-width:1200px;
  margin : 0 auto;
`
const WriteLabel = styled.label`

`
const WriteInput = styled.input`
  display : block;
  width :100%;
  margin : 10px 0px 26px 0px;
  padding : 10px 10px;
  border : none;
  border-radius : 10px;
  outline : none;
`
const FoodCalWrap = styled.div`


`
const FoodCalInner = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
`
const FoodCalLabel = styled.label`
  display: block;
  width: 100%;
`
const FoodCalAddButton = styled.button`
  width: 60px;
  height: 33px;
  border: none;
  background: #A7727D;
  font-size: 22px;
  color: #fff;
  border-radius: 5px;
  
`
const WriteButton = styled.button`
  padding : 14px 48px;
  margin-top : 20px;
  background : #A7727D;
  border : none;
  border-radius : 4px;
  font-size : 15px;
  color : #fff;
  cursor: pointer;
`

function WriteTodo() {
  const [writer, onChangeWriterHandler] = useInput("");
  const [title, onChangeTitleHandler] = useInput("");
  const [content, onChangeContentHandler] = useInput("");
  const [foodCal, setFoodCal] = useState([{ food: "", calorie: "" }]);
  const [passWord, onChangePassWordHandler] = useInput("");

  const navigate = useNavigate();

  const onChangeFoodCalorieHandler = () =>{
    
  }

  const onSubmitHandler = async () => {
    try {
      if (writer.trim() === "") {
        return alert("작성자를 입력하세요.")
      } else if (title.trim() === "") {
        return alert("제목을 입력하세요")
      } else if (content.trim() === "") {
        return alert("내용을 입력하세요.")
      } else if (passWord.trim() === "") {
        return alert("비밀번호를 입력하세요.")
      } else {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, { writer, title, content, food, calorie, passWord })
        alert("게시글이 작성되었습니다.")
        navigate("/")
      }
    } catch (error) {
      console.log("error", error)
    }

  }

  return (
    <>
      <Header />
      <WriteMainWrap>
        <WriteMainInner>
          <div>
            <WriteLabel>작성자</WriteLabel>
            <WriteInput
              type="text"
              value={writer}
              onChange={onChangeWriterHandler}
            ></WriteInput>
          </div>
          <div>
            <WriteLabel>제목</WriteLabel>
            <WriteInput
              type="text"
              value={title}
              onChange={onChangeTitleHandler}
            ></WriteInput>
          </div>
          <div>
            <WriteLabel>내용</WriteLabel>
            <WriteInput
              type="text"
              value={content}
              onChange={onChangeContentHandler}
            ></WriteInput>
          </div>
          <FoodCalWrap>
            <FoodCalInner>
              <FoodCalLabel>음식</FoodCalLabel>
              <FoodCalLabel>칼로리</FoodCalLabel>
            </FoodCalInner>
            <FoodCalInner>
              <WriteInput
                type="text"
                value={food}
                onChange={onChangeFoodHandler}
              ></WriteInput>
              <WriteInput
                type="text"
                value={calorie}
                onChange={onChangeCalorieHandler}
              ></WriteInput>
            </FoodCalInner>
            <FoodCalAddButton>+</FoodCalAddButton>
          </FoodCalWrap>
          <div>
            <WriteLabel>비밀번호</WriteLabel>
            <WriteInput
              type="password"
              value={passWord}
              onChange={onChangePassWordHandler}
            ></WriteInput>
          </div>
          <WriteButton type="submit" onClick={(event) => {
            event.preventDefault()
            onSubmitHandler()
          }}>작성하기</WriteButton>
        </WriteMainInner>
      </WriteMainWrap>
    </>
  );
}

export default WriteTodo;
