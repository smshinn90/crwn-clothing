import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  Value,
  Arrow,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  const { removeWholeItemFromCart, quantityUp, quantityDown } =
    useContext(CartContext);

  const removeWholeItemFromCartHandler = () =>
    removeWholeItemFromCart(checkoutItem);
  const quantityUpHandler = () => quantityUp(checkoutItem);
  const quantityDownHandler = () => quantityDown(checkoutItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={quantityDownHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={quantityUpHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={removeWholeItemFromCartHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
