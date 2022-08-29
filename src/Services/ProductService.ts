import mlInstance from "../Api/mlApi"

export const getSearch = (search: string) => {
  return mlInstance.get(`/sites/MLA/search?q=${search}&limit=${4}`);
}

export const getDetail = (id: string) => {
  return mlInstance.get(`/items/${id}`);
}

export const getDescription = (id: string) => {
  return mlInstance.get(`/items/${id}/description`);
}