import React from "react";
import {  List,  ListItem,  ListItemText,  ListItemAvatar} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from "./firebase";
import { doc, deleteDoc} from "firebase/firestore";

function Todo(props) {

  const deleteTodo = (event) => {
    // fires when you click button
    event.preventDefault(); // will stop the reload of the page
    console.log(props);
    deleteDoc(doc(db, "todos", props.todo.id ));

  };

  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo}  className="todo__text"/>
      </ListItem>
      <DeleteForeverIcon onClick={deleteTodo}/>
    
    </List>
  );
}

export default Todo;
