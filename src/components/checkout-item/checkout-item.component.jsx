import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  const { removeWholeItemFromCart, quantityUp, quantityDown } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <img className="checkout-col col-image" src={imageUrl} alt={name} />
      <span className="checkout-col">{name}</span>
      <span className="checkout-col">
        <strong
          className="item-quantity clickable"
          onClick={() => quantityDown(checkoutItem)}
        >
          &lt;
        </strong>
        {quantity}
        <strong
          className="item-quantity clickable"
          onClick={() => quantityUp(checkoutItem)}
        >
          &gt;
        </strong>
      </span>
      <span className="checkout-col">{price * quantity}</span>
      <span className="checkout-col" style={{ fontSize: "1.5rem" }}>
        <strong
          className="clickable"
          onClick={() => removeWholeItemFromCart(checkoutItem)}
        >
          X
        </strong>
      </span>
    </div>
  );
};

export default CheckoutItem;
