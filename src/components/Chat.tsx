import { useState } from "react";
import { type Contact } from "../App";
import "./Chat.css";
import { currentUser } from "../utils/commonUtils";

interface Props {
  contact: Contact;
  onAddChat: (contact: Contact, message: string) => void;
  chatList?: { from: string; message: string; timestamp: Date }[];
}

const Chat = ({ contact, onAddChat, chatList = [] }: Props) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    onAddChat(contact, message);
    setMessage("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && message?.trim().length > 0) {
      sendMessage();
    }
  };

  const chatData = chatList.map((chat) => (
    <div className="card chatData" key={contact.id}>
      <div className="card-body">
        <div className="sender">{currentUser.name}</div>
        <div className="message">{chat.message}</div>
        <div className="timestamp">{String(chat.timestamp)}</div>
      </div>
    </div>
  ));

  return (
    <div className="chatContent">
      <h3>Chat with {contact.name}</h3>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="enter message..."
          value={message}
          onChange={(event) => setMessage(event.currentTarget.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          disabled={message?.trim().length === 0}
          onClick={() => sendMessage()}
        >
          Send
        </button>
      </div>
      {chatData}
    </div>
  );
};

export default Chat;
