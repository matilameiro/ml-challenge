import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductPath from "../../Components/productPath/ProductPath";
import Spinner from "../../Components/shared/spinner/spinner";
import { Categories } from "../../interfaces/Categories";
import { ProductDescription } from "../../interfaces/product-description";
import { ProductDetail } from "../../interfaces/product-detail";
import { getPathFromRoot } from "../../Services/CategorieService";
import { getDescription, getDetail } from "../../Services/ProductService";
import { getConditionDescription } from "../../utils/conditionDescription";
import { currencyFormat } from "../../utils/currencyFormat";
import styles from "./detail.module.scss";

export const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<ProductDetail>();
  const [description, setDescription] = useState<ProductDescription>();
  const [categories, setCategories] = useState<Array<Categories>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getDetail(id)
        .then((res) => {
          setDetail(res);
          setLoading(false);

          getPathFromRoot(res.category_id)
            .then((categories) => {
              setCategories(categories);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          alert(error);
        });

      // TODO: se podría poner en un promiseAll pero decidí que si no hay descripcion, no debería afectar la visualización.
      getDescription(id)
        .then((res) => {
          setDescription(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!detail) {
    <h3>No se encontro detalle del producto.</h3>;
  }

  return (
    <>
      <ProductPath categories={categories}></ProductPath>
      <div className={styles.detail}>
        <div className={styles.detail__resume}>
          <div className={styles.detail__resume__img_container}>
            <img src={detail?.pictures[0].url} alt="imagen producto" />
          </div>
          <div className={styles.detail__resume__title_and_price}>
            <span
              className={styles.detail__resume__title_and_price__sold_quantity}
            >{`${getConditionDescription(detail?.condition as string)} - ${
              detail?.sold_quantity
            } vendidos`}</span>
            <span className={styles.detail__resume__title_and_price__title}>
              {detail?.title}
            </span>
            <span className={styles.detail__resume__title_and_price__price}>
              {currencyFormat(Number(detail?.price))}
            </span>
            <button type="button">COMPRAR</button>
          </div>
        </div>
        <div className={styles.detail__description}>
          <span className={styles.detail__description__title}>
            Descripción del producto
          </span>
          {description ? (
            <p>{description?.plain_text}</p>
          ) : (
            <p>No se encontró descripción del producto</p>
          )}
        </div>
      </div>
    </>
  );
};
