/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { RootState } from 'src/redux/modules/';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  ButtonToolbar,
  Divider,
  ControlLabel,
  FlexboxGrid,
  Form,
  FormControl,
  FormGroup,
  HelpBlock,
  List,
} from 'rsuite';

import { addTodo, removeTodo } from 'src/redux/modules/todos';
import TodoItem from './TodoItem';

// eslint-disable-next-line no-shadow
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
      <Divider />
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={6}>
          <Form onSubmit={handleAddTodo}>
            <FormGroup>
              <ControlLabel>Add ToDo:</ControlLabel>
              <FormControl onChange={handleTextChange} name="addTodoInput" value={text} />
              <HelpBlock>Required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <ButtonToolbar>
                <Button appearance="primary" disabled={text === ''} onClick={handleAddTodo}>
                  Submit
                </Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
          <br />
          <div>
            <List>
              {todos.map((todo, i) => (
                <TodoItem
                  key={`#${i.toString()}-todo`}
                  todo={todo}
                  remove={() => dispatch(removeTodo)}
                />
              ))}
            </List>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <Divider />
    </div>
  );
};

export default Todo;
