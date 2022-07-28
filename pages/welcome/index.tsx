import { Parallax } from 'react-scroll-parallax';
import categories from './categories';
import StyledWelcome, { StyledItem } from './category.style';

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
        <Parallax speed={-70}>
          <img src={categories[2].url} alt='' />{' '}
        </Parallax>
      </div>
      <div className='block'>
        <Parallax speed={-50}>
          <img src={categories[3].url} alt='' />{' '}
        </Parallax>
      </div>
      <div className='block'>
        <Parallax speed={-50}>
          <video src={categories[5].url} loop autoPlay muted />{' '}
        </Parallax>
      </div>
    </StyledWelcome>
  );
};
export default Welcome;
