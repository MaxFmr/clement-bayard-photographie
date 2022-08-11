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
            <p></p>
            <span>La</span>
            <span>photographie </span>
            <span>culinaire</span>
            <span>nécessite un studio.</span>
            <span>Mais soyez rassurés, </span>
            <span>je madapte à vos contraintes,</span>
            <span>jamais je nedérange le fonctionnement de votre</span>
            <span> établissement.</span>
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
