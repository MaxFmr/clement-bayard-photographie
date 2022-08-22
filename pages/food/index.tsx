import Header from '../../components/Header';
import StyledFoodPage from './food.style';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ParallaxBanner } from 'react-scroll-parallax';

const photos = [
  {
    id: 1,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi1.webp',
  },
  {
    id: 2,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi2.jpg',
  },
  {
    id: 3,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi3.jpg',
  },
  {
    id: 5,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi4.webp',
  },
  {
    id: 6,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi5.webp',
  },
  {
    id: 7,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi6.webp',
  },
  {
    id: 8,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi7.webp',
  },
  {
    id: 9,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi8.webp',
  },
  {
    id: 10,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi9.jpg',
  },
  {
    id: 11,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi10.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi11.jpg',
  },
  {
    id: 13,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi12.jpg',
  },
  {
    id: 14,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi13.jpg',
  },
  {
    id: 15,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi14.jpg',
  },
  {
    id: 16,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi15.jpg',
  },
  {
    id: 17,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi16.jpg',
  },
  {
    id: 18,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi17.jpg',
  },
  {
    id: 19,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi18.jpg',
  },
  {
    id: 20,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi19.jpg',
  },
  {
    id: 21,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi20.jpg',
  },
  {
    id: 22,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi21.jpg',
  },
  {
    id: 23,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi22.jpg',
  },
  {
    id: 24,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi23.jpg',
  },
  {
    id: 25,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi24.jpg',
  },

  {
    id: 26,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi26.jpg',
  },
  {
    id: 27,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi27.jpg',
  },
  {
    id: 28,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi28.jpg',
  },
  {
    id: 29,
    url: 'https://www.maximekerlidou.fr/photos/clement/culinaire/culi29.jpg',
  },
];

const photosGallery = photos.map((photo) => {
  return {
    original: photo.url,
    thumbnail: photo.url,
  };
});

const FoodPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledFoodPage>
        <ParallaxBanner
          className='parallax'
          layers={[
            {
              image:
                'https://www.maximekerlidou.fr/photos/clement/culinaire/studio.webp',

              speed: -20,
            },
          ]}
          style={{ aspectRatio: '2 / 1', objectFit: 'cover' }}></ParallaxBanner>
        <div className='wave'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <defs>
              <linearGradient id='MyGradient'>
                <stop offset='0%' stopColor='    rgba(2, 0, 36, 1)' />
                <stop offset='100%' stopColor=' rgba(134, 137, 178, 1)' />
                <stop offset='100%' stopColor=' rgba(0, 212, 255, 1) ' />
              </linearGradient>
            </defs>
            <path
              fillOpacity='1'
              d='M0,192L48,170.7C96,149,192,107,288,106.7C384,107,480,149,576,154.7C672,160,768,128,864,122.7C960,117,1056,139,1152,122.7C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
          </svg>
          <div className='text'>
            <span>La</span>
            <span>photographie </span>
            <span>culinaire nécessite un</span>
            <span> studio mobile pour</span>
            <span>
              mettre en lumière toute la qualité et l’estéthique votre produit.
            </span>
          </div>
        </div>
        <div className='text2'>
          <p>
            La photographie culinaire nécessite un studio. Mais soyez rassurés,
            je madapte à vos contraintes, jamais je nedérange le fonctionnement
            de votre établissement.
          </p>
        </div>
        <div className='gallery'>
          <ImageGallery
            items={photosGallery}
            useBrowserFullscreen={true}
            additionalClass='caroussel'
          />
        </div>
      </StyledFoodPage>
    </>
  );
};
export default FoodPage;
