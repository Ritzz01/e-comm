import React from "react";
import image from "../img/image"; // Ensure you have a valid image path
import { useStateValue } from "./StateProvider";

function Product({ id, title, imgg, price, rating }) {
  const [{basket}, dispatch] = useStateValue();

  //console.log(basket)
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        imgg: imgg,
        price: price,
        rating:rating
      },
    });
  };

  return (
    <div className="flex ">
      <div className="product bg-white p-4 rounded-lg w-80 hover:scale-105 transition-transform duration-300">
        {/* Product Info */}
        <div className="info text-center">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">{title}</h1>

          {/* Product Image */}
          <img
            src={imgg} // Adjust the image path if necessary
            alt="Product Image"
            className="w-40 h-40  mx-auto mb-4 rounded-lg"
          />

          {/* Product Price */}
          <div className="price flex justify-center items-center mb-4">
            <small className="text-gray-500 text-lg">$</small>
            <strong className="text-2xl text-gray-800 ml-1">{price}</strong>
          </div>

          {/* Product Rating */}
          <div className="product_rating mb-4">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return (
                  <span className={`text-yellow-500 text-xl ${i}`}>
                    &#9733;
                  </span>
                );
              })}
          </div>

          {/* Add to Basket Button */}
          <button
            onClick={addToBasket}
            className="w-full py-2 mb-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
