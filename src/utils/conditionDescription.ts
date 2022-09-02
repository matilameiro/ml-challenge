const CONDITIONS = {
  new: "Nuevo",
  used: "Usado",
};

export const getConditionDescription = (condition: string) => {
  let cond = condition as "new" | "used";
  return CONDITIONS[cond];
};
