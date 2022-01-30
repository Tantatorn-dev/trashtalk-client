import {
  ConnectType,
  useWallet,
  WalletStatus,
} from "@terra-money/wallet-provider";

const ConnectButton = () => {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    availableConnections,
    supportFeatures,
    connect,
    install,
    disconnect,
  } = useWallet();

  const connectType = ConnectType.EXTENSION;

  return (
    <>
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <button
          key={"connect-" + connectType}
          onClick={() => connect(connectType)}
          className="ordinary-button"
        >
          connect wallet
        </button>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <button onClick={() => disconnect()} className="ordinary-button">
          Disconnect
        </button>
      )}
    </>
  );
};

export default ConnectButton;
