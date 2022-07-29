import Image from 'next/image';
import StyledInstagramButton from './instagramButton.style';

const InstagramButton = (): JSX.Element => {
  return (
    <StyledInstagramButton>
      <a
        href='https://www.instagram.com/clementbayard/?hl=fr'
        rel='noopener noreferrer'
        target='_blank'>
        <div className='insta'>
          <Image
            src={'/assets/insta.png'}
            width={30}
            height={30}
            alt='instagram logo'
          />
          <span>Instagram</span>
        </div>
      </a>
    </StyledInstagramButton>
  );
};
export default InstagramButton;
