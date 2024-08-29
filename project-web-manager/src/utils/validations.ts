export function lengthDefaultValidation(value: string): boolean {
  return /^.{3,}$/.test(value);
}

export function phoneValidation(value: string): boolean {
  return /^\(\d{2}\) \d{5}-\d{4}$/.test(value);
}

export function birthDateValidation(value: string): boolean {
  const date = new Date(value);
  const currentDate = new Date();
  const eighteenYearsAgo = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  if (date <= eighteenYearsAgo) return true;
  else return false;
}

export function emailValidation(value: string): boolean {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
}

export function passwordValidation(value: string): boolean {
  return /^.{8,}$/.test(value);
}

export function hasSameFields(inputs: any) {
  return inputs.newPassword.value === inputs.newConfirmationPassword.value;
}

export function fieldsAreFilled(inputs: any) {
  for (let name in inputs) {
    if (inputs[name].value !== "") return true;
  }

  return false;
}

export function validateUpdatePassword(inputs: any) {
  return hasSameFields(inputs) && fieldsAreFilled(inputs);
}