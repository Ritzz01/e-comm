import React from "react";
import BasketItem from "./BasketItem";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Header from "./Header";


function Checkout() {
  const [{ basket }] = useStateValue(); // Destructure basket from the state

  return (
    <>
    <Header />
    <div className="bg-yellow-50 min-h-screen p-6 flex justify-center items-start">
      <div className="checkout-item w-full max-w-5xl bg-white shadow-md rounded-lg p-6 flex gap-6">
        {/* Left Side: Basket Items */}
        <div className="basket-items flex-1">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Basket
          </h1>
          <hr className="mb-6" />
          <div className="space-y-4">
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

            {/* 
<Product
          title="Harry Potter"
          price={20.9}
          imgg={image.book}
          rating={3}
        /> */}
          </div>
        </div>

        {/* Right Side: Subtotal */}
        <div className="subtotal w-1/3 h-full bg-gray-100 p-4 rounded-lg shadow-inner">
          <Subtotal />
        </div>
      </div>
    </div>
    </>
  );
}

export default Checkout;
