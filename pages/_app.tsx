import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <GoogleAnalytics trackPageViews />

      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
