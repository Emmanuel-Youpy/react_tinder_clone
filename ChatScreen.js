import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Nikki",
      image:
        "https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1300/2020/06/12124440/nickis.jpg",
      message: "yo",
    },
    {
      name: "Nikki",
      image:
        "https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1300/2020/06/12124440/nickis.jpg",
      message: "Am at your place",
    },
    {
      message: "On my way",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">You matched with ellen on 26/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen_input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen_inputField"
            type="text"
            placeholder="Type a message"
          />
          <button onClick={handleSend} className="inputButton">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
