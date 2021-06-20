//Filter products
export const filterProducts = (
  products: any,
  category: string,
  condition: string
) => {
  return products.filter(
    (product: any) => product.category === category && product[condition]
  );
};
