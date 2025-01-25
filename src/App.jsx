import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
