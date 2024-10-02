import { RoleEnum } from "@/models/token";
import * as loginService from '../../services/login-service';
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
  roles?: RoleEnum[];
};

export function PrivateRoute({ children, roles = [] }: Props) {
  if (!loginService.isAuthenticated())
    return <Navigate to='/login' />

  if (!loginService.hasAnyRole(roles))
    return <Navigate to='/cliente/dashboard' />

  return children;
}