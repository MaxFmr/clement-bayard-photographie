import Header from '../../components/Header';
import StyledWeedingPage from './weeding.style';
import ImageGallery from 'react-image-gallery';
import { images } from './images';
import 'react-image-gallery/styles/css/image-gallery.css';

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
              <img src='/assets/wedding/coqueliquot.jpg' />
            </div>
          </div>
          <div className='formula2'>
            <div className='bg'>
              <img src='/assets/wedding/muguet.jpg' />
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
              <img src='/assets/wedding/fleurerose.jpg' />
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
