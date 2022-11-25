import Header from '../../components/Header';
import StyledFoodPage from './food.style';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useState } from 'react';
import Footer from '../../components/footer';
import Image from 'next/image';
import Head from 'next/head';

const FoodPage = (): JSX.Element => {
  const [displayClient, setDisplayClient] = useState(false);

  let images = [];
  for (let index = 1; index < 46; index++) {
    images.push({
      original: `https://www.maximekerlidou.fr/photos/clement/culinaire/_${index}.webp`,

      thumbnail: `https://www.maximekerlidou.fr/photos/clement/culinaire/_${index}.webp`,
    });
  }

  return (
    <>
      <Head>
        <title>Clément Bayard photographie culinaire</title>

        <meta
          name='google-site-verification'
          content='in-m5_OE0zu4tynnaNxglz5PwRysymFgWQwl2p-BwMI'
        />

        <meta
          name='photograpie culinaire'
          content='photographie culinaire, produits des métiers de bouche, reportage culinaire'
        />
        <meta
          name='description'
          content='photographie culinaire, produits des métiers de bouche, reportage culinaire'
        />
        <meta
          property='og:title'
          content='Clément Bayard photographie culinaire'
        />

        <meta property='og:url' content='https://bayardclement.fr/food' />
        <meta property='og:type' content='website' />
      </Head>
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
        <button
          className='client-button'
          onClick={() => setDisplayClient(!displayClient)}>
          Voir mes clients
        </button>
        {displayClient && (
          <div className='clients'>
            <button
              className='closeButton'
              onClick={() => setDisplayClient(false)}>
              <Image
                src='/assets/xmark-solid.svg'
                height={30}
                width={30}
                alt='closing logo'
              />
            </button>
            <Image
              src='/assets/clients.JPG'
              height={700}
              width={450}
              objectFit='cover'
              alt='clients de Clément Bayard'
            />
          </div>
        )}
        <div className='gallery'>
          <ImageGallery
            items={images}
            useBrowserFullscreen={true}
            additionalClass='caroussel'
          />
        </div>
      </StyledFoodPage>
      <Footer />
    </>
  );
};
export default FoodPage;
