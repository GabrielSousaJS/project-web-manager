import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Pages/Home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
