import { Product } from "../../interfaces/products";
import shippingIcon from "../../Assets/ic_shipping.png";
import styles from "./productItem.module.scss";
import { currencyFormat } from "../../utils/currencyFormat";

type Props = {
  item: Product;
  onClick: (id: string) => void;
};

export const ProductItem = ({ item, onClick }: Props) => {
  return (
    <div onClick={() => onClick(item.id)} className={styles.productItem}>
      <div className={styles.productItem__img_container}>
        <img src={item.thumbnail} alt="imagen del producto" />
      </div>
      <div className={styles.productItem__description}>
        <div className={styles.productItem__description__header}>
          <div>
            <span className={styles.productItem__description__header__price}>
              {currencyFormat(Number(item.price))}
            </span>
            {item.shipping.free_shipping && (
              <img src={shippingIcon} alt="Icono de shipping" />
            )}
          </div>
          <span className={styles.productItem__description__header__address}>
            {item.address.state_name}
          </span>
        </div>
        <div className={styles.productItem__description__title}>
          <span>{item.title}</span>
        </div>
      </div>
    </div>
  );
};
