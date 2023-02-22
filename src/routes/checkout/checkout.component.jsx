import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      {cartItems.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        cartItems.map((cartItem) => (
          <CheckoutItem checkoutItem={cartItem} key={cartItem.id} />
        ))
      )}
      <div>{cartTotal}</div>
    </div>
  );
};

export default Checkout;
