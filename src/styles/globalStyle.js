import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --color-color-primary: #27ae60;
    --color-color-secondary: #eb5757;
    --color-grey-600: #333333;
    --color-grey-300: #828282;
    --color-grey-100: #e0e0e0;
    --color-negative: #e60000; 
    --color-black: #000000;
    --color-white: #ffffff;
    
}

body{
  background: var(--color-white);
  color:var(--color-black);
  
  max-height: 100vh;
  max-width: 100vw;
  
}
button{
  color: var(--color-white);
 cursor: pointer;
   
}
input{
  color: var(--color-black);
  outline: none;
}
#root{
  display:flex;
  flex-direction: column;

  justify-content: flex-start;
  
  gap: 20px;
  box-sizing: border-box;

}

main{
  
  
  position: relative;
  padding-left: clamp(20px , 10vw, 100px);
  padding-right: clamp(20px , 10vw, 100px);
  
  @media (max-width: 768px) {
    padding-left: clamp(20px , 1.25rem, 100px);
  padding-right: clamp(20px , 1.25rem, 100px);
  }
  
}
.loadingContainer{
  display: flex;
  flex-direction:column;

  align-items: center;
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0;
  top: 250px;
}
.loading{
  width: 60px;
  height: 60px;
  border-radius:50%;
  animation: spin 1.2s linear infinite;
 
  &::before,
  &::after{
  content: "";
  position: absolute;
  border-radius: inherit;
  }
  &::before{
    width: 100%;
    height: 100%;
   background-image: 
   linear-gradient(0deg,
    #f0c 0%,
    #80f 100%
    );
  }
    &::after{
      width: 85%;
    height: 85%;
    background:white;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }


}


@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
`