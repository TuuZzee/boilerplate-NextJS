import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Divider, FlexboxGrid, Form, List } from 'rsuite';

import { addTodo, removeTodo } from 'src/redux/modules/todos';

import TodoItem from './TodoItem';

// eslint-disable-next-line no-shadow
function Todo({ todos, addTodo, removeTodo }) {
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
        <FlexboxGrid.Item colSpan={6}>
          <Form onSubmit={handleAddTodo}>
            <Form.Group>
              <Form.ControlLabel>Add ToDo:</Form.ControlLabel>
              <Form.Control name="addTodoInput" onChange={handleTextChange} value={text} />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary" disabled={text === ''} onClick={handleAddTodo}>
                  Submit
                </Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
          <br />
          <div>
            <List>
              {todos.map((todo, i) => (
                <TodoItem key={`#${i.toString()}-todo`} remove={removeTodo} todo={todo} />
              ))}
            </List>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <Divider />
    </div>
  );
}

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  todos: [],
};

export default connect(({ todos }) => ({ todos }), { addTodo, removeTodo })(Todo);
