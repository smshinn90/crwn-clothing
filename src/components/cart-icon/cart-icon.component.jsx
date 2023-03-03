import { useContext } from "react";

import "./cart-icon.styles.jsx";

import { CartContext } from "../../context/cart.context";

import { CartIconContainer, ShopIcon, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => setCartOpen(!cartOpen);

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShopIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
