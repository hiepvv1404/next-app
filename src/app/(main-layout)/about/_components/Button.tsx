"use client";

import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/products"); //navigate ở client side
  };
  return (
    <>
      <button className="btn btn-primary" onClick={handleNavigate}>
        Go product
      </button>
    </>
  );
};
export default Button;
