import React from "react";
import {  List,  ListItem,  ListItemText,  ListItemAvatar} from "@mui/material";
import { deleteDoc } from "firebase/firestore";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Todo" />
      </ListItem>
      <DeleteForeverIcon onClick={() => {deleteDoc(props.todo.id);}}/>Delete Me
    
    </List>
  );
}

export default Todo;
