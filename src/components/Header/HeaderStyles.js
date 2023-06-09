import { styled } from "styled-components";

export const HeaderStyled = styled.header`
width: 100%;
height: 88px;
display:flex;
align-items:center;
flex-direction:row;
gap: 20px;
justify-content:space-between;
background: var(--color-grey-100);
  padding:20px;
  padding-left: clamp(20px , 10vw, 100px);
  padding-right: clamp(20px , 10vw, 100px);

  @media (max-width: 768px) {
    padding-left: clamp(20px , 1.25rem, 100px);
    padding-right: clamp(20px , 1.25rem, 100px);
  height: 152px;
  flex-direction: column;
  align-items:flex-start;
  }

  span{
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    color: var(--color-color-secondary);
  }


  div>input{
    box-sizing: border-box;

    width: 382px;
    height: 60px;

    border: 2px solid var(--color-grey-100);
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 70px 0px 25px;
    gap: 115px;
    @media (max-width:768px) {
      width: 100%;
   
    }


 
  }
  .container{
    position: relative;
    

  @media (max-width:768px) {
    width: 100%;
  }  
  }
  .icon{
    position: absolute;
    right: 400px;
    top: 15px;
    height: 25px;
    width: 25px;
    color: var(--color-grey-300);
    cursor: pointer;


    @media (max-width:768px){
      right: 5px;
      top: -25px;
    }
  }
  button{
    box-sizing: border-box;


    position: absolute;
    right: 10px;
    top: 10px;

    width: 53px;
    height: 40px;

    background: #27AE60;
    border: 2px solid #27AE60;
    border-radius: 8px;

    .iconSearch{
      width: 20px;
      height: 32px;
      
    }
  }

`