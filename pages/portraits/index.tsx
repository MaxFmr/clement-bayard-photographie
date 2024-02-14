import Header from "../../components/Header";
import Gallery from "../../components/gallery";
import Footer from "../../components/footer";
import Head from "next/head";

const photos = [
  {
    id: 1,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait1.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 2,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait2.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 3,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait3.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 4,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait4.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 5,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait5.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 6,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait6.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 7,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait7.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 8,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait8.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 9,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait9.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 10,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait10.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 11,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait11.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait12.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait13.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait14.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait15.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait16.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait17.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait18.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait19.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait20.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait21.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait22.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait23.webp",
    alt: "portrait homme ou femme",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/portrait/portrait24.webp",
    alt: "portrait homme ou femme",
  },
];

const PortraitsPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Clément Bayard Photographie portraits</title>
      </Head>
      <Header />
      <Gallery photos={photos} page="portraits" />
      <Footer />
    </>
  );
};
export default PortraitsPage;
