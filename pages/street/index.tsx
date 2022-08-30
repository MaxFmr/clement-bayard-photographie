import Header from '../../components/Header';
import Gallery from '../../components/gallery';
import Footer from '../../components/footer';

const photos = [
  {
    id: 1,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street1.jpg',
    alt: 'street',
  },
  {
    id: 2,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street2.jpg',
    alt: 'street',
  },
  {
    id: 3,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street3.jpg',
    alt: 'street',
  },
  {
    id: 4,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street4.jpg',
    alt: 'street',
  },
  {
    id: 5,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street5.jpg',
    alt: 'street',
  },
  {
    id: 6,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street6.JPG',
  },
  {
    id: 7,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street7.jpg',
    alt: 'street',
  },
  {
    id: 8,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street8.jpg',
    alt: 'street',
  },
  {
    id: 9,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street9.jpg',
    alt: 'street',
  },
  {
    id: 10,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street10.jpg',
  },
  {
    id: 11,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street11.jpg',
    alt: 'street',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street12.jpg',
    alt: 'street',
  },
];

const StreetPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Gallery photos={photos} page='street' />
      <Footer />
    </>
  );
};
export default StreetPage;
