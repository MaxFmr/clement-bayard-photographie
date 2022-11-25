import Header from '../../components/Header';
import Gallery from '../../components/gallery';
import Footer from '../../components/footer';
import Head from 'next/head';

const photos = [
  {
    id: 1,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street1.webp',
    alt: 'street photo',
  },
  {
    id: 2,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street2.webp',
    alt: 'street photo',
  },
  {
    id: 3,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street3.webp',
    alt: 'street photo',
  },
  {
    id: 4,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street4.webp',
    alt: 'street photo',
  },
  {
    id: 5,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street5.webp',
    alt: 'street photo',
  },
  {
    id: 6,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street6.webp',
    alt: 'street photo',
  },
  {
    id: 7,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street7.webp',
    alt: 'street photo',
  },
  {
    id: 8,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street8.webp',
    alt: 'street photo',
  },
  {
    id: 9,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street9.webp',
    alt: 'street photo',
  },
  {
    id: 10,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street10.webp',
    alt: 'street photo',
  },
  {
    id: 11,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street11.webp',
    alt: 'street photo',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street12.webp',
    alt: 'street photo',
  },
  {
    id: 13,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street13.webp',
    alt: 'street photo',
  },
  {
    id: 14,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street14.webp',
    alt: 'street photo',
  },
  {
    id: 15,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street15.webp',
    alt: 'street photo',
  },
  {
    id: 16,
    url: 'https://www.maximekerlidou.fr/photos/clement/street/street16.webp',
    alt: 'street photo',
  },
];

const StreetPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Clément Bayard Photographie street photography</title>

        <meta
          name='google-site-verification'
          content='in-m5_OE0zu4tynnaNxglz5PwRysymFgWQwl2p-BwMI'
        />
        <meta
          name='description'
          content='Gallerie Photo de photographie urbaine ou street photography par Clément Bayard'
        />
        <meta
          property='og:title'
          content='Clément Bayard photographie photo urbaine'
        />

        <meta property='og:url' content='https://bayardclement.fr/street' />
        <meta property='og:type' content='website' />
      </Head>
      <Header />
      <Gallery photos={photos} page='street' />
      <Footer />
    </>
  );
};
export default StreetPage;
