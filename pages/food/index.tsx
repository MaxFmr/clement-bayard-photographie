import Image from 'next/image';
import Header from '../../components/Header';
import StyledFoodPage from './food.style';

const photo = [
  { id: 1, url: '' },
  { id: 2, url: '' },
  { id: 3, url: '' },
  { id: 4, url: '' },
  { id: 5, url: '' },
  { id: 6, url: '' },
  { id: 7, url: '' },
  { id: 8, url: '' },
  { id: 9, url: '' },
  { id: 10, url: '' },
];

const FoodPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledFoodPage>
        <div className='resume'>
          <div className='bg'>
            <p>
              La photographie culinaire nécessite l'installation d'un studio
              mobile. Pour que la lumière révèle toute l'esthétique d'un plat,
              d'un produit...
            </p>
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
      </StyledFoodPage>
    </>
  );
};
export default FoodPage;
