import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <div className="text-3xl">{product.icon}</div>

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
        className="w-full mt-4 bg-purple-600 text-white py-2 rounded"
      >
        Buy Now
      </button>

    </div>
  );
};

export default ProductCard;