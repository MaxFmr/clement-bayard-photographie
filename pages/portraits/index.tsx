import Header from '../../components/Header';
import StyledPortraitsPage from './portraits.style';

import Image from 'next/image';

const setPath = (id: number) => {
  return '/assets/portraits/' + id + '.JPG';
};

const photosId = [
  { id: 1, width: 1080, height: 780 },
  { id: 2, width: 1080, height: 1620 },
  { id: 3, width: 1080, height: 720 },
  { id: 4, width: 1080, height: 721 },
  { id: 5, width: 1080, height: 1620 },
  { id: 6, width: 1080, height: 607 },
  { id: 7, width: 1080, height: 608 },
  { id: 8, width: 1080, height: 720 },
  { id: 9, width: 1080, height: 1549 },
  { id: 10, width: 1080, height: 720 },
  { id: 11, width: 1080, height: 694 },
  { id: 12, width: 1080, height: 1620 },
];

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const PortraitsPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledPortraitsPage>
        <div className='gallery'>
          {photosId.map((photo) => {
            const path = setPath(photo.id);

            return (
              <div className='container' key={photo.id}>
                <Image
                  src={path}
                  height={1000}
                  width={1000}
                  objectFit='contain'
                  style={{ borderRadius: '15px' }}
                  alt={'portrait' + photo.id}
                />
              </div>
            );
          })}
        </div>
      </StyledPortraitsPage>
    </>
  );
};
export default PortraitsPage;
