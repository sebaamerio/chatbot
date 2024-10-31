import { useState, useEffect } from "react";
import { getMenu } from "../services/menuService.js";

export const useMenu = () => {
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataMenu = await getMenu();
        setData(dataMenu);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  async function iniciarMenu() {
    const dataMenu = await getMenu();
    const menuInicio = dataMenu.filter((menu) => menu.idPadre == 0);
    setMenu(menuInicio);
  }

  function addMenu(item) {
    data.filter((menuItem) => {
      if (menuItem.idPadre == item.id) {
        setMenu((prevState) => [...prevState, { ...menuItem }]);
      }
    });
  }

  function clearMenu() {
    setMenu([]);
  }

  return { menu, iniciarMenu, addMenu, clearMenu };
};
