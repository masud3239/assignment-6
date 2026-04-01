import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <div className="text-3xl"> {<img 
  src={product.icon} 
  alt="icon" 
  style={{ width: "40px", height: "40px", objectFit: "contain" }} 
/>}</div>

      <h2 className="font-bold text-lg mt-2">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.description}</p>

      <h3 className="text-xl font-bold mt-2">
        ${product.price}/{product.period}
      </h3>

      <ul className="text-sm mt-2">
        {product.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <button
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-full"
      >
        Buy Now
      </button>

    </div>
  );
};

export default ProductCard;