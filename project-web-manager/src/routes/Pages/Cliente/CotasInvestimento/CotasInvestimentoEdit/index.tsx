import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from '../../../../../assets/images/short-logo.png';
import * as forms from '../../../../../utils/forms';
import * as cotasService from '../../../../../services/cotas-investimento-service';
import FormInput from "@/components/FormInput";
import { Button } from "@/components/ui/button";

export function CotasInvestimentoEdit() {
  const [formData, setFormData] = useState({
    valor_Aplicado: {
      value: "",
      id: "valor_Aplicado",
      name: "valor_Aplicado",
      type: "number",
      placeholder: "Valor Aplicado",
      validation: function (value: string) {
        return Number(value) >= 1200;
      },
      message: "O valor aplicado deve ser maior ou igual a R$ 1.200,00",
    },
    meses_Aplicado: {
      value: "",
      id: "meses_Aplicado",
      name: "meses_Aplicado",
      type: "number",
      placeholder: "Quantidade de meses",
      validation: function (value: string) {
        return Number(value) > 0;
      },
      message: "A quantidade de meses na aplicação deve ser maior do que 0.",
    }
  })

  const params = useParams();

  useEffect(() => {
    cotasService.getByIdCotaInvestimento(Number(params.cotasId))
      .then((response) => {
        setFormData(forms.updateAll(formData, response.data));
      })
  }, [])

  const navigate = useNavigate();

  function handleTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  function handleInputChange(event: any) {
    setFormData(
      forms.updateAndValidate(formData, event.target.name, event.target.value)
    );
  }

  function handleBackPage() {
    navigate(-1);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formDataValidated = forms.dirtyAndValidateAll(formData);

    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      return;
    }

    const requestBody = forms.toValues(formDataValidated);

    let response = cotasService.updateCotaInvestimento(Number(params.cotasId), requestBody);

    response.then(() => navigate(-1));
  }

  return (
    <main className='modal-center-box p-4 rounded-xl'>
      <div className='flex justify-center mb-4'>
        <img src={logo} alt='Logo RSX Capital' />
      </div>

      <div className='mb-4'>
        <h4 className='text-3xl'>Alterar Cota para Investimento</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <FormInput
            {...formData.valor_Aplicado}
            className='w-full pl-4 pr-4 pt-3 pb-3 rounded-xl form-control base-input'
            onChange={handleInputChange}
            onTurnDirty={handleTurnDirty}
          />
          <div className='form-error semi-bold'>
            {formData.valor_Aplicado.message}
          </div>
        </div>

        <div className='mb-4'>
          <FormInput
            {...formData.meses_Aplicado}
            className='w-full pl-4 pr-4 pt-3 pb-3 rounded-xl form-control base-input'
            onChange={handleInputChange}
            onTurnDirty={handleTurnDirty}
          />
          <div className='form-error semi-bold'>
            {formData.meses_Aplicado.message}
          </div>
        </div>

        <div className='text-center flex justify-between'>
          <Button onClick={handleBackPage} className='w-50 rounded-xl button-color hover:bg-blue-900 pt-6 pb-6 text-lg'>Voltar</Button>
          <Button type="submit" className='w-50 rounded-xl button-color hover:bg-blue-900 pt-6 pb-6 text-lg'>Alterar</Button>
        </div>
      </form>
    </main>
  );
}