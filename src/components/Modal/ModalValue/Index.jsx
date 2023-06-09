import { StyledSpan, StyledText } from "../../../styles/typography"
import { StyledValue } from "./ModalValueStyles"




export const TotalValue = ({setProductCart,valueCart})=>{
  return(
    <StyledValue>
      <div>
        <StyledText>Total</StyledText>
        <StyledSpan>{
        valueCart.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}</StyledSpan>
      </div>
      <button onClick={()=>{setProductCart([])}} >Remover Tudo</button>
    </StyledValue>
  )
}