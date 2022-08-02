import Header from '../../components/Header';
import StyledWeedingPage from './weeding.style';
import ImageGallery from 'react-image-gallery';
import Image from 'next/image';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original:
      '  https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/wedding_vvf6tc.jpg',
    thumbnail:
      ' https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/wedding_vvf6tc.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08191_u2x1lp.jpg',
    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08191_u2x1lp.jpg',
  },
  {
    original:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08532_enzvnh.jpg',
    thumbnail:
      'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/DSC08532_enzvnh.jpg',
  },
];

const WeedingPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledWeedingPage>
        <div className='prcing'>
          <div className='formula1'>
            <Image
              src='/assets/wedding/coqueliquot.jpg'
              height={200}
              width={200}
              objectFit='cover'
            />
          </div>
          <div className='formula2'>
            <Image
              src='/assets/wedding/muguet.jpg'
              height={200}
              width={200}
              objectFit='cover'
            />
          </div>
          <div className='formula3'>
            <Image
              src='/assets/wedding/fleurerose.jpg'
              height={200}
              width={200}
              objectFit='cover'
            />
          </div>
        </div>
        <div className='gallery'>
          <ImageGallery items={images} />
        </div>
      </StyledWeedingPage>
    </>
  );
};
export default WeedingPage;
