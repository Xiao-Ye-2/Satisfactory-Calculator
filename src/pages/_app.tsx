import { AppProps } from 'next/app'; // Import AppProps type
import { TopBar } from '@/components/TopBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <TopBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
