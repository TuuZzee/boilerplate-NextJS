/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { addTodo, removeTodo } from '../actions/todo';
import TodoItem from './TodoItem';

const TitleStyle = styled.h1`
  font-size: 22px;
  color: green;
  margin: 10px;
`;

// eslint-disable-next-line no-shadow
const Todo = ({ todos, addTodo, removeTodo }) => {
  const [text, changeText] = useState('');

  const inputIdName = 'todoText';

  const handleAddTodo = e => {
    e.preventDefault();

    addTodo(text);
    changeText('');
  };

  const handleTextChange = e => {
    changeText(e.target.value);
  };

  return (
    <div className="mdl-card mdl-shadow--2dp">
      <TitleStyle>Add ToDo:</TitleStyle>
      <form onSubmit={handleAddTodo}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <label className="mdl-textfield__label" htmlFor={inputIdName}>
            What must be done?
          </label>
          <input
            id={inputIdName}
            type="text"
            value={text}
            onChange={handleTextChange}
            className="mdl-textfield__input"
          />
        </div>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <TodoItem
            key={`#${i.toString()}-todo`}
            todo={todo}
            remove={removeTodo}
          />
        ))}
      </ul>
      <style>
        {`
            form {
                background: #fff;
                padding: 10px;
            }
            ul {
                min-height: 100px;
                margin: 0;
                padding: 0;
                text-align: left;
                list-style: none;
            }
            ul li {
                padding: 10px;
                background: #FFF;
                border-bottom: 1px solid #EEE;
            }
            ul li:nth-child(2n) {
                background: #EEF6FF;
            }
            ul li:last-child {
                border-bottom: none;
            }
            .mdl-card {
                margin: auto;
                transition: all .3s;
                transform: translateY(100px);
            }
        `}
      </style>
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

export default connect(({ todos }) => ({ todos }), { addTodo, removeTodo })(
  Todo
);
