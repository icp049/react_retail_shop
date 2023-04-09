import { useState } from 'react';
import './style.css';

const products = [
  { name: "Product 1", price: "$10" },
  { name: "Product 2", price: "$20" },
  { name: "Product 3", price: "$30" },
  { name: "Product 4", price: "$10" },
  { name: "Product 5", price: "$20" },
  { name: "Product 6", price: "$30" },
  { name: "Product 7", price: "$10" },
  { name: "Product 8", price: "$20" },
  { name: "Product 9", price: "$30" },

  // add more products as needed
];

export default function Contact() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  }

  return (
    <>
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product" key={product.name} onClick={() => handleProductClick(product)}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup">
          <h3>{selectedProduct.name}</h3>
          <p>{selectedProduct.price}</p>
          <button onClick={() => setSelectedProduct(null)}>Close</button>
        </div>
      )}
    </>
  );
}
