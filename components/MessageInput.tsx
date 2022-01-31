const MessageInput = () => {
  return (
    <div className="flex flex-col mt-10 space-y-4">
      <div className="grid w-5/12 grid-cols-2 m-auto space-y-2">
        <p className="mr-2 font-mono font-semibold">message:</p>
        <input
          className="input-form"
          type="text"
          name="message"
          placeholder="type a message"
        />
        <p className="mr-2 font-mono font-semibold">nickname:</p>
        <input
          className="input-form"
          type="text"
          name="nickname"
          placeholder="type your display name"
        />
      </div>
      <button className="m-auto ordinary-button">submit</button>
    </div>
  );
};

export default MessageInput;
