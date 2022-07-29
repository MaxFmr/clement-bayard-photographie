import { ParallaxBanner } from 'react-scroll-parallax';
import categories from './categories';
import StyledWelcome from './category.style';
import Header from '../../components/Header';

const Welcome = () => {
  return (
    <>
      <Header />
      <StyledWelcome>
        {categories.map((category) => {
          if (category.theme !== 'video') {
            return (
              <div>
                <ParallaxBanner layers={[{ image: category.url, speed: -40 }]}>
                  <div className='container1'></div>
                </ParallaxBanner>
              </div>
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
