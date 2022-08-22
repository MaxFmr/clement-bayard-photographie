import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import type { AppProps } from 'next/app';
import Footer from '../components/footer/inex';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
