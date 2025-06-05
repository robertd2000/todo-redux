import { Provider } from "react-redux";
import store from "../../store";
import type { ProviderProps } from "../types";

export function StoreProvider({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
