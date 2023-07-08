import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Todo = styled.div`
  border: solid 1px black;
  padding: 10px;
  margin: 10px;
`;

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const fetchTodos = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
    // console.log(data)
    setTodoList(data);
  };

  const onRemoveButtonClickHandler = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
    fetchTodos()
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main>
        {todoList.map((todoItem) => {
          return (
            <Todo key={todoItem.id}>
              <p>{todoItem.id}</p>
              <p>{todoItem.writer}</p>
              <h2>{todoItem.title}</h2>
              <h3>{todoItem.content}</h3>
              <button onClick={() => onRemoveButtonClickHandler(todoItem.id)}>
                삭제
              </button>
              <button
                onClick={() => {
                  navigate(`/todoList/${todoItem.id}`);
                }}
              >
                상세보기
              </button>
            </Todo>
          );
        })}
      </main>
    </>
  );
}

export default TodoList;
