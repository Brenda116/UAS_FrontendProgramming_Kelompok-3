"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const pizzas = [
  { img: "/images/pizza1.png", name: "Margherita" },
  { img: "/images/pizza2.png", name: "Classic Cheese" },
  { img: "/images/pizza3.png", name: "Pepperoni & Mushroom" },
  { img: "/images/pizza4.png", name: "Frutti di Mare" },
  { img: "/images/pizza5.png", name: "Pepperoni" },
];

export default function PizzaCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pizzas.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getPositionStyle = (index: number) => {
    let pos = index - current;
    const total = pizzas.length;

    if (pos < -2) pos += total;
    if (pos > 2) pos -= total;

    if (pos === -2)
      return "z-0 opacity-0 scale-60 -translate-x-[700px]";

    if (pos === -1)
      return "z-10 opacity-30 scale-80 -translate-x-[350px]";

    if (pos === 0)
      return "z-30 opacity-100 scale-100 translate-x-0";

    if (pos === 1)
      return "z-10 opacity-30 scale-80 translate-x-[350px]";

    if (pos === 2)
      return "z-0 opacity-0 scale-60 translate-x-[700px]";

    return "opacity-0";
  };

  return (
    <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {pizzas.map((p, i) => (
        <div
          key={i}
          className={`absolute flex flex-col items-center transition-all duration-700 ease-in-out ${getPositionStyle(i)}`}
        >
          <Image
            src={p.img}
            alt={p.name}
            width={350}
            height={350}
            className="drop-shadow-xl"
          />
          <p className="text-(--cream) text-lg font-bold drop-shadow-md mt-3 transition-opacity duration-500">
            {i === current ? p.name : ""}
          </p>
        </div>
      ))}
    </div>
  );
}