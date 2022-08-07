import StyledGallery from './gallery.style';
import { useState } from 'react';
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

type photo = { id: number };

interface GalleryProps {
  photos: photo[];
}

const Gallery = ({ photos }: GalleryProps): JSX.Element => {
  const [clicked, setClicked] = useState(false);

  const photosGallery = photos.map((photo) => {
    return {
      original: '/assets/portraits/' + photo.id + '.JPG',
      thumbnail: '/assets/portraits/' + photo.id + '.JPG',
    };
  });
  return (
    <StyledGallery>
      {clicked ? (
        <div>
          <button className='closeButton' onClick={() => setClicked(false)}>
            <Image src='/assets/xmark-solid.svg' height={30} width={30} />
          </button>
          <ImageGallery
            items={photosGallery}
            useBrowserFullscreen={true}
            showThumbnails={false}
          />
        </div>
      ) : (
        <div className='gallery'>
          {photos.map((photo) => {
            const pathPortraits = '/assets/portraits/' + photo.id + '.JPG';
            return (
              <>
                <div
                  className='container'
                  key={photo.id}
                  onClick={() => {
                    setClicked(!clicked);
                  }}>
                  <Image
                    src={pathPortraits}
                    height={1000}
                    width={1000}
                    objectFit='contain'
                    style={{ borderRadius: '15px' }}
                    alt={'portrait' + photo.id}
                  />
                </div>
              </>
            );
          })}
        </div>
      )}
    </StyledGallery>
  );
};
export default Gallery;
