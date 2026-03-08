import React from "react";
import {Link} from "react-router-dom";


function Home ()  {
  const getStart = () => {
    alert("Welcome!");
  };

  return (
    <div>

    
      <section style={{
        textAlign:"center",
        padding:"80px",
        background:"linear-gradient(to right,#667eea,#764ba2)",
        color:"white"
      }}>
        <h1>Welcome to My Website</h1>
        <p>Enjoy the shoppin with us.....</p>
        <Link to="/login" style={{ textDecoration: 'none' }}>
        
        <button onClick={getStart} 
        style={{
          padding:"10px 20px",
          border:"none",
          background:"white",
          color:"#333",
          marginTop:"20px"
        }}>
          Get Started
        </button>
        </Link>
      </section>

      {/* Features */}
      <section style={{
        display:"flex",
        justifyContent:"space-around",
        padding:"60px"
      }}>

        <div style={{
          width:"250px",
          padding:"20px",
          boxShadow:"0 0 10px #ccc",
          textAlign:"center"
        }}>
          <h3>Electroincs</h3>
          <p>All Electroincs Are Available here.</p>
        </div>

        <div style={{
          width:"250px",
          padding:"20px",
          boxShadow:"0 0 10px #ccc",
          textAlign:"center"
        }}>
          <h3>Groceries</h3>
          <p>Find All Groceries.</p>
        </div>

        <div style={{
          width:"250px",
          padding:"20px",
          boxShadow:"0 0 10px #ccc",
          textAlign:"center"
        }}>
          <h3>Fshion</h3>
          <p>Style and enjoy yourself.</p>
        </div>

      </section>

      
      <footer style={{
        background:"#333",
        color:"white",
        textAlign:"center",
        padding:"20px"
      }}>
        <p>© 2026 My React Website</p>
      </footer>

    </div>
  );
}

export default Home;