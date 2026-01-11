import { useState } from "react";
import API from "../api";
import Message from "./Message";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    // Add user message ONCE
    const userMsg = { sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await API.post("/chat", { message: text });

      // Add bot reply ONCE
      const botMsg = res.data.bot;
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    }

    setText("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">🤖AI ChatBot</div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <Message key={index} msg={msg} />
        ))}
      </div>

      <form className="chat-input" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">➤</button>
      </form>
    </div>
  );
};

export default Chat;
