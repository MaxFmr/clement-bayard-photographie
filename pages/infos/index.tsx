import Footer from '../../components/footer';
import Image from 'next/image';
import Header from '../../components/Header';
import StyledInfos from './infos.style';

const InfosPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledInfos>
        <div className='presentation'>
          <h1>Qui suis-je ?</h1>
          <div className='txt'>
            <p>
              Photographe autodidacte passionné. Cette passion qui m'a été
              transmise par mes deux grands-pères. <br />
              Je suis Cuisinier et Pâtissier de formation.
            </p>
          </div>
          <h1> Quel est mon but ?</h1>
          <div className='txt'>
            <p>
              Mettre en valeur le savoir faire d’artisans sous forme de
              reportage, exposition, création de carte, reportage vidéo afin de
              montrer le meilleur de vous même dans le but d'accroître votre
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
