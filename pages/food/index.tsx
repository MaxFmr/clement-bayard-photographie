import Image from 'next/image';
import Header from '../../components/Header';
import StyledFoodPage from './food.style';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

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
        <div className='resume'>
          <div className='bg'>
            {/* <p>
              La photographie culinaire nécessite l'installation d'un studio
              mobile. Pour que la lumière révèle toute l'esthétique d'un plat,
              d'un produit...
            </p> */}
          </div>
          <div className='customers'>
            <Image
              src='https://res.cloudinary.com/dal6ewwdl/image/upload/v1660111545/Cl%C3%A9ment%20Bayard%20Website/food/E7760004-1ECD-417D-B3E0-7D68437AC24B_k6ajg3.jpg'
              layout='responsive'
              height={100}
              width={100}
              objectFit='contain'
            />
          </div>
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
