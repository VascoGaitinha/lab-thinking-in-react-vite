import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ListOfProducts from "./ListOfProducts";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <SearchBar list={products} method={setProducts}/>
      <ListOfProducts list={products}/>
    </div>
  );
}

export default ProductsPage;