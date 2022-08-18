import Header from '../../components/Header';
import Gallery from '../../components/gallery';

const photos = [
  {
    id: 1,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait1.jpg',
  },
  {
    id: 2,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait2.jpg',
  },
  {
    id: 3,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait3.jpg',
  },
  {
    id: 4,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait4.jpg',
  },
  {
    id: 5,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait5.jpg',
  },
  {
    id: 6,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait6.jpg',
  },
  {
    id: 7,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait7.jpg',
  },
  {
    id: 8,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait8.jpg',
  },
  {
    id: 9,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait9.jpg',
  },
  {
    id: 10,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait10.jpg',
  },
  {
    id: 11,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait11.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait12.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait13.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait14.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait15.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait16.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait17.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait18.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait19.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait20.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait21.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait22.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait23.jpg',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait24.jpg',
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
