import { Reset } from "./styles/reset"
import { GlobalStyles } from "./styles/globalStyle"
import { Header } from "./components/Header/Index"
import { List } from "./components/List/Index"
import { useEffect, useState } from "react"
import { Modal } from "./components/Modal/Index"


export const App = () => {

  const [isOpen , setIsOpen] = useState(false)
  const [inputSearch , setInputSearch] = useState('')
  const [products , setPorducts] = useState ([])
  const [productCart , setProductCart] = useState([])
  const [valueCart , setValueCart] = useState(0)
  
  const addToCart = (product) => {
    const hasProduct = productCart.find((item) => item.id === product.id)

    if ( hasProduct ) {
      const cartUpdate = productCart.map((item) => {
        if (item.id === product.id) {
          return {...item, amount: item.amount + 1}
        }
        return item;
      })
      setProductCart(cartUpdate);
    } else {
      const cartUpdate = {...product, amount: 1}
      setProductCart([...productCart, cartUpdate])
    }
  }
  const removeToCart = (product) => {
    const cartUpdate = productCart.filter(item => item.id !== product.id)
    setProductCart(cartUpdate)
  }

  useEffect(()=>{
    const totalCalc = () =>{
      const value = productCart.reduce((total,item)=>total+(item.price*item.amount),0)
      setValueCart(value)
    }
    totalCalc()
  },[productCart])

  const filterList = products.filter(
    products => products.name.toUpperCase().includes(inputSearch.toUpperCase()) || 
    products.category.toUpperCase().includes(inputSearch.toUpperCase())
  )

  return (
    <>
      <Reset/>
      <GlobalStyles/>
      <Header setIsOpen={setIsOpen} setInputSearch={setInputSearch}/>
      <main>
        <List products={products} setPorducts={setPorducts} filterList={filterList} addToCart={addToCart}/>
        {isOpen ? <Modal valueCart={valueCart} setProductCart={setProductCart} removeToCart={removeToCart} productCart={productCart} setIsOpen={setIsOpen}/>: null  }
      </main>
    </>
  )
}

