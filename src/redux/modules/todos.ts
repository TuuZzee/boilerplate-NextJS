export const ADD_TODO = 'ADD_TODO' as const;
export const REMOVE_TODO = 'REMOVE_TODO' as const;

export type Todo = {
  id: string;
  text: string;
};

export type TodosState = Todo[];

const InitialState: TodosState = [];

export function addTodo(text: string) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function removeTodo(todo: Todo) {
  return {
    type: REMOVE_TODO,
    todo,
  };
}

type TodosAction = ReturnType<typeof addTodo> | ReturnType<typeof removeTodo>;

const todoReducer = (state: TodosState = InitialState, action: TodosAction): TodosState => {
  const { type } = action;

  switch (type) {
    case ADD_TODO:
      return state.concat({
        id: Math.random().toString(36).substring(2),
        text: action.text,
      });
    case REMOVE_TODO:
      return state.filter(i => i !== action.todo);
    default:
      return state;
  }
};

export default todoReducer;
export type TodoStateType = ReturnType<typeof todoReducer>;
