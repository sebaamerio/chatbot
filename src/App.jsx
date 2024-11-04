import { useEffect } from "react";

import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";

import { useChatbot } from "./hook/useChatbot.js";
import { useMenu } from "./hook/useMenu.js";

import robotImg from "./assets/chatvtv.jpeg";
import "./style/style.css";

function App() {
  const { chatBot, addChat, clearChat } = useChatbot();
  const { menu, iniciarMenu, addMenu, clearMenu } = useMenu();

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

  return (
    <>
      <div className="chatbot">
        <header className="chatbot__header">
          <span>Bienvenido al canal de atención virtual.</span>
        </header>
        <ul className="chatbot__chatbox">
          <li className="chatbot__menu">
            <li className="chatbot__chat">
              <span className="chatbot__robot">
                <Avatar alt="Robot" src={robotImg} />
              </span>
              <p className="chatbot__dialog">Hola ¿ En que te puedo ayudar ?</p>
            </li>
          </li>
          <li className="chatbot__menu">
            {chatBot.map((item) => {
              if (item.type == "Button") {
                return (
                  <Button variant="outlined" disabled key={item.id}>
                    <span>{item.descripcion}</span>
                  </Button>
                );
              }
            })}
          </li>
          <li className="chatbot__menu">
            {menu.map((item) => {
              if (item.type == "Button") {
                return (
                  <Button
                    key={item.id}
                    variant="outlined"
                    onClick={() => {
                      handler(item);
                    }}
                  >
                    <span>{item.descripcion}</span>
                  </Button>
                );
              } else {
                return (
                  <li className="chatbot__chat" key={item.id}>
                    <span className="chatbot__robot">
                      <Avatar alt="Robot" src={robotImg} />
                    </span>
                    <p
                      className="chatbot__dialog"
                      dangerouslySetInnerHTML={{ __html: item.descripcion }}
                    />
                  </li>
                );
              }
            })}
          </li>
          {chatBot.length > 0 ? (
            <div className="chatbot__chatonline">
              <li className="chatbot__menu">
                <Button variant="outlined" onClick={handlerInicio}>
                  <span> Inicio</span>
                </Button>
                <Button variant="outlined" onClick={handlerChatOnline}>
                  <span> Chat Online</span>
                </Button>
              </li>
            </div>
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
export default App;
