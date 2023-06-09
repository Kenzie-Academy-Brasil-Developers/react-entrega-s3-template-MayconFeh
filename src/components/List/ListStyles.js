import { styled } from "styled-components";

export const StyledUl=styled.ul`
  display: flex;
  flex-direction: row;
  align-items:center;
  
  
 
  gap: 20px;
  overflow-x: auto;

  @media (min-width: 769px) {
    flex-wrap:wrap;
  }
  
`

export const StyledList=styled.li`
  height: 326px;
  width: 244px;
  border: 2px solid var(--color-grey-100);
  border-radius: 5px;
  transition: 0.6s;
  min-width: 244px;
  @media (max-width: 768px) {
    min-width: 300px;
  }

 

  &:hover{
    border: 2px solid var(--color-color-primary);
  }
  .contImg{
    display: flex;
  align-items:center;
  flex-direction: column;
  justify-content: center;
  background: var(--color-grey-100);
  }
  h3{
    line-height: 0.875rem;
  }
  .contInfo{
   padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 6px

   
  }
  .price{
    color: var(--color-color-primary);
  }
  >div{
    height: 50%;
  }
  div>img{
    width: 150px;
    height: 150px;
  }

  button{
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 106px;
    height: 40px;

    background: var(--color-grey-300);


    border: 2px solid var(--color-grey-300);
    border-radius: 8px;

    transition: 0.6s;

    &:hover{
    background: var(--color-color-primary);
    border: 2px solid var(--color-color-primary);
  }
  }
`
