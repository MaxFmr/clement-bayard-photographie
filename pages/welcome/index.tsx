import { ParallaxBanner } from 'react-scroll-parallax';
import StyledWelcome from './category.style';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import Head from 'next/head';
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
    url: 'https://www.maximekerlidou.fr/photos/clement/mariage/wedding11.jpg',
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
      <Head>
        <title>Clément Bayard Photographie page d’acceuil</title>

        <meta
          name='google-site-verification'
          content='in-m5_OE0zu4tynnaNxglz5PwRysymFgWQwl2p-BwMI'
        />
        <meta
          name='description'
          content='accueil et menu principale, rubriques : portraits, mariages, culinaire, paysages, video, street'
        />
        <meta property='og:title' content='Clément Bayard photographie menu' />

        <meta property='og:url' content='https://bayardclement.fr/welcome' />
        <meta property='og:type' content='website' />
      </Head>
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
        <Footer />
      </StyledWelcome>
    </>
  );
};
export default Welcome;
