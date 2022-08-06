import Header from '../../components/Header';
import StyledWeedingPage from './weeding.style';
import ImageGallery from 'react-image-gallery';
import Image from 'next/image';
import 'react-image-gallery/styles/css/image-gallery.css';

export const images = [
  {
    original:
      '  https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/wedding_vvf6tc.jpg',
    thumbnail:
      ' https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/wedding_vvf6tc.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08191_u2x1lp.jpg',
    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08191_u2x1lp.jpg',
  },

  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08440_zrlb16.jpg',

    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08440_zrlb16.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866102/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08436_p68soz.jpg',

    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08436_p68soz.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08607_aa1ji0.jpg',
    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08607_aa1ji0.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08610-min_nck1tu.jpg',
    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08610-min_nck1tu.jpg',
  },

  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08532_enzvnh.jpg',
    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08532_enzvnh.jpg',
  },

  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866102/Cl%C3%A9ment%20Bayard%20Website/wedding/DJI_0349_cg0ihc.jpg',

    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DJI_0349_cg0ihc.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866101/Cl%C3%A9ment%20Bayard%20Website/wedding/ALEXANDRA_JULIEN_HD-9816_rascwn.jpg',

    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/ALEXANDRA_JULIEN_HD-9816_rascwn.jpg',
  },

  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC09154_icc1no.jpg',

    thumbnail:
      ' https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC09154_icc1no.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08248_eogx7p.jpg',

    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08248_eogx7p.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC09157_icxsuu.jpg',

    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC09157_icxsuu.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866096/Cl%C3%A9ment%20Bayard%20Website/wedding/ALEXANDRA_20_20JULIEN_20HD-4990_w0gqwx.jpg',

    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866096/Cl%C3%A9ment%20Bayard%20Website/wedding/ALEXANDRA_20_20JULIEN_20HD-4990_w0gqwx.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866095/Cl%C3%A9ment%20Bayard%20Website/wedding/ALEXANDRA_JULIEN_HD-08069_w97epq.jpg',

    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/ALEXANDRA_JULIEN_HD-08069_w97epq.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866077/Cl%C3%A9ment%20Bayard%20Website/wedding/ALEXANDRA_JULIEN_HD-4798_czods5.jpg',

    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/ALEXANDRA_JULIEN_HD-4798_czods5.jpg',
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
              />{' '}
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
