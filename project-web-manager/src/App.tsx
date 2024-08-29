import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Pages/Home";
import { CreateUser } from "./routes/Pages/CreateUser";
import { Login } from "./routes/Pages/Login";
import { PosLogin } from "./routes/Pages/PosLogin";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route path='login' element={<Login />} />
        <Route path='pos-register' element={<PosLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
