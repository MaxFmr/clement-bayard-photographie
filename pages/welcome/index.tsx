import { ParallaxBanner } from 'react-scroll-parallax';
import categories from './categories';
import StyledWelcome from './category.style';
import Header from '../../components/Header';
import { useRouter } from 'next/router';

const Welcome = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <StyledWelcome>
        {categories.map((category) => {
          if (category.title !== 'Videos') {
            return (
              <ParallaxBanner
                onClick={() => router.push(`${category.path}`)}
                className='parallax'
                style={{ cursor: 'pointer' }}
                layers={[
                  {
                    image: category.url,
                    speed: -30,
                    opacity: [0.9, 1],
                  },
                ]}>
                <div className='container1'>
                  <div
                    className='title'
                    style={
                      category.id % 2 === 0
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
      </StyledWelcome>
    </>
  );
};
export default Welcome;
