export default function FormInput(props: any) {
  const {
    validation,
    invalid = "false",
    dirty = "false",
    onTurnDirty,
    className,
    ...inputProps
  } = props;

  function handleBlur() {
    onTurnDirty(props.name);
  }

  return (
    <input
      {...inputProps}
      onBlur={handleBlur}
      data-dirty={dirty}
      data-invalid={invalid}
      className={`${className} placeholder:text-gray-600`}
    />
  );
}
