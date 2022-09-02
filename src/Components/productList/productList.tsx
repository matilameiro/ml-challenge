import { useNavigate } from "react-router-dom";
import { Product } from "../../interfaces/products";
import { ProductItem } from "../productItem/productItem";
import styles from "./productList.module.scss";

type Props = {
  products: Array<Product>;
};

const ProductList = ({ products }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = (id: string) => {
    navigate(`/items/${id}`);
  };

  return (
    <>
      {products.map((product: Product, index) => {
        return (
          <div key={product.id} className={styles.productItem}>
            <ProductItem item={product} onClick={handleOnClick}></ProductItem>
            {index !== products.length - 1 && <hr className={styles.line} />}
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
