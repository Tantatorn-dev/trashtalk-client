import { useConnectedWallet, useLCDClient } from "@terra-money/wallet-provider";
import { useEffect, useState } from "react";
import { Message } from "../lib/interfaces";

const contractAddr = "terra1696x9gjm9mmgqy3nn8wkh62qy5vgms6088slgz";

const MessageList = () => {
  const connectedWallet = useConnectedWallet();
  const lcd = useLCDClient();

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const queryMessages = async () => {
      try {
        const response: { messages: Message[] } = await lcd.wasm.contractQuery(
          contractAddr,
          {
            get_messages: {},
          }
        );
        const messages = response.messages;
        setMessages(messages);
      } catch (err) {
        console.log(err);
      }
    };
    queryMessages();
  }, [connectedWallet, lcd]);

  return (
    <div className="flex flex-col items-center mt-4">
      {messages.map((message) => (
        <div key={message.nickname} className="flex flex-row">
          <p className="font-mono text-xl font-bold mr-2">
            {message.nickname}:
          </p>
          <p className="font-mono text-xl">{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
