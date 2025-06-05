import { Provider } from "react-redux";
import type { ProviderProps } from "../types";
import { store } from "../../store";

export function StoreProvider({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
