import { PropsWithChildren } from "react"
import { CustomClassProps } from "../../typescript/interfaces/global"

function TextLarge(props: PropsWithChildren<CustomClassProps>) {
  return (
    <p className={`${props.customClass} text-xl font-primary`}>{props.children}</p>
  )
}
export default TextLarge