import PropTypes from 'prop-types';
import React from 'react';

const TodoItem = ({ todo, remove }) => (
  <li style={{ listStyle: 'none' }}>
    <button
      type="button"
      className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect"
      onClick={() => remove(todo)}
      style={{ fontSize: 12 }}
    >
      x
    </button>
    {' '}
    {todo.text}
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({ text: PropTypes.string }),
  remove: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  todo: {},
};

export default TodoItem;
