export const getIdsOfHouses = (allegiances: string[]) => {
  return allegiances.map((allegiance, index) => {
    const allegianceUrlParts = allegiance.split("/");
    return allegianceUrlParts.at(-1);
  });
};
