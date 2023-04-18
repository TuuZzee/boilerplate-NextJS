import React from 'react';

import PropTypes from 'prop-types';
import { Button, List } from 'rsuite';

function TodoItem({ todo, remove }) {
  return (
    <List.Item style={{ listStyle: 'none' }}>
      {todo.text}
      <Button onClick={() => remove(todo)} type="button">
        x
      </Button>
    </List.Item>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({ text: PropTypes.string }),
  remove: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  todo: {},
};

export default TodoItem;
