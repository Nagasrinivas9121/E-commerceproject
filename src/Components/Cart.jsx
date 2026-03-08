import { useContext } from "react";
import {CartContext} from "./CartContext";

import ProductDetails from "./Details";



function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart Page</h1>

      {cart.length===0 ?(<p>Cart is empty</p>) : (
      cart.map((product,index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      )))}
    </div>
  );
}

export default Cart;