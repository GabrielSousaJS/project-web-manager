import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Pages/Home";
import { CreateUser } from "./routes/Pages/CreateUser";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create-user" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}
