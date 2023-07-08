import Header from "../component/Header";
import useInput from "../hooks/useInput";
import axios from "axios";

function WriteTodo() {
  const [writer, onChangeWriterHandler] = useInput();
  const [title, onChangeTitleHandler] = useInput();
  const [content, onChangeContentHandler] = useInput();


  const onSubmitHandler = async () =>{
    axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, {writer,title,content})
  }

  return (
    <>
      <Header />
      <main>
        <form onSubmit={(event)=>{
          event.preventDefault()
          onSubmitHandler()
        }}>
        <div>
          <label>작성자</label>
          <input
            type="text"
            value={writer}
            onChange={onChangeWriterHandler}
          ></input>
        </div>
        <div>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={onChangeTitleHandler}
          ></input>
        </div>
        <div>
          <label>내용</label>
          <input
            type="text"
            value={content}
            onChange={onChangeContentHandler}
          ></input>
        </div>
        <button>작성하기</button>
        </form>
      </main>
    </>
  );
}

export default WriteTodo;
