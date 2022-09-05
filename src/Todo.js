import React from "react";
import {  List,  ListItem,  ListItemText,  ListItemAvatar} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from "./firebase";
import { deleteDoc} from "firebase/firestore";

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Todo" />
      </ListItem>
      <DeleteForeverIcon onClick={ event => {
        deleteDoc(db, 'todos', props.todo.id);
        // db.collection('todos').doc(props.todo.id).delete;
      }}/>
    
    </List>
  );
}

export default Todo;
