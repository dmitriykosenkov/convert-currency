import { FC } from "react"
import s from "./ExchangeRates.module.css"
import ExchangeForm from "../../components/ExchangeForm/ExchangeForm"
interface PropsType {
   title: string
}
const ExchangeRates: FC<PropsType> = ({title}) => {
   return (
      <div className={s.wrapper}>
         <div className={s.title}>{title}</div>
         <ExchangeForm/>
      </div>
   )
}

export default ExchangeRates
