import { useEffect, useState } from "react";
import { StyledList,StyledUl } from "./ListStyles";
import { api } from "../../services/api";
import { StyledH3, StyledLabelBold, StyledSpan } from "../../styles/typography";

export const List = ({ setPorducts , filterList , addToCart}) => {
  
  const [isLoading , setIsLoading] = useState(true)
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await api.get("/products")
        setPorducts(res.data)
      } catch (error) {
        console.log(error);
      } finally {
         setIsLoading(false)
      }
    }
    getProducts()

  },[])

  if(isLoading){
    return(
      <div className="loadingContainer">
        <div className="loading"></div>
      </div>
      )
  }
  
  return(
    <StyledUl>
      { filterList.map((products)=> 
      <StyledList key={products.id}>
        <div className="contImg">
          <img src={products.img} alt="" />
        </div>
        <div className="contInfo">
          <StyledH3>{products.name}</StyledH3>
          <StyledSpan>{products.category}</StyledSpan>
          <StyledLabelBold className="price">
            {products.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            })}
            </StyledLabelBold>
          <button onClick={()=> {addToCart(products)}}>Adicionar</button>
        </div>
      </StyledList>)}

    </StyledUl>
  )

}