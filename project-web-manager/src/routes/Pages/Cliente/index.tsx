import { HeaderUser } from "@/components/HeaderUser";
import { Outlet } from "react-router-dom";

export function ClienteHome() {
  return (
    <body>
      <HeaderUser />
      <Outlet />
    </body>
  );
}