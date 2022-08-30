import Link from 'next/link';
import StyledFooter from './footer.style';
import { useRouter } from 'next/router';

const Footer = (): JSX.Element => {
  const router = useRouter();
  return (
    <StyledFooter>
      <button
        onClick={() => {
          router.push('/legal');
        }}>
        Mentions legales
      </button>
      <Link href='https://www.maximekerlidou.fr'>
        2022 Site web conçu et développé par Maxime KERLIDOU
      </Link>
    </StyledFooter>
  );
};
export default Footer;
