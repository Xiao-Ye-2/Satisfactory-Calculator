import { AppProps } from "next/app"; // Import AppProps type
import { Sidebar } from "../components/Sidebar";
import "../styles/globals.css";
import "../utils/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
