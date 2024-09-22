import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TotalCostProvider } from "../context/TotalCostContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TotalCostProvider>
      <Component {...pageProps} />
    </TotalCostProvider>
  );
}

export default MyApp;
