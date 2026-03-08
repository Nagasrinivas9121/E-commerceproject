import {useState} from "react";
import {useContext} from "react";
import {Link} from "react-router-dom";
import { CartContext } from "../Components/CartContext";

function ProductDetails() {
  const { addToCart } = useContext(CartContext);
const products = [
  { id:1, name:"Laptop", price:50000 ,description: "Powerful performance for work and play."},
  { id:2, name:"Mobile", price:20000 ,description: "Latest model with great features." },
  { id:3, name:"Headphones", price:2000 ,description: "Noise-cancelling headphones for immersive sound." },
  {id:4,name: "Wireless Earbuds", price: "₹1999",description: "High-quality sound with noise cancellation."},
  { id:5, name:"Smart Watch", price:5000,description: "Tracks heart rate, steps, and notifications." }
];
 return (
<div>

<h1 style={{textAlign:"center"}}>Our Products</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px",
padding:"40px"
}}>

{products.map((product)=>(
<div key={product.id}
style={{
border:"1px solid #cccccc",
padding:"20px",
textAlign:"center"
}}>

<h3>{product.name}</h3>
<p>Price: ₹{product.price}</p>
 <p>{product.description}</p>

<button  onClick={addToCart}
 
        style={{
          padding:"10px 20px",
          backgroundColor:"green",
          color:"white",
          border:"none",
          borderRadius:"5px",
          cursor:"pointer"
        }}>Add to Cart</button>
        <Link to="/cart"  style={{ textDecoration: 'none' }}>
        <button style={{
          padding:"10px 20px",
          backgroundColor:"blue",
          color:"white",
          border:"none",
          borderRadius:"5px",
          cursor:"pointer"
        }}>
          View Cart
        </button> 
        </Link>

</div>
))}

</div>

</div>
);
}

export default ProductDetails;