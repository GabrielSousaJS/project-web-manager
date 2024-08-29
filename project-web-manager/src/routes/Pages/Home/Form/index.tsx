import './style.css'
import logo from '../../../../assets/images/short-logo.png'
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import FormInput from '@/components/FormInput/index';
import * as validation from '../../../../utils/validations';
import * as forms from '../../../../utils/forms';
import * as investidorService from '../../../../services/investidores-services';
import FormSelect from '@/components/FormSelect';
import { selectStyles } from '@/utils/select-styles';
import { useNavigate } from 'react-router-dom';

export function Form() {
  const [formData, setFormData] = useState({
    nome: {
      value: "",
      id: "nome",
      name: "nome",
      type: "text",
      placeholder: "Nome",
      validation: function (value: string) {
        return validation.lengthDefaultValidation(value);
      },
      message: "O nome deve conter no mínimo 3 caracteres",
    },
    sobrenome: {
      value: "",
      id: "sobrenome",
      name: "sobrenome",
      type: "text",
      placeholder: "Sobrenome",
      validation: function (value: string) {
        return validation.lengthDefaultValidation(value);
      },
      message: "O sobrenome deve conter no mínimo 3 caracteres",
    },
    email: {
      value: "",
      id: "email",
      name: "email",
      type: "email",
      placeholder: "E-mail",
      validation: function (value: string) {
        return validation.emailValidation(value);
      },
      message: "E-mail inválido, verifique",
    },
    telefone: {
      value: "",
      id: "telefone",
      name: "telefone",
      type: "text",
      placeholder: "Telefone",
      validation: function (value: string) {
        return validation.phoneValidation(value);
      },
      message: "Telefone incorreto (Ex: (00) 12345-6789)",
    },
    valor_Cotas: {
      value: [],
      id: 'valor_Cotas',
      name: 'valor_Cotas',
      placeholder: 'Valor em cotas (R$)',
    }
  });

  const navigate = useNavigate();

  const cotas = [
    { value: '1200', label: '1200' },
    { value: '2400', label: '2400' },
    { value: '3600', label: '3600' },
    { value: '4800', label: '4800' },
    { value: '6000', label: '6000' },
    { value: '6000+', label: '6000+' },
  ];

  function handleTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  function handleInputChange(event: any) {
    setFormData(
      forms.updateAndValidate(formData, event.target.name, event.target.value)
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formDataValidated = forms.dirtyAndValidateAll(formData);

    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      return;
    }

    let values = forms.toValues(formDataValidated);

    if (values.valor_Cotas.value === '6000+') {
      values = { ...values, valor_Cotas: { ...values.valor_Cotas, value: '6000' } }
    }

    const requestBody = {
      ...values,
      valor_Cotas: values.valor_Cotas.value
    }

    const request = investidorService.RegisterInvestidor(requestBody);

    request.then(() => {
      navigate('pos-register')
    });
  }

  return (
    <section className='bg-image bg-cover pt-10 pb-10'>
      <div className='flex flex-col md:space-x-8 container md:flex-row'>
        <div className='flex-1'>
          <div className='container-logo pb-6'>
            <img src={logo} alt='Logo RSX Capital' />
          </div>
          <div className='pb-4'>
            <h1 className='text-4xl mb-4 font-bold text-white'>
              <span className='text-bg pl-3 pr-3 rounded-md'>
                Invista com a RSX Capital e Obtenha Retornos Sólidos de até 3% ao Mês
              </span>
            </h1>
            <p className='text-white pl-3 pr-3'>
              Participe dos Setores que Movimentam a Economia Brasileira
              e Veja seu Dinheiro Crescer com Segurança e Transparência.
              Seja Sócio em Investimentos Estratégicos com a RSX Capital.
            </p>
          </div>
        </div>
        <div className='flex-1'>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <FormInput
                {...formData.nome}
                className="w-full text-white pl-4 pr-4 pt-3 pb-3 bg-input rounded-xl form-control base-input"
                onChange={handleInputChange}
                onTurnDirty={handleTurnDirty}
              />
              <div className="form-error semi-bold">
                {formData.nome.message}
              </div>
            </div>
            <div className="mb-4">
              <FormInput
                {...formData.sobrenome}
                className="w-full text-white pl-4 pr-4 pt-3 pb-3 bg-input rounded-xl form-control base-input"
                onChange={handleInputChange}
                onTurnDirty={handleTurnDirty}
              />
              <div className="form-error semi-bold">
                {formData.sobrenome.message}
              </div>
            </div>
            <div className="mb-4">
              <FormInput
                {...formData.email}
                className="w-full text-white pl-4 pr-4 pt-3 pb-3 bg-input rounded-xl form-control base-input"
                onChange={handleInputChange}
                onTurnDirty={handleTurnDirty}
              />
              <div className="form-error semi-bold">
                {formData.email.message}
              </div>
            </div>
            <div className="mb-4">
              <FormInput
                {...formData.telefone}
                className="w-full text-white pl-4 pr-4 pt-3 pb-3 bg-input rounded-xl form-control base-input"
                onChange={handleInputChange}
                onTurnDirty={handleTurnDirty}
              />
              <div className="form-error semi-bold">
                {formData.telefone.message}
              </div>
            </div>
            <div className='w-full mb-4'>
              <FormSelect
                {...formData.valor_Cotas}
                className='form-control'
                styles={selectStyles}
                options={cotas}
                onChange={(obj: any) => {
                  const newFormData = forms.updateAndValidate(
                    formData,
                    'valor_Cotas',
                    obj
                  );
                  setFormData(newFormData);
                }}
                getOptionLabel={(obj: any) => obj.label}
                getOptionValue={(obj: any) => String(obj.value)}
                onTurnDirty={handleTurnDirty}
              />
            </div>
            <div className='flex align-middle text-[9px] pb-4'>
              <Label htmlFor='terms' className='text-white font-bold text-xs'>
                Ao enviar este formulário, você concorda com o uso de seus dados pessoais pela RSX Capital,
                conforme a LGPD, para fins de comunicação e atendimento. Consulte nossa Política de Privacidade e os Termos e Condições de Uso.
              </Label>
            </div>
            <div className='pl-3 pr-3'>
              <Button onClick={() => handleSubmit} className='w-full rounded-3xl button-color hover:bg-blue-900 pt-6 pb-6 text-lg'>QUERO SABER MAIS</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}