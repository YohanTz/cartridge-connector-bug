import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";

export default function Connect() {
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (address !== undefined) {
    return <button onClick={() => disconnect()}>Disconnect</button>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {connectors.map((connector) => {
        return (
          <button onClick={() => connect({ connector })}>
            {connector.name}
          </button>
        );
      })}
    </div>
  );
}
