import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import todosSlice from "../../entities/todos/model/slice";
import { loadState, saveState } from "./ls";

const rootReducer = combineReducers({
  todos: todosSlice,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

const persistedState = loadState();
export const store = setupStore(persistedState);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
