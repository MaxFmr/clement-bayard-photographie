import { Parallax } from 'react-scroll-parallax';
import { useRef } from 'react';
import StyledWelcomePage from './style';
import Image from 'next/image';

const Welcome = () => {
  return (
    <StyledWelcomePage>
      <Parallax speed={50}>
        <div className='portrait'></div>
      </Parallax>
      <Parallax speed={-5}>
        <Image src={'/assets/1.jpg'} width={3934} height={1687} />;
      </Parallax>
    </StyledWelcomePage>
  );
};
export default Welcome;
