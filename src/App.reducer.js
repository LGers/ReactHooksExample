export const appReducer = (state, action) => {
  switch (action.type) {
    case 'changeInput':
      return { ...state, title: action.payload }

    case 'add':
      const newTodo = { id: new Date(), title: action.payload, completed: false };
      return { ...state, todos: [...state.todos, newTodo], title: '' }

    case 'remove':
      return { ...state, todos: state.todos.filter((todo) => (todo.id !== action.payload)) }

    case 'toggle':

      return { ...state, todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed
          }
          return todo;
        }) }

    default:
      return state
  }
};
