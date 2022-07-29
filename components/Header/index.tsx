import StyledHeader from './header.style';
import Image from 'next/image';
import InstagramButton from '../instagramButton';

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <div className='instaHeader'>
        <InstagramButton />
      </div>
      <div>
        <span>Clément Bayard - Photographe et Videaste</span>
      </div>
    </StyledHeader>
  );
};
export default Header;
