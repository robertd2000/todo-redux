import { Home } from "../pages/home";
import { Providers } from "./providers";
import "./styles/global.scss";

function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}

export default App;
