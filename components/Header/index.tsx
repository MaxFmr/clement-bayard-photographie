import StyledHeader from './header.style';
import Image from 'next/image';
import { useRouter } from 'next/router';
const Header = (): JSX.Element => {
  const router = useRouter();
  return (
    <StyledHeader>
      <div className='title' onClick={() => router.push('/welcome')}>
        <span>Clément Bayard</span>
      </div>
      <div></div>
      <div className='buttons'>
        <button onClick={() => router.push('/contact')}>Contact</button>
        <button onClick={() => router.push('/videos')}>Videos</button>
        <button onClick={() => router.push('/infos')}>Qui suis-je ?</button>
        {/* <button onClick={() => router.push('/blog')}>Blog</button> */}
      </div>
      <div className='burger'></div>
    </StyledHeader>
  );
};
export default Header;
