import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Routes, Route } from "react-router-dom";
import { Hello } from "./pages/Hello";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/hello" element={<Hello />} />
    </Routes>
  );
}

export default App;
