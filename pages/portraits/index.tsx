import Header from '../../components/Header';
import Gallery from '../../components/gallery';
import Footer from '../../components/footer';
import Head from 'next/head';

const photos = [
  {
    id: 1,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait1.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 2,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait2.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 3,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait3.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 4,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait4.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 5,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait5.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 6,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait6.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 7,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait7.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 8,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait8.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 9,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait9.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 10,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait10.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 11,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait11.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait12.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait13.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait14.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait15.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait16.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait17.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait18.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait19.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait20.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait21.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait22.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait23.jpg',
    alt: 'portrait homme ou femme',
  },
  {
    id: 12,
    url: 'https://www.maximekerlidou.fr/photos/clement/portrait/portrait24.jpg',
    alt: 'portrait homme ou femme',
  },
];

const PortraitsPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Clément Bayard Photographie portraits</title>

        <meta
          name='google-site-verification'
          content='in-m5_OE0zu4tynnaNxglz5PwRysymFgWQwl2p-BwMI'
        />
        <meta
          name='description'
          content='Gallerie Photo de portraits par Clément Bayard'
        />
        <meta
          property='og:title'
          content='Clément Bayard photographie portraits'
        />

        <meta property='og:url' content='https://bayardclement.fr/portraits' />
        <meta property='og:type' content='website' />
      </Head>
      <Header />
      <Gallery photos={photos} page='portraits' />
      <Footer />
    </>
  );
};
export default PortraitsPage;
