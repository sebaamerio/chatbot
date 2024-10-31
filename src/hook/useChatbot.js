import { useState } from "react";

export const useChatbot = () => {
  const [chatBot, setChatBot] = useState([]);

  function addChat(item) {
    setChatBot((prevState) => [...prevState, { ...item }]);
  }

  function clearChat() {
    setChatBot([]);
  }
  /*
  export const removeChat = () => {
    const eliminar = chatBot.map((itemEli) => {
      itemEli.disable == false;
    });
  
    setChatBot(eliminar);
  };
*/

  return { chatBot, addChat, clearChat };
};
