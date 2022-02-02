import { Fee, MsgExecuteContract } from "@terra-money/terra.js";
import { useConnectedWallet } from "@terra-money/wallet-provider";
import { useState } from "react";

const contractAddr = "terra1696x9gjm9mmgqy3nn8wkh62qy5vgms6088slgz";

const MessageInput = () => {
  const connectedWallet = useConnectedWallet();

  const [message, setMessage] = useState("");
  const [nickname, setNickname] = useState("");

  const onSubmit = async () => {
    connectedWallet?.post({
      fee: new Fee(1000000, "200000uusd"),
      msgs: [
        new MsgExecuteContract(connectedWallet.walletAddress, contractAddr, {
          add_message: {
            message: {
              message: message,
              nickname: nickname,
            },
          },
        }),
      ],
    });
  };

  return (
    <div className="flex flex-col mt-10 space-y-4">
      <div className="grid w-5/12 grid-cols-2 m-auto space-y-2">
        <p className="mr-2 font-mono font-semibold">message:</p>
        <input
          onChange={(e) => setMessage(e.target.value)}
          className="input-form"
          type="text"
          name="message"
          placeholder="type a message"
        />
        <p className="mr-2 font-mono font-semibold">nickname:</p>
        <input
          onChange={(e) => setNickname(e.target.value)}
          className="input-form"
          type="text"
          name="nickname"
          placeholder="type your display name"
        />
      </div>
      <button onClick={onSubmit} className="m-auto ordinary-button">
        submit
      </button>
    </div>
  );
};

export default MessageInput;
