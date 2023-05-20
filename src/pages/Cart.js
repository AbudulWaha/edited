import { useSelector } from "react-redux";

import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
 const products = useSelector(state=> state.cartState.cartList)
 const Total = useSelector(state=> state.cartState.total)
  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length} / ${Total}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
