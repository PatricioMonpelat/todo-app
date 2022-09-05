import Todo from "./Todo";
import { Button, Input, InputLabel, FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./App.css";
import { onSnapshot, collection, addDoc, FieldValue, serverTimestamp } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when apo loads we need to listen to the database and fetch new todos as they get added / removed
  useEffect(() => {
    // this code executes when app.js loads
    const q = collection(db, "todos");
    onSnapshot(q, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
      );
    });
  }, []);

  const addTodo = (event) => {
    // fires when you click button
    event.preventDefault(); // will stop the reload of the page

    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });

    setInput(""); // clear up the input after clciking add todo button
  };

  return (
    <div className='App'>
      <h1>🧟‍♂️ Hello Guys 🧟‍♀️</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a To Do</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type='submit'
          onClick={addTodo}
          variant='contained'
          color='secondary'
        >
          Add ToDo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
