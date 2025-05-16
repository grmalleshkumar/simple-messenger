import { useState } from "react";
import Chat from "./components/Chat";
import ContactList from "./components/ContactList";
import { contactList, currentUser } from "./utils/commonUtils";
import "./App.css";
import Greetings from "./components/Greetings";

export interface Contact {
  id: string;
  name: string;
}

export interface ChatMessage {
  from: string;
  message: string;
  timestamp: Date;
}

interface ChatData {
  [id: string]: ChatMessage[];
}

const App = () => {
  const [selectedContact, setSelectedContact] = useState<Contact>(
    contactList[0]
  );
  const [chatData, setChatData] = useState<ChatData>({});

  const changeContact = (newContact: Contact) => {
    setSelectedContact(newContact);
  };

  const addChat = (contact: Contact, message: string) => {
    let chatDataCopy = { ...chatData };
    const updatedMsgList = chatDataCopy?.[contact.id] ?? [];
    updatedMsgList.push({
      from: currentUser.id,
      message: message,
      timestamp: new Date(),
    });
    chatDataCopy = {
      ...chatDataCopy,
      [contact.id]: updatedMsgList,
    };
    setChatData(chatDataCopy);
  };
  return (
    <>
      <h1>React Simple Messenger</h1>
      <Greetings name={currentUser.name} />
      <br />
      <div className="messengerContainer">
        <ContactList
          contact={selectedContact}
          onContactChange={(newContact: Contact) => changeContact(newContact)}
        />
        <Chat
          contact={selectedContact}
          chatList={chatData[selectedContact.id]}
          onAddChat={(contact, message) => addChat(contact, message)}
        />
      </div>
    </>
  );
};

export default App;
