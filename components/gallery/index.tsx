import StyledGallery from './gallery.style';
import { useState } from 'react';
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

type photo = { id: number; url: string };

interface GalleryProps {
  photos: photo[];
  page: string;
}

const Gallery = ({ photos, page }: GalleryProps): JSX.Element => {
  const [clicked, setClicked] = useState(false);
  const [imgId, setImgId] = useState<number | undefined>(undefined);

  const photosGallery = photos.map((photo) => {
    return {
      original: '/assets/' + page + '/' + photo.id + '.JPG',
      thumbnail: '/assets/' + page + '/' + photo.id + '.JPG',
    };
  });
  const handleClick = (id: number) => {
    setClicked(!clicked);
    setImgId(id);
  };
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
            startIndex={imgId}
          />
        </div>
      ) : (
        <div className='gallery'>
          {photos.map((photo) => {
            let path = `/assets/${page}/${photo.id}.JPG`;
            if (page === 'landscape') {
              path = photo.url;
            }
            return (
              <>
                <div
                  className='container'
                  key={photo.id}
                  onClick={() => {
                    handleClick(photo.id - 1);
                  }}>
                  <Image
                    src={path}
                    height={500}
                    width={500}
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
