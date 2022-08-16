import React from "react";
import Search from "./Search";

function Products() {
  return (
    <div className="Products">
      
        <h3>Products</h3>
      <Search />
      <a href="http://localhost:4000/animals" className="btn">Animals</a> <br />
      <a href="http://localhost:4000/items" className="btn">Accessories</a>
    </div>
  );
}

export default Products;
