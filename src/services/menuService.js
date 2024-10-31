import dataMenu from "../BD/menu.json";

export const getMenu = async () => {
  try {
    return dataMenu;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
