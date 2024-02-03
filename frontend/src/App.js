import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./componants/main.css";
import "./componants/responsive.css"
import Home from "./componants/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
