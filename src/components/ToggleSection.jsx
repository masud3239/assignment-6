import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { toast } from "react-toastify";

const ToggleSection = ({ setCartCount }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [tab, setTab] = useState("products");

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartCount(prev => prev + 1);
    toast.success("Added to cart 🛒");
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    setCartCount(prev => prev - 1);
    toast.error("Removed ❌");
  };

  const clearCart = () => {
    setCart([]);
    setCartCount(0);
    toast.info("Checkout done 🎉");
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-5xl text-[#101727] font-extrabold mb-3">Premium Digital Tools</h2>
        <p className="text-[16px] text-[#627382]">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => setTab("products")} className="btn w-60 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white">Products</button>
        <button onClick={() => setTab("cart")} className="btn w-60 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
          Cart ({cart.length})
        </button>
      </div>

      {/* Products */}
      {tab === "products" && (
        <div className="grid md:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      )}

      {/* Cart */}
      {tab === "cart" && (
        <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      )}
    </div>
  );
};

export default ToggleSection;