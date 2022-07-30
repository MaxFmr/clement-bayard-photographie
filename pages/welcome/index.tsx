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
          if (category.title !== 'Videos') {
            return (
              <ParallaxBanner
                className='parallax'
                style={{ cursor: 'pointer' }}
                layers={[
                  {
                    image: category.url,
                    speed: -40,
                    opacity: [0.9, 1],
                  },
                ]}>
                <div className='container1'>
                  <div
                    className='title'
                    style={
                      category.id % 2 !== 0
                        ? { left: '10vw' }
                        : { left: '71vw' }
                    }>
                    <h3>{category.theme}</h3>
                    <span>{category.title}</span>
                  </div>
                </div>
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
