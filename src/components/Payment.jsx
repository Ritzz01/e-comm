import React from "react";
import { useStateValue } from "./StateProvider";
import BasketItem from "./BasketItem";
import { BasketTotal } from "./reducer";

function Payment({ id, title, imgg, price }) {
  const [{ basket }] = useStateValue();
  const totalPrice = BasketTotal(basket);

  return (
    <div className="bg-gray-50 min-h-screen p-8">

      {/* Delivery Address Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Delivery Address</h1>
        <textarea 
          placeholder="Enter your delivery address..." 
          className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
      </div>

      {/* Basket Items Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Basket</h2>
        <div className="space-y-6">
          {basket.map((item) => (
            <BasketItem
              key={item.id}
              id={item.id}
              title={item.title}
              imgg={item.imgg}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/* Payment Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-700">Subtotal</span>
            <span className="font-semibold text-gray-900">${price}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-700">Shipping</span>
            <span className="font-semibold text-gray-900">$5.99</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-700">Total</span>
            <span className="font-semibold text-gray-900">${(totalPrice + 5.99).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Confirm Order Button */}
      <div className="text-center">
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
         
         
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Payment;
