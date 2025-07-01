import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/body" element={<div> body </div>} />
        <Route path="/401" element={<div> Unauthorized </div>} />
        <Route path="*" element={<div> Not Found </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
