import StyledHeader from './header.style';
import Image from 'next/image';

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <div className='title'>
        <span>Clément Bayard</span>
      </div>

      <div className='buttons'>
        <button>Contact</button>
        <button>Videos</button>
        <button>Blog</button>
      </div>
    </StyledHeader>
  );
};
export default Header;
