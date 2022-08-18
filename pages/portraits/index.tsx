import Header from '../../components/Header';
import Gallery from '../../components/gallery';

const photos = [
  {
    id: 1,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape1.jpg',
  },
  {
    id: 2,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape2.jpg',
  },
  {
    id: 3,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape3.jpg',
  },
  {
    id: 4,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape4.jpg',
  },
  {
    id: 5,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape5.jpg',
  },
  {
    id: 6,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape6.jpg',
  },
  {
    id: 7,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape.jpg',
  },
  {
    id: 8,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape8.jpg',
  },
  {
    id: 9,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape9.jpg',
  },
  {
    id: 10,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape10.jpg',
  },
  {
    id: 11,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape11.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape12.jpg',
  },
];

const PortraitsPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Gallery photos={photos} page='portraits' />
    </>
  );
};
export default PortraitsPage;
