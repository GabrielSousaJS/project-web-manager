export function update(inputs: any, name: string, newValue: any) {
  if (name === 'telefone') {
      newValue = newValue.replace(/\D/g, '');

      if (newValue.length > 0) {
          newValue = `(${newValue.substring(0, 2)}) ${newValue.substring(2, 7)}-${newValue.substring(7, 11)}`;
      }
  }

  return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

export function updateAll(inputs: any, newValues: any) {
  const newInputs: any = {};

  for (let name in inputs) {
    newInputs[name] = { ...inputs[name], value: newValues[name] };
  }

  return newInputs;
}

export function toValues(inputs: any) {
  const data: any = {};

  for (let name in inputs) {
    data[name] = inputs[name].value;
  }

  return data;
}

export function toValuesPassword(inputs: any) {
  const data: any = {};

  for (let name in inputs) {
    if (name !== "newConfirmationPassword") data[name] = inputs[name].value;
  }

  return data;
}

export function validate(inputs: any, name: string) {
  if (!inputs[name].validation) {
    return inputs;
  }

  const isInvalid = !inputs[name].validation(inputs[name].value);

  return {
    ...inputs,
    [name]: { ...inputs[name], invalid: String(isInvalid) },
  };
}

export function toDirty(inputs: any, name: string) {
  return { ...inputs, [name]: { ...inputs[name], dirty: "true" } };
}

export function updateAndValidate(inputs: any, name: string, newValue: any) {
  const dataUpdated = update(inputs, name, newValue);
  const dataValidated = validate(dataUpdated, name);
  return dataValidated;
}

export function dirtyAndValidate(inputs: any, name: string) {
  const dataDirty = toDirty(inputs, name);
  const dataValidated = validate(dataDirty, name);
  return dataValidated;
}

export function toDirtyAll(inputs: any) {
  const newInputs: any = {};

  for (let name in inputs) {
    newInputs[name] = { ...inputs[name], dirty: "true" };
  }

  return newInputs;
}

export function validateAll(inputs: any) {
  const newInputs: any = {};

  for (let name in inputs) {
    if (inputs[name].validation) {
      const isInvalid = !inputs[name].validation(inputs[name].value);
      newInputs[name] = { ...inputs[name], invalid: String(isInvalid) };
    } else newInputs[name] = { ...inputs[name] };
  }

  return newInputs;
}

export function dirtyAndValidateAll(inputs: any) {
  return validateAll(toDirtyAll(inputs));
}

export function hasAnyInvalid(inputs: any) {
  for (let name in inputs) {
    if (inputs[name].dirty === "true" && inputs[name].invalid === "true") {
      return true;
    }
  }

  return false;
}

export function changeType(inputs: any, name: string) {
  if (inputs[name].type === "password") {
    return { ...inputs, [name]: { ...inputs[name], type: "text" } };
  } else {
    return { ...inputs, [name]: { ...inputs[name], type: "password" } };
  }
}