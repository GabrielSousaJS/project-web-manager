import logo from '../../../assets/images/logo.png';
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import * as validation from '../../../utils/validations';
import * as forms from '../../../utils/forms';
import { useNavigate } from "react-router-dom";
import { FormPassword } from "@/components/FormPassword";
import FormInput from "@/components/FormInput";
import * as loginService from "@/services/login-service";
import { ContextToken } from '@/utils/context-token';

export function Login() {
  const {setContextTokenPayload} = useContext(ContextToken);

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

  const [errorMessage, setErrorMessage] = useState('');

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

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formDataValidated = forms.dirtyAndValidateAll(formData);

    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      return;
    }

    const requestBody = forms.toValues(formDataValidated);

    const request = loginService.login(requestBody);

    request.then((response) => {
      loginService.saveAccessToken(response.data.token);
      setContextTokenPayload(loginService.getAccessTokenPayload());
      navigate('/cliente/dashboard')
    }).catch((error) => {
      setErrorMessage(error.response.data.errorMessages[0])
    })
  }

  return (
    <main className='modal-center-box p-4 rounded-xl'>
      <div className='flex justify-center mb-4'>
        <img src={logo} alt="Logo RSX Capital" />
      </div>

      <div className='mb-4'>
        <h4 className='text-3xl'>Login</h4>
      </div>

      {errorMessage != '' ? (<div className='mb-4 text-red-600 font-semibold'>
        <h6>{errorMessage}</h6>
      </div>) : <div></div>}


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
            className="w-full form-control base-input"
            onChange={handleInputChange}
            onTurnDirty={handleTurnDirty}
            onChangeType={handleChangeType}
            onKeyDown={handleKeyDown}
          />
          <div className="form-error semi-bold">
            {formData.senha.message}
          </div>
        </div>

        <div className='text-center'>
          <Button type="submit" className='w-full rounded-xl button-color hover:bg-blue-900 pt-6 pb-6 text-lg'>LOGIN</Button>
        </div>
      </form>
    </main>
  );
}
