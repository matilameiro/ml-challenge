import { useEffect, useState } from "react";
import { Categories } from "../../interfaces/Categories";
import styles from "./ProductPath.module.scss";

type Props = {
  categories: Array<Categories>;
};

const ProductPath = ({ categories }: Props) => {
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    if (categories) {
      const pathList: Array<string> = [];
      categories.forEach((categorie) => {
        pathList.push(categorie.name);
      });
      setPath(pathList.join(" > "));
    }
  }, [categories]);

  if (path === "") {
    return null;
  }

  return <div className={styles.path}>{path}</div>;
};

export default ProductPath;
