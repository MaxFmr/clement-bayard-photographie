import { ParallaxBanner } from 'react-scroll-parallax';
import StyledWelcome from './category.style';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
const categories = [
  {
    id: 1,
    title: 'Portraits',
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait1.webp',
    theme: 'Portraits',
    path: '/portraits',
  },
  {
    id: 2,
    title: 'Le plus beau jour de deux vies',
    url: 'https://www.maximekerlidou.fr/photos/clement/mariage/wedding1.webp',
    theme: 'Mariages',
    path: '/weeding',
  },
  {
    id: 3,
    title: 'Manger avec les yeux',
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi1.webp',
    theme: 'Photographie culinaire',
    path: '/food',
  },
  {
    id: 4,
    title: 'Contemplez le monde qui vous entoure',
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape1.webp',
    theme: 'Paysages',
    path: '/landscapes',
  },

  {
    id: 5,
    title: "L'air de la ville rend libre",
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street7.webp',
    theme: 'Street-photography',
    path: '/street',
  },
];

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
                key={category.id}
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
                  <div className='phoneDisplayTitle'>
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
