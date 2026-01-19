"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Button = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const search = useSearchParams(); // chỉ dùng ở client
  const status = search.get("status");
  const keyword = search.get("keyword");
  console.log("Status from Button component:", status);
  console.log("Keyword from Button component:", keyword);
  return (
    <div>
      <button className="btn btn-primary" onClick={() => handleClick()}>
        Click me {clicked ? "Clicked" : "Not Clicked"}
      </button>
    </div>
  );
};

export default Button;
