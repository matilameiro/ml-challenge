import mlInstance from "../Api/mlApi";

export const getPathFromRoot = async (id: string) => {
  try {
    const { data } = await mlInstance.get(`categories/${id}`);
    return data.path_from_root;
  } catch (error) {
    throw new Error("Error al conseguir las categirias.");
  }
};
