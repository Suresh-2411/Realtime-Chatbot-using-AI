import Message from "../models/Message.js";

const botBrain = (msg) => {
  const text = msg.toLowerCase();

  if (text.includes("hello") || text.includes("hi"))
    return "Hello! 👋 How can I help you today?";

  if (text.includes("how are you"))
    return "I'm doing great! Thanks for asking 😊";

  if (text.includes("your name"))
    return "I'm your offline AI chatbot 🤖";

  if (text.includes("mern"))
    return "MERN stands for MongoDB, Express, React and Node.js 🚀";

  if (text.includes("bye"))
    return "Goodbye! Have a great day 👋";

  if (text.includes("help"))
    return "You can ask me about MERN, JavaScript, projects, or general questions.";

  // Default smart replies
  const fallbackReplies = [
    "Interesting... tell me more 👀",
    "I understand. Continue...",
    "That sounds cool!",
    "Can you explain a bit more?",
    "Nice question 🤔",
    "I'm thinking about that..."
  ];

  return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
};

export const sendMessage = async (req, res) => {
  const { message } = req.body;

  try {
    const userMsg = await Message.create({
      sender: "user",
      text: message
    });

    const botReplyText = botBrain(message);

    const botMsg = await Message.create({
      sender: "bot",
      text: botReplyText
    });

    res.json({
      user: userMsg,
      bot: botMsg
    });
  } catch (error) {
    res.status(500).json({ error: "Bot failed to respond" });
  }
};
