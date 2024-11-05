import ControllerConnector from "@cartridge/connector/controller";
import { mainnet } from "@starknet-react/chains";
import {
  argent,
  braavos,
  publicProvider,
  StarknetConfig,
  useInjectedConnectors,
} from "@starknet-react/core";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  const { connectors } = useInjectedConnectors({
    recommended: [
      argent(),
      braavos(),
      new ControllerConnector({
        colorMode: "dark",
        policies: [],
        rpc: "https://api.cartridge.gg/x/starknet/mainnet",
      }),
    ],
    includeRecommended: "always",
    order: "alphabetical",
  });
  return (
    <StarknetConfig
      connectors={connectors}
      chains={[mainnet]}
      provider={publicProvider()}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
