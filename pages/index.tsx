import type { NextPage } from 'next';
import StyledLandingPage from './index.style';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Image from 'next/image';

const Home: NextPage = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const router = useRouter();
  const [state, toggle] = useState(true);

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  const handleClick = () => {
    toggle(!state);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickEnter = () => {
    toggle(!state);
    setTimeout(() => {
      router.push('/welcome');
    }, 1000);
  };

  return (
    <StyledLandingPage>
      <a
        href='https://www.instagram.com/clementbayard/?hl=fr'
        rel='noopener noreferrer'
        target='_blank'>
        <div className='insta'>
          <Image
            src={'/assets/insta.png'}
            width={30}
            height={30}
            alt='instagram logo'
          />
          <span>Instagram</span>
        </div>
      </a>

      <div className='bg'>
        <div className='name'>
          <span>Clement Bayard - Photographie</span>
        </div>

        <animated.div
          onClick={() => handleClick()}
          className='scrollDown'
          style={{
            opacity: x.to({ range: [0, 1], output: [0, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}>
          GO ↓
        </animated.div>
      </div>
      <div className='bg2' ref={ref}>
        <animated.div
          onClick={() => {
            handleClickEnter();
          }}
          className='enter'
          style={{
            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}>
          Entrer
        </animated.div>{' '}
      </div>
    </StyledLandingPage>
  );
};

export default Home;
