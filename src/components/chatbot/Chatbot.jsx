import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";

import { useChatbot } from "../../hook/useChatbot.js";
import { useMenu } from "../../hook/useMenu.js";

import robotImg from "../../assets/chatbotvtv.jpg";
import "./chatbot.css";

function Chatbot() {
  const { chatBot, addChat, clearChat } = useChatbot();
  const { menu, iniciarMenu, addMenu, clearMenu } = useMenu();

  const [showBot, setShowBot] = useState(true);

  useEffect(() => {
    iniciarMenu();
  }, []);

  const handler = (item) => {
    addChat(item);
    clearMenu();
    addMenu(item);
  };

  const handlerInicio = () => {
    clearChat();
    iniciarMenu();
  };

  const handlerChatOnline = () => {
    window.location.href = "https://livechat.soportevtv.com.ar/livechat";
  };

  const handlerBot = () => {
    setShowBot(!showBot);
  };

  return (
    <>
      <div className="chatbot" hidden={!showBot}>
        <header className="chatbot__header">
          <span>Bienvenido al canal de atención virtual</span>
          <CancelIcon className="chatbot__cancel" onClick={handlerBot} />
        </header>
        <ul className="chatbot__chatbox">
          <li className="chatbot__menu">
            <div className="chatbot__chat">
              <span className="chatbot__robot">
                <Avatar alt="Robot" src={robotImg} />
              </span>
              <p className="chatbot__dialog">
                Hola, soy el asistente virtual de la Vtv.<br></br> ¿Puedo
                ayudarte con alguno de estos temas?
              </p>
            </div>
          </li>
          <li className="chatbot__menu">
            {chatBot.map((item) => {
              if (item.type == "Button") {
                return (
                  <div className="chatbot__button" key={item.id}>
                    <Button variant="outlined" disabled>
                      <span>{item.descripcion}</span>
                    </Button>
                  </div>
                );
              }
            })}
          </li>
          <li className="chatbot__menu">
            {menu.map((item) => {
              if (item.type == "Button") {
                return (
                  <div className="chatbot__button" key={item.id}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        handler(item);
                      }}
                    >
                      <span>{item.descripcion}</span>
                    </Button>
                  </div>
                );
              } else {
                return (
                  <div className="chatbot__chat" key={item.id}>
                    <span className="chatbot__robot">
                      <Avatar alt="Robot" src={robotImg} />
                    </span>
                    <p
                      className="chatbot__dialog"
                      dangerouslySetInnerHTML={{ __html: item.descripcion }}
                    />
                  </div>
                );
              }
            })}
          </li>
          {chatBot.length > 0 ? (
            <li className="chatbot__menu">
              <div className="chatbot__inicio">
                <Button variant="outlined" onClick={handlerInicio}>
                  <span> Inicio</span>
                </Button>
                <Button variant="outlined" onClick={handlerChatOnline}>
                  <span> Chat Online</span>
                </Button>
              </div>
            </li>
          ) : (
            <span></span>
          )}
        </ul>
        <div className="chatbot__input" style={{ display: "none" }}>
          <textarea placeholder="Ingrese un mensaje..." required></textarea>
          <span id="send-btn">
            <SendIcon />
          </span>
        </div>
      </div>

      <div className="chat_button">
        <div id="chat-btn" className="chat-btn" onClick={handlerBot}>
          <div>
            <div className="left-eye"></div>
            <div className="mouth"></div>
            <div className="right-eye"></div>
          </div>
        </div>
      </div>
    </>
  );
}
/*
  <!-- Start of Rocket.Chat Livechat Script -->
      <script type="text/javascript">
      (function(w, d, s, u) {
          w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
          var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
          j.async = true; j.src = 'https://livechat.soportevtv.com.ar/livechat/rocketchat-livechat.min.js?_=201903270000';
          h.parentNode.insertBefore(j, h);
      })(window, document, 'script', 'https://livechat.soportevtv.com.ar/livechat');
      </script>
  */
export default Chatbot;
