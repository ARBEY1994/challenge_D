import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DetailTask from "./components/detailTask";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
