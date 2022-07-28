import { Parallax } from 'react-scroll-parallax';
import categories from './categories';
import StyledWelcome from './category.style';

const Welcome = () => {
  return (
    <StyledWelcome>
      <div className='block'>
        <Parallax speed={-30} startScroll={0} endScroll={900}>
          <img src={categories[0].url} alt='' />{' '}
        </Parallax>
      </div>
      <div className='block'>
        <Parallax speed={-30} startScroll={0} endScroll={900}>
          <img src={categories[1].url} alt='' />{' '}
        </Parallax>
      </div>
      <div className='block'>
        <Parallax speed={-70} startScroll={0} endScroll={1500}>
          <img src={categories[2].url} alt='' />{' '}
        </Parallax>
      </div>
      <div className='block'>
        <Parallax speed={-70} startScroll={200} endScroll={1500}>
          <img src={categories[3].url} alt='' />{' '}
        </Parallax>
      </div>
      <div className='block'>
        <video id='background-video' loop autoPlay>
          <source src={categories[3].url} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </StyledWelcome>
  );
};
export default Welcome;
