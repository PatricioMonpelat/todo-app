import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar} from '@mui/material';

function Todo(props) {
  return (
    <List>
        <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItemText primary={props.text} secondary="Todo"/>
        </ListItem>
    </List>
  )
}

export default Todo;