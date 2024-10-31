import { useEffect } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";

import { useChatbot } from "./hook/useChatbot.js";
import { useMenu } from "./hook/useMenu.js";

import robotImg from "./assets/robot-5.avif";
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
          <Avatar alt="Robot" src={robotImg} />
          <Typography variant="h5" sx={{ color: "#fff" }}>
            Chatbot
          </Typography>
        </header>
        <ul className="chatbot__chatbox">
          <li className="chatbot__chat">
            <span className="chatbot__robot">
              <Avatar alt="Robot" src={robotImg} />
            </span>
            <p className="chatbot__dialog">Hola ¿ En que te puedo ayudar ?</p>
          </li>
          {chatBot.map((item) => {
            if (item.type == "Button") {
              return (
                <li className="chatbot__button" key={item.id}>
                  <Button variant="outlined" disabled>
                    <span>{item.descripcion}</span>
                  </Button>
                </li>
              );
            }
          })}
          {menu.map((item) => {
            if (item.type == "Button") {
              return (
                <li className="chatbot__button" key={item.id}>
                  <Button
                    variant="outlined"
                    key={item.id}
                    onClick={() => {
                      handler(item);
                    }}
                  >
                    <span>{item.descripcion}</span>
                  </Button>
                </li>
              );
            } else {
              return (
                <div key={item.id}>
                  <li className="chatbot__chat">
                    <span className="chatbot__robot">
                      <Avatar alt="Robot" src={robotImg} />
                    </span>
                    <p
                      className="chatbot__text"
                      dangerouslySetInnerHTML={{ __html: item.descripcion }}
                    />
                  </li>

                  <li className="chatbot__button" key={item.id}>
                    <Button variant="outlined" onClick={handlerInicio}>
                      <span> Inicio</span>
                    </Button>
                    <Button variant="outlined" onClick={handlerChatOnline}>
                      <span> Chat Online</span>
                    </Button>
                  </li>
                </div>
              );
            }
          })}
        </ul>
        <div className="chat-input">
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
