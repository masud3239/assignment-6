import React from "react";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between mb-3 bg-gray-100 p-3 rounded">

              <div className="flex items-center gap-3">
  
  {/* Left side - Icon */}
  <img 
    src={item.icon} 
    alt="icon" 
    className="w-10 h-10 object-contain"
  />

  {/* Right side - Text */}
  <div className="flex flex-col">
    <span className="font-semibold">{item.name}</span>
    <span className="text-gray-500">${item.price}</span>
  </div>

</div>

              <div>
              
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>

            </div>
          ))}

          {/* <h3 className=" flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-3xl font-bold">Total: ${total}</h3> */}

           <div className=" flex justify-between  text-black p-5 mt-5 rounded-lg text-2xl font-bold">
            <div>Total: </div>
            <div>$ {total}</div>
          </div>

          <button
            onClick={clearCart}
            className="w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white py-2 rounded-lg"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;