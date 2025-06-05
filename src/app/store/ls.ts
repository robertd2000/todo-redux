import type { RootState } from ".";
import { localStorageController } from "../../shared/lib/local-storage.controller";

const REDUX_STATE_KEY = "reduxTodosState";

export const loadState = (): Partial<RootState> | undefined => {
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

export const saveState = (state: RootState) => {
  try {
    localStorageController.setItem(REDUX_STATE_KEY, state);
  } catch (err) {
    console.error("Failed to save state to localStorage", err);
  }
};
