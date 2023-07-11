import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const TodoListWrap = styled.main`
  margin-top: 40px;
`
const TodoListInner=styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 30px 20px;
  background-color: #F9F5E7;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
`;
const TodoInfo=styled.div`
  
`
const TodoWriter=styled.p`
  margin-bottom: 15px;
  font-size: 17px;
  font-weight: 600;
`
const TodoTitle=styled.h2`
  font-size: 16px;
  font-weight: 400;
`
const TodoButtonWrap=styled.div`
`
const TodoButton=styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background: #A7727D;
  color: #fff;
  margin-right: 8px;
  cursor: pointer;
`

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const fetchTodos = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
    setTodoList(data);
  };

  const onRemoveButtonClickHandler = async (id) => {
    const todoItem = todoList.find((item) => {
      return item.id === id
    })
    const isPrompt = window.prompt("게시글을 삭제하시려면 비밀번호를 입력해주세요.")
    if (isPrompt === todoItem.passWord) {
      axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
      alert("게시글이 삭제 되었습니다.")
      fetchTodos()
    }
    else {
      alert("비밀번호가 일치하지 않습니다.")
    }
  }


  useEffect(() => {
    fetchTodos();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <TodoListWrap>
        <TodoListInner>
          {todoList.map((todoItem) => {
            return (
              <Todo key={todoItem.id}>
                <TodoInfo>
                <TodoWriter>{todoItem.writer}</TodoWriter>
                <TodoTitle>{todoItem.title}</TodoTitle>
                </TodoInfo>
                <TodoButtonWrap>
                <TodoButton
                  onClick={() => {
                    navigate(`/todoList/${todoItem.id}`);
                  }}
                >
                  상세보기
                </TodoButton>
                <TodoButton onClick={() => onRemoveButtonClickHandler(todoItem.id)}>
                  삭제
                </TodoButton>
                </TodoButtonWrap>
              </Todo>
            );
          })}
        </TodoListInner>
      </TodoListWrap>
    </>
  );
}

export default TodoList;
