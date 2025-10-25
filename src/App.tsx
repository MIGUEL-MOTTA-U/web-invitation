import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GuestsPage } from "./guests";
import { ConfirmationPage, Home } from "./home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/guests" element={<GuestsPage />} />
        <Route path="/body" element={<div> body </div>} />
        <Route path="/401" element={<div> Unauthorized </div>} />
        <Route path="*" element={<div> Not Found </div>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
