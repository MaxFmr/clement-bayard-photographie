import Header from '../../components/Header';
import StyledWeedingPage from './weeding.style';
import Image from 'next/image';

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
      </StyledWeedingPage>
    </>
  );
};
export default WeedingPage;
