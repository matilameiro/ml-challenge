import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Product } from "../../interfaces/products";
import { getSearch } from "../../Services/ProductService";
import ProductList from "../../Components/productList/productList";
import styles from "./results.module.scss";
import Spinner from "../../Components/shared/spinner/spinner";

export const Results = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string | null>("");
  const [items, setItems] = useState<Array<Product>>([]);

  useEffect(() => {
    let searchParam = searchParams.get("search") || "";
    setSearch(searchParams.get("search"));
    if (searchParam) {
      setLoading(true);
      getSearch(searchParam).then(({ data }) => {
        console.log(data.results);
        setItems(data.results);
        setLoading(false);
      });
    }
  }, [searchParams, search]);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (search === "") {
    return <h4 className={styles.noResult}>No hay parametros de búsqueda</h4>;
  }

  if (items.length === 0) {
    return <h4 className={styles.noResult}>No hay elementos para mostrar</h4>;
  }

  return <ProductList products={items}></ProductList>;
};
