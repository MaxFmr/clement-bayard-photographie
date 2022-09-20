import Header from '../../components/Header';
import { BsInstagram, BsPhone } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import StyledContactPage from './contact.style';
import Image from 'next/image';
import Footer from '../../components/footer';
import Head from 'next/head';

const ContactPage = (): JSX.Element => {
  return (
    <StyledContactPage>
      <Head>
        <title>Clément Bayard Contact</title>

        <meta
          name='google-site-verification'
          content='in-m5_OE0zu4tynnaNxglz5PwRysymFgWQwl2p-BwMI'
        />
        <meta
          name='contact'
          content='Contact, email, téléphones, réseaux sociaux'
        />
        <meta
          property='og:title'
          content='Contacts et réseaux sociaux de Clément Bayard photographe et vidéaste'
        />

        <meta
          name='google-site-verification'
          content='in-m5_OE0zu4tynnaNxglz5PwRysymFgWQwl2p-BwMI'
        />
        <meta
          name='description'
          content='Contacts et réseaux sociaux de Clément Bayard : photographie, reportage culinaire, portraits, mariages, street photography, vidéo montage, création de medias de communication photo, vidéos à Valenciennes et en France.'
        />

        <meta property='og:url' content='https://bayardclement.fr/contact' />
        <meta property='og:type' content='website' />
      </Head>
      <Header />
      <div className='contact'>
        <h2>Contactez moi :</h2>
        <div className='info'>
          <BsInstagram size={30} style={{ margin: '15px' }} />
          <a href='https://www.instagram.com/clementbayard/?hl=fr'>
            @clementbayard
          </a>
        </div>
        <div className='info'>
          <AiFillLinkedin size={30} style={{ margin: '15px' }} />
          <a href='https://www.linkedin.com/in/clement-bayard-baa30b231/'>
            Clément Bayard
          </a>
        </div>
        <div className='info'>
          <FiMail size={30} style={{ margin: '15px' }} />
          <a href='mailto:bayard.clt@gmail.com'>bayard.clt@gmail.com</a>
        </div>
        <div className='info'>
          <BsPhone size={30} style={{ margin: '15px' }} />
          <span>+33(0) 6 15 97 88 20</span>{' '}
        </div>
        <a
          href='https://www.mariages.net/photo-mariage/bayard-clement--e274689'
          title='Mariages.net'>
          <Image
            alt='Mariages.net'
            src='https://www.mariages.net/images/sellos/label-partenaire--gg274689.png'
            style={{ borderWidth: '0px', margin: '20px' }}
            height={60}
            width={260}
            objectFit='contain'
          />
        </a>
      </div>
      <Footer />
    </StyledContactPage>
  );
};
export default ContactPage;
