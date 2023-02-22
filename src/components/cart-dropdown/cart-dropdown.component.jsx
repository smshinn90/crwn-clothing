import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
