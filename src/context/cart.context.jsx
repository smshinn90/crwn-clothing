import { createContext, useState } from "react";
import { useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//actual value you want to access
export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  removeWholeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (sum, cartItem) => sum + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);

    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const quantityUp = (checkoutItem) => {
    const itemIndex = cartItems.findIndex((el) => el.id === checkoutItem.id);
    const itemQuantity = cartItems[itemIndex].quantity;

    if (itemQuantity < 99) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === checkoutItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    }
  };

  const quantityDown = (checkoutItem) => {
    const itemIndex = cartItems.findIndex((el) => el.id === checkoutItem.id);
    const itemQuantity = cartItems[itemIndex].quantity;

    if (itemQuantity > 1) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === checkoutItem.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else removeWholeItemFromCart(checkoutItem);
  };

  const removeWholeItemFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== productToRemove.id));
  };

  const value = {
    cartOpen,
    setCartOpen,
    addItemToCart,
    quantityDown,
    quantityUp,
    removeWholeItemFromCart,
    cartItems,
    cartCount,
    setCartCount,
    cartTotal,
    setCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
