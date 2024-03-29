import type { NextPage } from "next";
import StyledLandingPage from "./index.style";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { useRouter } from "next/router";
import { useRef } from "react";
import InstagramButton from "../components/instagramButton";
import { ParallaxBanner } from "react-scroll-parallax";
import Head from "next/head";
import Script from "next/script";

const Home: NextPage = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const router = useRouter();
  const [state, toggle] = useState(true);

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  const handleClick = async () => {
    toggle(!state);
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      router.push("/welcome");
    }, 1700);
  };

  return (
    <StyledLandingPage>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LJ7KP7WJB3"
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LJ7KP7WJB3');
        `}
      </Script>
      <Head>
        <title>Clément Bayard - Photographe</title>
      </Head>
      <div className="name">
        <div className="brand">
          <span>Clement Bayard </span>
        </div>
        <div className="work">
          <span>Photographe</span>
          <span>&</span>
          <span>Videaste</span>
        </div>

        <InstagramButton />
      </div>
      <div className="bg">
        <ParallaxBanner
          layers={[
            {
              image: "/assets/landingBW.webp",
              speed: -10,
              expanded: false,
            },
          ]}
          style={{ height: "100%" }}
        />
        <animated.div
          onClick={() => handleClick()}
          className="scrollDown"
          style={{
            opacity: x.to({ range: [0, 1], output: [0, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
          Entrer ↓
        </animated.div>
      </div>
      <div className="bg2" ref={ref}>
        <ParallaxBanner
          layers={[
            {
              image: "/assets/landingColor.webp",
              speed: -20,
              shouldAlwaysCompleteAnimation: true,
            },
          ]}
          style={{
            aspectRatio: "2 / 1",
          }}
        />
      </div>
    </StyledLandingPage>
  );
};

export default Home;
