import Header from '../../components/Header';
import StyledWeedingPage from './weeding.style';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import Image from 'next/image';
import 'react-image-gallery/styles/css/image-gallery.css';
import Footer from '../../components/footer';
import Head from 'next/head';

const WeedingPage = (): JSX.Element => {
  let images = [];
  for (let index = 1; index < 30; index++) {
    images.push({
      original: `https://www.maximekerlidou.fr/photos/clement/mariage/_${index}.webp`,

      thumbnail: `https://www.maximekerlidou.fr/photos/clement/mariage/_${index}.webp`,
    });
  }
  return (
    <>
      <Head>
        <title>Clément Bayard Photographie de Mariages</title>

        <meta
          name='google-site-verification'
          content='in-m5_OE0zu4tynnaNxglz5PwRysymFgWQwl2p-BwMI'
        />
        <meta
          name='description'
          content='Clément Bayard, Le photographe de votre mariage basé à Valeciennes, en Hats-de-France, dans le Nord.'
        />
        <meta
          property='og:title'
          content='Clément Bayard photographie portraits'
        />

        <meta property='og:url' content='https://bayardclement.fr/wedding' />
        <meta property='og:type' content='website' />
      </Head>
      <Header />
      <StyledWeedingPage>
        <div style={{ borderWidth: '0px', marginTop: '15px' }}>
          <a
            href='https://www.mariages.net/photo-mariage/bayard-clement--e274689'
            title='Mariages.net'>
            <Image
              alt='Mariages.net'
              src={
                'https://www.mariages.net/images/sellos/label-partenaire--gg274689.png'
              }
              style={{ borderWidth: '0px', marginTop: '15px' }}
              height={50}
              width={200}
              objectFit='contain'
              placeholder='blur'
              blurDataURL={
                'https://www.mariages.net/images/sellos/label-partenaire--gg274689.png'
              }
            />
          </a>
        </div>

        <div className='pricing'>
          <div className='formula1'>
            <div className='txt'>
              <h3>Formule Coquelicot</h3>

              <ul>
                <li>Cérémonie (laïque, religieuse)</li>
                <li>Vin d’honneur</li>
                <li>Photo rendu en haute définition sur clé USB</li>
              </ul>
            </div>

            <div className='bg'>
              <Image
                src={'/assets/wedding/coqueliquot.jpg'}
                layout='responsive'
                sizes='100%'
                height={100}
                width={150}
                alt="photo d'un coquelicot"
                placeholder='blur'
                blurDataURL={'/assets/wedding/coqueliquot.jpg'}
              />
            </div>
          </div>
          <div className='formula2'>
            <div className='bg'>
              <Image
                src={'/assets/wedding/muguet.jpg'}
                layout='responsive'
                sizes='100%'
                height={100}
                width={150}
                alt="photo d'un brin de muguet"
                placeholder='blur'
                blurDataURL={'/assets/wedding/muguet.jpg'}
              />
            </div>
            <div className='txt'>
              <h3>Formule Muguet</h3>
              <ul>
                <li>Préparatifs des futurs mariés </li>
                <li>Cérémonie ( Laïque, religieuse)</li>
                <li>Vin D’honneur</li>
                <li>Photo rendu en haute définition sur clé USB</li>
              </ul>
            </div>
          </div>
          <div className='formula3'>
            <div className='txt'>
              <h3>Formule Camelia</h3>

              <ul>
                <li> Préparatif des futurs mariés</li>
                <li>Cérémonie (Laïque, religieuse)</li>
                <li>Vin d’honneur</li>
                <li>Soirée (jusqu’au gâteau)</li>
                <li>
                  Photo rendu en haute définition sur clé USB personnalisée
                </li>
              </ul>
            </div>
            <div className='bg'>
              <Image
                src={'/assets/wedding/fleurerose.jpg'}
                layout='responsive'
                sizes='100%'
                height={100}
                width={150}
                alt="photo d'un camelia"
                placeholder='blur'
                blurDataURL={'/assets/wedding/fleurerose.jpg'}
              />
            </div>
          </div>
        </div>

        <div className='gallery'>
          <ImageGallery items={images} additionalClass='caroussel' />
        </div>
      </StyledWeedingPage>
      <Footer />
    </>
  );
};
export default WeedingPage;
