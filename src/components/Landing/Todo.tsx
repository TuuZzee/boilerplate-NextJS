import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  ListGroup,
} from 'reactstrap';

import { addTodo, removeTodo } from 'src/redux/modules/todos';
import { RootState } from 'src/redux/modules';

import TodoItem from './TodoItem';

const Todo = () => {
  const dispatch = useDispatch();
  const [text, changeText] = useState('');
  const { todos } = useSelector((state: RootState) => ({
    todos: state.todos,
  }));

  const handleAddTodo = () => {
    if (text !== '') {
      dispatch(addTodo(text));
      changeText('');
    }
  };

  const handleTextChange = value => {
    changeText(value);
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleAddTodo}>
          <FormGroup>
            <Label>Add ToDo:</Label>
            <Input onChange={handleTextChange} name="addTodoInput" value={text} />
            <FormFeedback>Required</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Button disabled={text === ''} onClick={handleAddTodo}>
              Submit
            </Button>
          </FormGroup>
        </Form>
        <br />
        <div>
          <ListGroup>
            {todos.map((todo, i) => (
              <TodoItem
                key={`#${i.toString()}-todo`}
                todo={todo}
                remove={() => dispatch(removeTodo(todo))}
              />
            ))}
          </ListGroup>
        </div>
      </Container>
    </div>
  );
};

export default Todo;
