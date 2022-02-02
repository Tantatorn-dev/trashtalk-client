import { useConnectedWallet, useLCDClient } from "@terra-money/wallet-provider";
import { useEffect, useState } from "react";
import { clearInterval } from "timers";
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

    const id = setInterval(async () => {
      await queryMessages();
    }, 10000);
    return () => window.clearInterval(id);
  }, [connectedWallet, lcd]);

  return (
    <div className="flex flex-col w-8/12 p-3 m-auto mt-4 overflow-y-scroll border-2 border-black h-96">
      {messages.map((message) => (
        <div key={message.nickname} className="flex flex-row text-left">
          <p className="mr-2 font-mono text-xl font-bold">
            {message.nickname}:
          </p>
          <p className="font-mono text-xl">{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
