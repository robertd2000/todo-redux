export interface TodoItemType {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodosState {
  todos: TodoItemType[];
}
