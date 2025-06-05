import { Providers } from "./providers";
import { AppRouter } from "./router";
import "./styles/global.scss";

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
