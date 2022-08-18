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
  {
    id: 8,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape8.jpg',
  },
  {
    id: 9,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape10.jpg',
  },
  {
    id: 10,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape9.jpg',
  },
  {
    id: 11,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape11.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape12.jpg',
  },
  {
    id: 13,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape13.jpg',
  },
  {
    id: 14,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape14.jpg',
  },
  {
    id: 15,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape16.jpg',
  },
  {
    id: 17,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape17.jpg',
  },
  {
    id: 18,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape18.jpg',
  },
  {
    id: 19,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape19.jpg',
  },
  {
    id: 20,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape20.jpg',
  },
  {
    id: 21,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape21.jpg',
  },
  {
    id: 22,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape22.jpg',
  },
  {
    id: 23,
    url: 'https://www.maximekerlidou.fr/photos/clement/paysage/landscape23.jpg',
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
