const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  return (
    // neeus url la /products/dien-thoai-1 thi cat chuoi de lay id
    <div>
      <h1>Chi tiet san pham</h1>
      <p>Product Detail Page for product ID: {slug}</p>
    </div>
  );
};

export default ProductDetailPage;
