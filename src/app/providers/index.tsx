import { StoreProvider } from "./store";
import type { ProviderProps } from "./types";

export function Providers({ children }: ProviderProps) {
  return <StoreProvider>{children}</StoreProvider>;
}
