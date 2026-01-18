"use client";
import { useState } from "react";

const Button = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={() => handleClick()}>
        Click me {clicked ? "Clicked" : "Not Clicked"}
      </button>
    </div>
  );
};

export default Button;
