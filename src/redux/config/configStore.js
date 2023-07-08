//중앙 데이터 관리소를 설정하는 부분
import todos from "../modules/todos";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        todos,
    }
})

export default store;