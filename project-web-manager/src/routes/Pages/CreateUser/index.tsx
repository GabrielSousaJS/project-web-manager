import './styles.css';
import logo from '../../../assets/images/logo.png';
import { Button } from '@/components/ui/button';
import * as validation from '../../../utils/validations';
import { useState } from 'react';
import { FormPassword } from '@/components/FormPassword';
import FormInput from '@/components/FormInput';
import * as forms from '../../../utils/forms';
import * as userService from '../../../services/usuarios-services';
import { useNavigate } from 'react-router-dom';

export function CreateUser() {
  const [formData, setFormData] = useState({
    username: {
      value: "",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "E-mail",
      validation: function (value: string) {
        return validation.emailValidation(value);
      },
      message: "E-mail inválido, verifique e tente novamente",
    },
    senha: {
      value: "",
      id: "senha",
      name: "senha",
      type: "password",
      placeholder: "Senha",
      validation: function (value: string) {
        return validation.passwordValidation(value);
      },
      message: "A senha deve conter no mínimo 8 caracteres",
    },
  });

  const navigate = useNavigate();

  function handleTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  function handleInputChange(event: any) {
    setFormData(
      forms.updateAndValidate(formData, event.target.name, event.target.value)
    );
  }

  function handleChangeType(event: any) {
    event.preventDefault();
    setFormData(forms.changeType(formData, "senha"));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formDataValidated = forms.dirtyAndValidateAll(formData);

    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      return;
    }

    const requestBody = forms.toValues(formDataValidated);

    const request = userService.registerUsuario(requestBody);

    request.then(() => {
      navigate('/pos-register-user');
    })
  }

  return (
    <main className='bg-blue w-screen h-screen'>
      <div className='modal-center-box p-4 rounded-xl'>
        <div className='flex justify-center mb-4'>
          <img src={logo} alt="Logo RSX Capital" />
        </div>

        <div className='mb-4'>
          <h4 className='text-3xl'>Crie seu usuário</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <FormInput
              {...formData.username}
              className="w-full pl-4 pr-4 pt-3 pb-3 rounded-xl form-control base-input"
              onChange={handleInputChange}
              onTurnDirty={handleTurnDirty}
            />
            <div className="form-error semi-bold">
              {formData.username.message}
            </div>
          </div>

          <div className="mb-4">
            <FormPassword
              {...formData.senha}
              className="form-control base-input"
              onChange={handleInputChange}
              onTurnDirty={handleTurnDirty}
              onChangeType={handleChangeType}
            />
            <div className="form-error semi-bold">
              {formData.senha.message}
            </div>
          </div>

          <div className='text-center'>
            <Button onClick={() => handleSubmit} className='w-full rounded-xl button-color hover:bg-blue-900 pt-6 pb-6 text-lg'>CRIAR</Button>
          </div>
        </form>
      </div>
    </main>
  );
}