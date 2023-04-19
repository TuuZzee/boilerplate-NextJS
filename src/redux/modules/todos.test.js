import { addTodo, removeTodo } from './todos';

const { makeStore } = require('../store');

describe('TODOS Redux store', () => {
  let store;

  const todoContent = 'Unit test todo item content';

  beforeAll(() => {
    store = makeStore();
  });

  // Init
  it('initializes the store', async () => {
    expect(store.getState().todos).toEqual([]);
  });

  // addTodo
  it('Add an item in the todos store when doing a addTodo', async () => {
    await store.dispatch(addTodo(todoContent));

    expect(store.getState().todos).toHaveLength(1);
    expect(store.getState().todos[0].text).toEqual(todoContent);
  });

  // removeTodo
  it('Remove the specified ID item in the todos store when doing a removeTodo', async () => {
    const todoItem = store.getState().todos[0];

    await store.dispatch(removeTodo(todoItem));

    expect(store.getState().todos).toHaveLength(0);
  });
});
