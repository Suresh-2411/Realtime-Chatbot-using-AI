const Message = ({ msg }) => {
  return (
    <div className={`message ${msg.sender}`}>
      <span>{msg.text}</span>
      
    </div>
  );
};

export default Message;
