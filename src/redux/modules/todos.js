import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

// const ADD_TODO = "ADD_TODO";
// const REMOVE_TODO = "REMOVE_TODO";
// const UPDATE_TODO = "UPDATA_TODO";

// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//      payload
//     };
// };

// export const removeTodo = (payload) => {
//     return {
//         type : REMOVE_TODO,
//         payload
//     }
// };

// export const updateTodo = (payload) => {
//     return {
//         type : UPDATE_TODO,
//         payload
//     }
// };

export const initialState = [
  {
    id: shortid.generate(),
    writer: "유저1",
    title: "제목1",
    content: "내용1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    writer: "유저2",
    title: "제목2",
    content: "내용2",
    isDone: false,
  },
  {
    id: shortid.generate(),
    writer: "유저3",
    title: "제목3",
    content: "내용3",
    isDone: false,
  },
];

// const todos = (state = initialstate, action) => {
//   switch (action.type) {
//     case ADD_TODO :
//       return [...state, action.payload]
//     case REMOVE_TODO :
//       return state.filter((removeItem)=>{
//         return removeItem.id !== action.payload
//       })
//     default :
//     return state;
//   }
// };

// export default todos
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state,action) => {
      return [...state, action.payload];
    },
    removeTodo: (state,action) => {
      return state.filter((removeItem) => {
        return removeItem.id !== action.payload;
      });
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
