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
              <div className='item' onClick={() => console.log('click')}>
                <ParallaxBanner
                  className='parallax'
                  style={{ cursor: 'pointer' }}
                  layers={[
                    {
                      image: category.url,
                      speed: -40,
                      children: <div />,
                      opacity: [0.9, 1],
                    },
                  ]}>
                  <div className='container1'>
                    <div className='title'>
                      <h3>{category.title}</h3>
                    </div>
                  </div>
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
