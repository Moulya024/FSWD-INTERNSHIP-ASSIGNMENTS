import { useState } from "react";
import productsData from "./data/products";
import ProductCard from "./components/ProductCard";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = productsData.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category)
    );
  });

  return (
    <div>
      <h1>🛒 Product Listing</h1>

      <Filter setSearch={setSearch} setCategory={setCategory} />

      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
