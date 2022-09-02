import Footer from '../../components/footer';
import Image from 'next/image';
import Header from '../../components/Header';
import StyledInfos from './infos.style';
import Head from 'next/head';

const InfosPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>A propos de moi</title>
        <meta name='description' content='Qui suis-je ? Informations' />
        <meta property='og:title' content='About - Clément Bayard' />
        <meta
          property='og:description'
          content='Photographe autodidacte passionné. Cette passion m’a été transmise
              par mes deux grands-pères. 
              Je suis Cuisinier et Pâtissier de formation.'
        />
        <meta
          property='og:description'
          content='Mettre en valeur le savoir faire d’artisans sous forme de
          reportage, exposition, création de carte, reportage vidéo afin de
          montrer le meilleur de vous même, dans le but d’accroître votre
          activité.'
        />
        <meta property='og:url' content='https://bayardclement.fr/infos' />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <StyledInfos>
        <div className='presentation'>
          <h1>Qui suis-je ?</h1>
          <div className='txt'>
            <p>
              Photographe autodidacte passionné. Cette passion m’a été transmise
              par mes deux grands-pères. <br />
              Je suis Cuisinier et Pâtissier de formation.
            </p>
          </div>
          <h1> Quel est mon but ?</h1>
          <div className='txt'>
            <p>
              Mettre en valeur le savoir faire d’artisans sous forme de
              reportage, exposition, création de carte, reportage vidéo afin de
              montrer le meilleur de vous même, dans le but d’accroître votre
              activité.
            </p>
          </div>
        </div>

        <div className='photographer'>
          <Image
            src='/assets/clement.jpg'
            height={700}
            width={500}
            objectFit='cover'
            alt='portrai de Clément Bayard'
          />
        </div>
      </StyledInfos>

      <Footer />
    </>
  );
};
export default InfosPage;
