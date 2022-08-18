import Header from '../../components/Header';
import StyledWeedingPage from './weeding.style';
import ImageGallery from 'react-image-gallery';
import Image from 'next/image';
import 'react-image-gallery/styles/css/image-gallery.css';

export const images = [
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding1.jpg',
    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding1.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding2.jpg',
    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding2.jpg',
  },

  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding3.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding3.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding4.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding4.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding5.jpg',
    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding5.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding6.jpg',
    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding6.jpg',
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
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding10.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding10.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding11.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding11.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding12.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding12.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding13.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding13.jpg',
  },
  {
    original:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding14.jpg',

    thumbnail:
      'https://www.maximekerlidou.fr/photos/clement/mariage/wedding14.jpg',
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
];

const WeedingPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledWeedingPage>
        <div className='pricing'>
          <div className='formula1'>
            <div className='txt'>
              <h3>Formule Coquelicot</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                asperiores laudantium eveniet neque temporibus! Quaerat, facere
                vero veniam porro odio accusamus illum praesentium aliquid
              </p>
            </div>

            <div className='bg'>
              <Image
                src='/assets/wedding/coqueliquot.jpg'
                layout='responsive'
                sizes='100%'
                height={100}
                width={150}
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
              />
            </div>
            <div className='txt'>
              <h3>Formule Muguet</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                asperiores laudantium eveniet neque temporibus! Quaerat, facere
                vero veniam porro odio accusamus illum praesentium aliquid
              </p>
            </div>
          </div>
          <div className='formula3'>
            <div className='txt'>
              <h3>Formule Camelia</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                asperiores laudantium eveniet neque temporibus! Quaerat, facere
                vero veniam porro odio accusamus illum praesentium aliquid
              </p>
            </div>
            <div className='bg'>
              <Image
                src='/assets/wedding/fleurerose.jpg'
                layout='responsive'
                sizes='100%'
                height={100}
                width={150}
              />
            </div>
          </div>
        </div>

        <div className='gallery'>
          <ImageGallery items={images} additionalClass='caroussel' />
        </div>
      </StyledWeedingPage>
    </>
  );
};
export default WeedingPage;
