import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Emily"
        message="how are you today 😊"
        timestamp="32 minutes ago"
        profilePic="https://i.insider.com/5f6f4d7f74fe5b0018a8da62?width=1100&format=jpeg&auto=webp"
      />

      <Chat
        name="Nikki"
        message="hello ❤"
        timestamp="41 minutes ago"
        profilePic="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1300/2020/06/12124440/nickis.jpg"
      />

      <Chat
        name="Riri"
        message="My ❤"
        timestamp="49 minutes ago"
        profilePic="https://media.glamour.com/photos/5f3817383acddfd2070cb733/6:7/w_2231,h_2603,c_limit/rihanna.jpg"
      />

      <Chat
        name="Cardi"
        message="Where you at?"
        timestamp="55 minutes ago"
        profilePic="https://pyxis.nymag.com/v1/imgs/27d/98e/e48494c9a28fe6dc86f23618875ca03694-cardi-b.rsquare.w330.jpg"
      />
    </div>
  );
}

export default Chats;
