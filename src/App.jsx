import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = (todo) => {
    const newToDo = {
      id: Math.random(),
      text: todo,
    };
    setList([...list, newToDo]);
    setInput("");
  };

  const deleteToDo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>{" "}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addToDo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteToDo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
