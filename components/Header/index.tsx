import StyledHeader from './header.style';
import Image from 'next/image';

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <div className='title'>
        <span>CLEMENT BAYARD</span>
      </div>
    </StyledHeader>
  );
};
export default Header;
