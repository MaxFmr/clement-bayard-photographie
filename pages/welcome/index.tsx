import { ParallaxBanner } from 'react-scroll-parallax';
import categories from './categories';
import StyledWelcome from './category.style';

const Welcome = () => {
  return (
    <>
      <StyledWelcome>
        {categories.map((category) => {
          if (category.theme !== 'video') {
            return (
              <ParallaxBanner layers={[{ image: category.url, speed: -40 }]}>
                <div className='container1'></div>
              </ParallaxBanner>
            );
          }
        })}
        <div className='videoItem'>
          <video src={categories[5].url} autoPlay loop muted></video>
        </div>
      </StyledWelcome>
    </>
  );
};
export default Welcome;
