import { useEffect, useState } from "react";
import * as validation from '../../../../../utils/validations';
import * as forms from '../../../../../utils/forms';
import { useNavigate } from "react-router-dom";
import logo from '../../../../../assets/images/short-logo.png';
import FormInput from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import * as formatters from '../../../../../utils/formatters';
import * as pagamentoService from '../../../../../services/pagamentos-service';
import { ResponseShortInvestidorJson } from "@/models/investidor";
import * as investidoresService from '../../../../../services/investidores-services';
import FormSelect from "@/components/FormSelect";

export function FormPagamento() {
  const [investidoresAtivos, setInvestidoresAtivos] = useState<ResponseShortInvestidorJson[]>();

  const [formData, setFormData] = useState({
    grupo: {
      value: "",
      id: "grupo",
      name: "grupo",
      type: "text",
      placeholder: "Grupo",
      validation: function (value: string) {
        return validation.lengthDefaultValidation(value);
      },
      message: "Grupo deve ter no mínimo 3 caracteres.",
    },
    porcentagem_Pagamento: {
      value: "",
      id: "porcentagem_Pagamento",
      name: "porcentagem_Pagamento",
      type: "number",
      placeholder: "Porcentagem Pagamento",
      validation: function (value: string) {
        return Number(value) > 0;
      },
      message: "Porcentagem de pagamento deve ser maior que zero.",
    },
    quantidade_Contemplados: {
      value: "",
      id: "quantidade_Contemplados",
      name: "quantidade_Contemplados",
      type: "number",
      placeholder: "Quantidade de contemplados",
      validation: function (value: string) {
        return Number(value) > 0;
      },
      message: "Quantidade de contemplados deve ser maior que zero.",
    },
    total_Pago: {
      value: "",
      id: "total_Pago",
      name: "total_Pago",
      type: "number",
      placeholder: "Total Pago",
      validation: function (value: string) {
        return Number(value) > 0;
      },
      message: "Total pago deve ser maior que zero.",
    },
    status: {
      value: "",
      id: "status",
      name: "status",
      type: "text",
      placeholder: "Status",
      validation: function (value: string) {
        return value === 'Agendado' || value === 'Realizado';
      },
      message: "Status deve ser Agendado ou Realizado.",
    },
    data_Pagamento: {
      value: "",
      id: "data_Pagamento",
      name: "data_Pagamento",
      type: "text",
      placeholder: "Data de Pagamento",
      validation: function (value: string) {
        return value.length > 0;
      },
      message: "Data de pagamento não pode ser vazia.",
    },
    id_Investidor: {
      value: [],
      id: 'id_Investidor',
      name: 'id_Investidor',
      type: 'number',
      placeholder: 'Investidor',
    }
  });

  useEffect(() => {
    getInvestidoresAtivos();
  }, [])

  function getInvestidoresAtivos() {
    investidoresService.getAllInvestidoresAtivos().then((response) => {
      setInvestidoresAtivos(response.data.investidores);
    })
  }

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

    requestBody.data_Pagamento = formatters.convertData(requestBody.data_Pagamento);

    requestBody.id_Investidor = requestBody.id_Investidor.id_Investidor;

    console.log(requestBody)

    let request = pagamentoService.addPagamento(requestBody);

    request.then(() => {
      navigate('/cliente/pagamentos')
    })
  }

  return (
    <main className='modal-center-box p-4 rounded-xl'>
      <div className='flex justify-center mb-4'>
        <img src={logo} alt="Logo RSX Capital" />
      </div>

      <div className='mb-4'>
        <h4 className='text-3xl'>Adicionar Pagamento</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <FormSelect
            {...formData.id_Investidor}
            className='form-control'
            options={investidoresAtivos}
            onChange={(obj: any) => {
              const newFormData = forms.updateAndValidate(
                formData,
                'id_Investidor',
                obj
              );
              setFormData(newFormData);
            }}
            getOptionLabel={(obj: any) => `${obj.nome} ${obj.sobrenome}`}
            getOptionValue={(obj: any) => String(obj.id_Investidor)}
            onTurnDirty={handleTurnDirty}
          />
        </div>
        <div className="mb-4">
          <FormInput
            {...formData.grupo}
            className="w-full pl-4 pr-4 pt-3 pb-3 rounded-xl form-control base-input"
            onChange={handleInputChange}
            onTurnDirty={handleTurnDirty}
          />
          <div className="form-error semi-bold">
            {formData.grupo.message}
          </div>
        </div>

        <div className="mb-4">
          <FormInput
            {...formData.porcentagem_Pagamento}
            className="w-full pl-4 pr-4 pt-3 pb-3 rounded-xl form-control base-input"
            onChange={handleInputChange}
            onTurnDirty={handleTurnDirty}
          />
          <div className="form-error semi-bold">
            {formData.porcentagem_Pagamento.message}
          </div>
        </div>

        <div className="mb-4">
          <FormInput
            {...formData.quantidade_Contemplados}
            className="w-full pl-4 pr-4 pt-3 pb-3 rounded-xl form-control base-input"
            onChange={handleInputChange}
            onTurnDirty={handleTurnDirty}
          />
          <div className="form-error semi-bold">
            {formData.quantidade_Contemplados.message}
          </div>
        </div>

        <div className="mb-4">
          <FormInput
            {...formData.total_Pago}
            className="w-full pl-4 pr-4 pt-3 pb-3 rounded-xl form-control base-input"
            onChange={handleInputChange}
            onTurnDirty={handleTurnDirty}
          />
          <div className="form-error semi-bold">
            {formData.total_Pago.message}
          </div>
        </div>

        <div className="mb-4">
          <FormInput
            {...formData.status}
            className="w-full pl-4 pr-4 pt-3 pb-3 rounded-xl form-control base-input"
            onChange={handleInputChange}
            onTurnDirty={handleTurnDirty}
          />
          <div className="form-error semi-bold">
            {formData.status.message}
          </div>
        </div>

        <div className="mb-4">
          <FormInput
            {...formData.data_Pagamento}
            className="w-full pl-4 pr-4 pt-3 pb-3 rounded-xl form-control base-input"
            onChange={handleInputChange}
            onTurnDirty={handleTurnDirty}
          />
          <div className="form-error semi-bold">
            {formData.data_Pagamento.message}
          </div>
        </div>

        <div className='text-center flex justify-between'>
          <Button onClick={handleBackPage} className='w-50 rounded-xl button-color hover:bg-blue-900 pt-6 pb-6 text-lg'>Voltar</Button>
          <Button type="submit" className='w-50 rounded-xl button-color hover:bg-blue-900 pt-6 pb-6 text-lg'>Adicionar</Button>
        </div>
      </form>
    </main>
  );
}