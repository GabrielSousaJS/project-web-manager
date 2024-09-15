import { ResponseShortUser } from "./usuario"

export type UsuariosPaged = {
  usuarios: ResponseShortUser[],
  currentPage: number,
  totalPages: number,
}