import Header from '../../components/Header';
import StyledWeedingPage from './weeding.style';
import ImageGallery from 'react-image-gallery';
import Image from 'next/image';
import 'react-image-gallery/styles/css/image-gallery.css';
import Footer from '../../components/footer';

export const images = [
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding3.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding3.jpg',
  },

  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding5.jpg',
    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding5.jpg',
  },

  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding8.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding8.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding9.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding9.jpg',
  },

  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding11.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding11.jpg',
  },

  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding13.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding13.jpg',
  },

  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding15.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding15.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding16.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding16.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding17.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding17.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding18.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding18.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding19.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding19.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding20.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding20.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding21.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding21.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding22.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding22.jpg',
  },
];

const WeedingPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledWeedingPage>
        <div style={{ borderWidth: '0px', marginTop: '15px' }}>
          {' '}
          <a
            href='https://www.mariages.net/photo-mariage/bayard-clement--e274689'
            title='Mariages.net'>
            <Image
              alt='Mariages.net'
              src='https://www.mariages.net/images/sellos/label-partenaire--gg274689.png'
              style={{ borderWidth: '0px', marginTop: '15px' }}
              height={50}
              width={200}
              objectFit='contain'
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
                src='/assets/wedding/coqueliquot.jpg'
                layout='responsive'
                sizes='100%'
                height={100}
                width={150}
                alt="photo d'un coquelicot"
              />
            </div>
          </div>
          <div className='formula2'>
            <div className='bg'>
              <Image
                src='/assets/wedding/muguet.jpg'
                layout='responsive'
                sizes='100%'
                height={100}
                width={150}
                alt="photo d'un brin de muguet"
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
                src='/assets/wedding/fleurerose.jpg'
                layout='responsive'
                sizes='100%'
                height={100}
                width={150}
                alt="photo d'un camelia"
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
