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

              <div className="flex flex-col gap-3">
                <span>{item.icon}</span>
                <span>{item.name}</span>
                <div>
                  ${item.price}
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
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;