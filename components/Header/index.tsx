import StyledHeader from './header.style';
import Image from 'next/image';
import InstagramButton from '../instagramButton';

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <InstagramButton />
    </StyledHeader>
  );
};
export default Header;
