import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import todosSlice from "../../entities/todos/model/slice";
import { localStorageController } from "../../shared/lib/local-storage.controller";

const REDUX_STATE_KEY = "reduxState";

const loadState = (): Partial<RootState> | undefined => {
  try {
    return (
      localStorageController.getItem<Partial<RootState>>(REDUX_STATE_KEY) ??
      undefined
    );
  } catch (err) {
    console.error("Failed to load state from localStorage", err);
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    localStorageController.setItem(REDUX_STATE_KEY, state);
  } catch (err) {
    console.error("Failed to save state to localStorage", err);
  }
};

const rootReducer = combineReducers({
  todos: todosSlice,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  store.subscribe(() => {
    store.subscribe(() => {
      saveState(store.getState());
    });
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
