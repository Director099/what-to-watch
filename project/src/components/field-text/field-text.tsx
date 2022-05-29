import React, {FC} from "react";

interface IFieldText {
  text: string,
  name: string,
  type: string
}

export const FieldText: FC<IFieldText> = ({text, name, type}) => {
  return (
    <div className="sign-in__field">
      <input className="sign-in__input" type={type} placeholder={text} name={name}
             id={name} />
      <label className="sign-in__label visually-hidden" htmlFor={name}>{text}</label>
    </div>
  )
}
