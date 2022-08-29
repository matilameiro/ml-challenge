import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDescription } from "../../interfaces/product-description";
import { ProductDetail } from "../../interfaces/product-detail";
import { getDescription, getDetail } from "../../Services/ProductService";
import { currencyFormat } from "../../utils/currencyFormat";
import styles from "./detail.module.scss";

const CONDITIONS = {
  new: "Nuevo",
  used: "Usado",
};

export const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const [detail, setDetail] = useState<ProductDetail>();
  const [description, setDescription] = useState<ProductDescription>();

  useEffect(() => {
    if (id) {
      getDetail(id).then(({ data }) => {
        console.log(data);
        setDetail(data);
      });
      getDescription(id).then(({ data }) => {
        console.log(data);
        setDescription(data);
      });
    }
  }, [id]);

  if (!detail) {
    <h3>No se encontro detalle del producto.</h3>;
  }

  // TODO: pasar a utils y arreglar tipado
  const getCondition = (condition: string) => {
    let cond = condition as "new" | "used";
    return CONDITIONS[cond];
  };

  return (
    <div className={styles.detail}>
      <div className={styles.detail__resume}>
        <div className={styles.detail__resume__img_container}>
          <img src={detail?.pictures[0].url} alt="imagen producto" />
        </div>
        <div className={styles.detail__resume__title_and_price}>
          <span
            className={styles.detail__resume__title_and_price__sold_quantity}
          >{`${getCondition(detail?.condition as string)} - ${
            detail?.sold_quantity
          } vendidos`}</span>
          <span className={styles.detail__resume__title_and_price__title}>
            {detail?.title}
          </span>
          <span className={styles.detail__resume__title_and_price__price}>
            {currencyFormat(Number(detail?.price))}
          </span>
          <button>COMPRAR</button>
        </div>
      </div>
      <div className={styles.detail__description}>
        <span className={styles.detail__description__title}>
          Descripción del producto
        </span>
        <p>{description?.plain_text}</p>
      </div>
    </div>
  );
};
