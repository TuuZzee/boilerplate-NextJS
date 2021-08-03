/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
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
const Todo = ({ todos, addTodo, removeTodo }) => {
  const [text, changeText] = useState('');

  const handleAddTodo = () => {
    if (text !== '') {
      addTodo(text);
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
                <TodoItem key={`#${i.toString()}-todo`} todo={todo} remove={removeTodo} />
              ))}
            </List>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <Divider />
    </div>
  );
};

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  todos: [],
};

export default connect(({ todos }) => ({ todos }), { addTodo, removeTodo })(Todo);
