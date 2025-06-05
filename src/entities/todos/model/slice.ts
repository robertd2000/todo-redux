import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TodoItemType, TodosState } from "../types";
import { v4 as uuidv4 } from "uuid";

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoItemType = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      };

      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (
      state,
      action: PayloadAction<{ id: string; newText: string }>
    ) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.title = action.payload.newText;
      }
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    moveTodo(state, action: PayloadAction<{ from: number; to: number }>) {
      const { from, to } = action.payload;

      const todo = state.todos[from];

      state.todos.splice(from, 1);
      state.todos.splice(to, 0, todo);

      return state;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  editTodo,
  clearCompleted,
  moveTodo,
} = todosSlice.actions;
export default todosSlice.reducer;
