import { useState, useMemo } from "react";

function App() {
  const products = generateProducts();

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  console.time("filter");

  function generateProducts() {
    const arr = [];
    for (let i = 1; i <= 1000; i++) {
      arr.push({
        id: i,
        name: "Product " + i,
        price: Math.floor(Math.random() * 1000),
      });
    }
    return arr;
  }

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(search.toLowerCase());

      const matchMin = minPrice === "" || p.price >= minPrice;
      const matchMax = maxPrice === "" || p.price <= maxPrice;

      return matchName && matchMin && matchMax;
    });
  }, [search, minPrice, maxPrice]);

  console.timeEnd("filter");

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return (
    <div>
      <h2>Product Filter</h2>

      <div style={{border: "1px solid", margin: "auto", padding: "40px", width: "50%"}}>
        <div style={{margin: "10px"}}>
          <span>Product name: </span>
          <input
            placeholder="Search name..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div style={{margin: "10px"}}>
          <span>Min price: </span>
          <input
            placeholder="Min price"
            type="number"
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>

        <div style={{margin: "10px"}}>
          <span>Max price: </span>
          <input
            placeholder="Max price"
            type="number"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <h3>Total products: {filteredProducts.length}</h3>

      <h3>Total price: {totalPrice}</h3>

    <div style={{margin: "auto", width: "30%"}}>
      <ul>
        {filteredProducts.slice(0, 30).map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
      
    </div>
  );
}

export default App;
