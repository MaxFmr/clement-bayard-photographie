import Image from 'next/image';
import Header from '../../components/Header';
import StyledFoodPage from './food.style';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ParallaxBanner } from 'react-scroll-parallax';

const photos = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1660111518/Cl%C3%A9ment%20Bayard%20Website/food/IMG_0962_qi2mc6.jpg',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1659109608/Cl%C3%A9ment%20Bayard%20Website/food/food_pvqeur.jpg',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866094/Cl%C3%A9ment%20Bayard%20Website/food/DSC04181-Modifier_eldhnd.jpg',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866094/Cl%C3%A9ment%20Bayard%20Website/food/DSC01158_avnbgx.jpg',
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866093/Cl%C3%A9ment%20Bayard%20Website/food/DSC02209-Modifier_p2ijnm.jpg',
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866087/Cl%C3%A9ment%20Bayard%20Website/food/DSC00164_aoyxdy.jpg',
  },
  {
    id: 7,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866093/Cl%C3%A9ment%20Bayard%20Website/food/DSC06265-Modifier_zvevz6.jpg',
  },
  {
    id: 8,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866092/Cl%C3%A9ment%20Bayard%20Website/food/DSC00684_lzlpat.jpg',
  },
  {
    id: 9,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866091/Cl%C3%A9ment%20Bayard%20Website/food/DSC00335_pglnb7.jpg',
  },
  {
    id: 10,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866091/Cl%C3%A9ment%20Bayard%20Website/food/DSC00390_hq09b6.jpg',
  },
  {
    id: 11,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866091/Cl%C3%A9ment%20Bayard%20Website/food/DSC00334_bh4xqj.jpg',
  },
  {
    id: 12,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866091/Cl%C3%A9ment%20Bayard%20Website/food/DSC04387_euzfnw.jpg',
  },
  {
    id: 13,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866090/Cl%C3%A9ment%20Bayard%20Website/food/DSC02431_wox5nx.jpg',
  },
  {
    id: 14,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866090/Cl%C3%A9ment%20Bayard%20Website/food/DSC05376_vopdoy.jpg',
  },
  {
    id: 15,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866089/Cl%C3%A9ment%20Bayard%20Website/food/DSC05648-Modifier_ffgrvd.jpg',
  },
  {
    id: 16,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866088/Cl%C3%A9ment%20Bayard%20Website/food/DSC04719_xa7hxj.jpg',
  },
  {
    id: 17,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866088/Cl%C3%A9ment%20Bayard%20Website/food/DSC00422_nymggn.jpg',
  },
  {
    id: 18,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866087/Cl%C3%A9ment%20Bayard%20Website/food/DSC03861_xqldyr.jpg',
  },
  {
    id: 19,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866086/Cl%C3%A9ment%20Bayard%20Website/food/DSC05553-Modifier_xqntrc.jpg',
  },
  {
    id: 20,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866086/Cl%C3%A9ment%20Bayard%20Website/food/DSC00360_gg1zqd.jpg',
  },
  {
    id: 21,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866085/Cl%C3%A9ment%20Bayard%20Website/food/DSC04502_m5kk3s.jpg',
  },
  {
    id: 22,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866085/Cl%C3%A9ment%20Bayard%20Website/food/DSC04516_kechw8.jpg',
  },
  {
    id: 23,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866083/Cl%C3%A9ment%20Bayard%20Website/food/DSC02403_kgntun.jpg',
  },
  {
    id: 24,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866083/Cl%C3%A9ment%20Bayard%20Website/food/DSC04176_usveks.jpg',
  },
  {
    id: 25,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866082/Cl%C3%A9ment%20Bayard%20Website/food/DSC00410_hg4973.jpg',
  },
  {
    id: 26,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866081/Cl%C3%A9ment%20Bayard%20Website/food/DSC01032_quzfnp.jpg',
  },
  {
    id: 27,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866081/Cl%C3%A9ment%20Bayard%20Website/food/DSC04171_ppx55i.jpg',
  },
  {
    id: 28,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866080/Cl%C3%A9ment%20Bayard%20Website/food/DSC03948_nyw0vr.jpg',
  },
  {
    id: 29,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866080/Cl%C3%A9ment%20Bayard%20Website/food/DSC05737_egwq3z.jpg',
  },
  {
    id: 30,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1658866080/Cl%C3%A9ment%20Bayard%20Website/food/DSC05535_k16zj3.jpg',
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
                'https://res.cloudinary.com/dal6ewwdl/image/upload/v1660111539/Cl%C3%A9ment%20Bayard%20Website/food/IMG_0965_n9buqc.jpg',
              speed: -20,
            },
          ]}
          style={{ aspectRatio: '2 / 1', objectFit: 'cover' }}></ParallaxBanner>
        <div className='wave'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <defs>
              <linearGradient id='MyGradient'>
                <stop offset='0%' stop-color='    rgba(2, 0, 36, 1)' />
                <stop offset='100%' stop-color=' rgba(134, 137, 178, 1)' />
                <stop offset='100%' stop-color=' rgba(0, 212, 255, 1) ' />
              </linearGradient>
            </defs>
            <path
              fill-opacity='1'
              d='M0,64L60,64C120,64,240,64,360,53.3C480,43,600,21,720,10.7C840,0,960,0,1080,10.7C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'></path>
          </svg>
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
