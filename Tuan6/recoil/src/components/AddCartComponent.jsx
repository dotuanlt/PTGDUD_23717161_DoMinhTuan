import React from "react";
import { useRecoilState } from "recoil";
import CartAtom from "../states/CartAtom";

export default function AddCartComponent() {
  const [cart, setCart] = useRecoilState(CartAtom);

  function addToCart(product) {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }

  return (
    <>
      <button
        style={{ margin: "10px" }}
        onClick={() => addToCart({ id: 1, name: "Áo", price: 100 })}
      >
        Add Áo
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() => addToCart({ id: 2, name: "Quần", price: 150 })}
      >
        Add Quần
      </button>
    </>
  );
}
