import { Parallax } from 'react-scroll-parallax';
import categories from './categories';
import StyledWelcome from './category.style';
import { useWindowSize } from 'usehooks-ts';

const Welcome = () => {
  const { width, height } = useWindowSize();

  return (
    <StyledWelcome>
      <div className='block'>
        <Parallax
          speed={-20}
          startScroll={20}
          endScroll={2000}
          disabled={width < 900 ? true : false}>
          <img src={categories[0].url} alt='' />{' '}
        </Parallax>
      </div>
      <div className='block'>
        <Parallax
          speed={-20}
          startScroll={100}
          endScroll={2500}
          disabled={width < 900 ? true : false}>
          <img src={categories[1].url} alt='weeding' />{' '}
        </Parallax>
      </div>
      <div className='block'>
        <Parallax
          speed={-50}
          startScroll={100}
          endScroll={2500}
          disabled={width < 900 ? true : false}>
          <img src={categories[2].url} alt='view' />{' '}
        </Parallax>
      </div>
      <div className='block'>
        <Parallax
          speed={-30}
          startScroll={300}
          endScroll={2500}
          disabled={width < 900 ? true : false}>
          <img src={categories[3].url} alt='food' />{' '}
        </Parallax>
      </div>
      <div className='block'>
        <Parallax
          speed={-50}
          startScroll={800}
          endScroll={2000}
          disabled={width < 900 ? true : false}>
          <img src={categories[4].url} alt='street' />{' '}
        </Parallax>
      </div>
      <div className='block'>
        <Parallax
          speed={-40}
          startScroll={1000}
          endScroll={1600}
          disabled={width < 900 ? true : false}>
          <video id='background-video' loop autoPlay muted>
            <source src={categories[5].url} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </Parallax>
      </div>
    </StyledWelcome>
  );
};
export default Welcome;
