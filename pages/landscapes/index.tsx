import Header from '../../components/Header';
import Gallery from '../../components/gallery';

const photos = [
  {
    id: 1,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape1.webp',
  },
  {
    id: 2,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape2.webp',
  },
  {
    id: 3,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape3.webp',
  },
  {
    id: 4,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape4.webp',
  },
  {
    id: 5,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape5.webp',
  },
  {
    id: 6,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape6.webp',
  },
  {
    id: 7,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape7.webp',
  },
];

const ViewsPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Gallery photos={photos} page='landscapes' />
    </>
  );
};
export default ViewsPage;
