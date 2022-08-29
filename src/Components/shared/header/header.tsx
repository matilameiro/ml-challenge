import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./header.module.scss";
import searchIcon from "../../../Assets/ic_Search.png";

export const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/items?search=${search}`);
  };

  const onChange = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    setSearch(value);
  };

  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <div>
          <a className={style.header__logo} href="/" tabIndex={2}>
            Mercado Libre Argentina - Donde comprar y vender de todo
          </a>
        </div>
        <form className={style.header__container__form} onSubmit={handleSubmit}>
          <input
            onChange={onChange}
            placeholder="Buscar productos, marcas y mas..."
          ></input>
          <button>
            <img src={searchIcon} alt="Icono search" />
          </button>
        </form>
      </div>
    </div>
  );
};
