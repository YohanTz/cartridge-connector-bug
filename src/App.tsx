import "./App.css";
import Connect from "./components/Connect";
import Providers from "./components/Providers";

function App() {
  return (
    <Providers>
      <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
        <Connect />
      </div>
    </Providers>
  );
}

export default App;
