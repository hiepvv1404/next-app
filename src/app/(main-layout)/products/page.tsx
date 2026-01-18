import Button from "./_components/Button";
import ProductsListPage from "./_components/ProductList";

const ProductPage = () => {
  return (
    <div>
      <h3>Product Page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum
        optio illo esse asperiores doloribus commodi et saepe ipsum repudiandae?
        Officia voluptate dicta voluptatibus neque doloremque molestiae in
        repudiandae dignissimos.
      </p>
      <ProductsListPage />
      <Button />
    </div>
  );
};

export default ProductPage;
//page mac dinh la server component, cac component con duoc goi o page cung la server component
//neu muon su dung client component thi them 'use client' o dau file
