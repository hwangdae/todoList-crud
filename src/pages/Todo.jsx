import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Header from "../component/Header";

import axios from "axios";

function Todo() {
  const [todo, setTodo] = useState(null);
  const params = useParams();

  const fetchTodos = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/todos`
    );
    console.log(data);
    setTodo(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const foundData = todo?.find((item) => {
    console.log(typeof item.id, "TODOID");
    console.log("---------------");
    console.log(typeof parseInt(params.id));
    return item.id === parseInt(params.id);
  });

  console.log(foundData, "foundData");
  return (
    <>
      <Header />
      {foundData ? (
        <div>
          <p>{foundData.id}</p>
          <p>{foundData.writer}</p>
          <p>{foundData.title}</p>
          <p>{foundData.content}</p>
        </div>
      ) : (
        <p>로딩중</p>
      )}
    </>
  );
}

export default Todo;
