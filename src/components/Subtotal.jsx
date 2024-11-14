import React from "react";
import { NumericFormat } from "react-number-format";  // Corrected import
import { useStateValue } from "./StateProvider";
import { BasketTotal } from "./reducer";
import { Link } from "react-router-dom";


function Subtotal() {
  const [{ basket }] = useStateValue();

  // Calculate the total price using BasketTotal function
  const totalPrice = BasketTotal(basket);

  return (
    <div>
      <h1 className="text-lg font-medium text-gray-700 mb-4">
        Subtotal ({basket.length} items):{" "}
        <NumericFormat
          value={totalPrice}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      </h1>

<Link to ="/payment">

      <button className="bg-yellow-500 text-white p-2 rounded-lg">
        Proceed to Checkout
      </button>
</Link>
    </div>
  );
}

export default Subtotal;
