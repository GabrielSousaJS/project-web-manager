import "./styles.css";

import hideIcon from "../../assets/icons/hideIcon.svg";
import showIcon from "../../assets/icons/showIcon.svg";

export function FormPassword(props: any) {
  const {
    className,
    validation,
    invalid = "false",
    dirty = "false",
    onTurnDirty,
    onChangeType,
    ...inputProps
  } = props;

  function handleBlur() {
    onTurnDirty(props.name);
  }

  return (
    <div
      className={`flex justify-between align-middle ${className}`}
      data-dirty={dirty}
      data-invalid={invalid}
    >
      <input
        {...inputProps}
        className="w-full pl-4 pr-4 pt-3 pb-3 rounded-xl password-input placeholder:text-gray-600"
        type={inputProps.type}
        onBlur={handleBlur}
      />
        <button onClick={onChangeType}>
          <img   
            src={inputProps.type === "password" ? hideIcon : showIcon}
            alt=""
          />
        </button>
    </div>
  );
}
