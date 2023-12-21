import { PropsWithChildren } from "react";
import { InputProps } from "../typescript/interfaces/global";

function TextInput({ name, icon, ...props }: PropsWithChildren<InputProps>) {
   return (
      <div className="relative flex">
         {icon && <div className="icon w-7 absolute left-5 center-y flex">{icon}</div>}
         <input {...props} className={`${icon && 'form-input-icon'} form-input`} name={name} />
      </div>
   );
}
export default TextInput;
