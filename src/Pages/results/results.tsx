import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Product } from "../../interfaces/products";
import { getSearch } from "../../Services/ProductService";
import ProductList from "../../Components/productList/productList";
import styles from "./results.module.scss";
import Spinner from "../../Components/shared/spinner/spinner";
import ProductPath from "../../Components/productPath/ProductPath";
import { Categories } from "../../interfaces/Categories";

export const Results = () => {
  const [searchParams] = useSearchParams();
  const searchParam = useMemo(
    () => searchParams.get("search") || "",
    [searchParams]
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Array<Product>>([]);
  const [categories, setCategories] = useState<Array<Categories>>([]);

  useEffect(() => {
    if (searchParam) {
      setLoading(true);
      getSearch(searchParam)
        .then((res) => {
          setItems(res.results);
          setCategories(res.filters[0]?.values[0]?.path_from_root);
          setLoading(false);
        })
        .catch((error) => {
          alert(error);
          setLoading(false);
        });
    }
  }, [searchParam]);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (searchParam === "") {
    return <h4 className={styles.noResult}>No hay parametros de busqueda</h4>;
  }

  if (items.length === 0) {
    return <h4 className={styles.noResult}>No hay elementos para mostrar</h4>;
  }

  return (
    <>
      <ProductPath categories={categories}></ProductPath>
      <ProductList products={items}></ProductList>
    </>
  );
};
