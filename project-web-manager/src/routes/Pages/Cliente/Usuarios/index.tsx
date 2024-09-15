import { UsuariosPaged } from "@/models/usuarios-paged";
import { useEffect, useState } from "react";
import * as userService from '../../../../services/usuarios-services';
import * as loginService from '../../../../services/login-service';
import { Pagination } from "@/components/Pagination";
import { UserCard } from "@/components/UserCard";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<UsuariosPaged>();

  useEffect(() => {
    if (loginService.isAuthenticated()) {
      getAllUser(0);
    }
  }, [])

  function getAllUser(pageNumber: number) {
    userService.getAllUsers(pageNumber + 1).then(((response) => {
      setUsuarios(response.data);
    }))
  }

  return (
    <main className='container'>
      <div className='pt-2 pb-2 border-b-2'>
        <h1 className='text-xl lg:text-4xl font-semibold'>Usuários</h1>
        <p></p>
      </div>

      <div className='hidden xl:grid xl:grid-cols-12 xl:gap-4 text sm mt-4 border-b-4 pb-2'>
        <div className='col-span-4 text-center'>
          USUARIO
        </div>
        <div className='col-span-4 text-center'>
          STATUS
        </div>
        <div className='col-span-4 text-center'>
          AÇÃO
        </div>
      </div>
      <div className='space-y-4 pt-2 mb-4'>
        {usuarios?.usuarios.map((usuario) => (
          <div className="border-b-2 pb-2" key={usuario.id_Usuario}>
            <UserCard usuario={usuario} />
          </div>
        ))}
      </div>
      <div className='mb-4'>
        {usuarios?.usuarios.length !== 0 && (<Pagination pageCount={usuarios ? usuarios.totalPages : 0} range={3} onChange={getAllUser} />)}
      </div>
    </main>
  );
}