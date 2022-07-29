import { ParallaxBanner } from 'react-scroll-parallax';
import categories from './categories';
import StyledWelcome from './category.style';

const Welcome = () => {
  return (
    <>
      {categories.map((category) => {
        return (
          <StyledWelcome bgUrl={category.url} categoryId={category.id}>
            <ParallaxBanner layers={[{ image: category.url, speed: -40 }]}>
              <div className='container1'></div>
            </ParallaxBanner>
          </StyledWelcome>
        );
      })}
    </>
  );
};
export default Welcome;
