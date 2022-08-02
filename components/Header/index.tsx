import StyledHeader from './header.style';
import { useRouter } from 'next/router';
const Header = (): JSX.Element => {
  const router = useRouter();
  return (
    <StyledHeader>
      <div className='title' onClick={() => router.push('/')}>
        <span>Clément Bayard</span>
      </div>

      <div className='buttons'>
        <button onClick={() => router.push('/contact')}>Contact</button>
        <button onClick={() => router.push('/videos')}>Videos</button>
        <button onClick={() => router.push('/blog')}>Blog</button>
      </div>
    </StyledHeader>
  );
};
export default Header;
