import React from "react";
import { useRecoilState } from "recoil";
import CartAtom from "../states/CartAtom";

export default function CartComponent() {
  var [cart, setCart] = useRecoilState(CartAtom);

  function increase(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrease(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(cart);
  

  return (
    <>
      <div>CartComponent</div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>
            {item.price} x {item.quantity}
          </p>

          <button style={{margin: "10px"}} onClick={() => increase(item.id)}>+</button>
          <button style={{margin: "10px"}} onClick={() => decrease(item.id)}>-</button>
        </div>
      ))}

      <h3>Total: {total}</h3>
    </>
  );
}
