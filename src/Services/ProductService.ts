import mlInstance from "../Api/mlApi";
import { ProductDescription } from "../interfaces/product-description";
import { ProductDetail } from "../interfaces/product-detail";

export const getSearch = async (search: string) => {
  try {
    const { data } = await mlInstance.get(
      `/sites/MLA/search?q=${search}&limit=${4}`
    );
    return data;
  } catch (error) {
    throw new Error("Error al conseguir la busqueda.");
  }
};

export const getDetail = async (id: string) => {
  try {
    const { data } = await mlInstance.get<ProductDetail>(`/items/${id}`);
    return data;
  } catch (error) {
    throw new Error("Error al conseguir el detalle.");
  }
};

export const getDescription = async (id: string) => {
  try {
    const { data } = await mlInstance.get<ProductDescription>(
      `/items/${id}/description`
    );
    return data;
  } catch (error) {
    throw new Error("Error al conseguir la descripción.");
  }
};
