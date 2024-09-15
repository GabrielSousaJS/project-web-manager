import { ResponseShortUser } from "@/models/usuario"
import { Button } from "../ui/button"
import * as loginService from '../../services/login-service';

type Props = {
  usuario: ResponseShortUser
}

export function UserCard({ usuario }: Props) {
  function handleDisableUser() {
    let response = loginService.disableLogin(Number(usuario.id_Usuario));

    response.then(() => {
      window.location.reload();
    })
  }

  return(
    <div className="xl:grid xl:grid-cols-12 xl:gap-4">
      <div className="col-span-4 mb-2 xl:mb-0 text-center">
        <span>{<p>{usuario.username}</p>}</span>
      </div>
      <div className={`col-span-4 mb-2 xl:mb-0 text-center pt-1 rounded-xl font-semibold ${usuario.status === 'A' ? 'bg-green-500' : 'bg-red-500'}`}>
        <span>{<p>{usuario.status === 'A' ? 'Ativo' : 'Inativo'}</p>}</span>
      </div>
      <div className="col-span-4 text-center">
      <Button onClick={handleDisableUser}>Inativar usuário</Button>
      </div>
    </div>
  )
}