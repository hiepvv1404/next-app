import { redirect } from "next/navigation";

const OrdersPage = () => {
  const isLogin = false;
  if (!isLogin) {
    redirect("/products"); // chuyển hướng phía server side
  }
  return (
    <>
      <div>
        <h1>Your Orders</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </>
  );
};

export default OrdersPage;
