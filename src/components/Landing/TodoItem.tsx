import React from 'react';
import { Button, ListGroupItem } from 'reactstrap';

import { Todo } from 'src/redux/modules/todos';

type TodoItemProps = {
  todo: Todo;
  remove: (todo: Todo) => void;
};

const TodoItem = ({ todo, remove }: TodoItemProps) => (
  <ListGroupItem style={{ listStyle: 'none' }}>
    {todo.text}
    <Button onClick={() => remove(todo)}>x</Button>
  </ListGroupItem>
);

export default TodoItem;
