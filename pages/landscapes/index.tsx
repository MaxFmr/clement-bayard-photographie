import Header from "../../components/Header";
import Gallery from "../../components/gallery";
import Footer from "../../components/footer";
import Head from "next/head";

const photos = [
  {
    id: 1,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape1.jpg",
    alt: "paysage",
  },
  {
    id: 2,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape2.jpg",
    alt: "paysage",
  },
  {
    id: 3,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape3.jpg",
    alt: "paysage",
  },
  {
    id: 4,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape4.jpg",
    alt: "paysage",
  },
  {
    id: 5,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape5.jpg",
    alt: "paysage",
  },
  {
    id: 6,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape6.jpg",
    alt: "paysage",
  },
  {
    id: 7,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape7.jpg",
    alt: "paysage",
  },
  {
    id: 8,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape8.jpg",
    alt: "paysage",
  },
  {
    id: 9,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape10.jpg",
    alt: "paysage",
  },
  {
    id: 10,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape9.jpg",
    alt: "paysage",
  },
  {
    id: 11,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape11.jpg",
    alt: "paysage",
  },
  {
    id: 12,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape12.jpg",
    alt: "paysage",
  },
  {
    id: 13,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape13.jpg",
    alt: "paysage",
  },
  {
    id: 14,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape14.jpg",
    alt: "paysage",
  },
  {
    id: 15,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape16.jpg",
    alt: "paysage",
  },
  {
    id: 17,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape17.jpg",
    alt: "paysage",
  },
  {
    id: 18,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape18.jpg",
    alt: "paysage",
  },
  {
    id: 19,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape19.jpg",
    alt: "paysage",
  },
  {
    id: 20,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape20.jpg",
    alt: "paysage",
  },
  {
    id: 21,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape21.jpg",
    alt: "paysage",
  },
  {
    id: 22,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape22.jpg",
    alt: "paysage",
  },
  {
    id: 23,
    url: "https://www.maximekerlidou.fr/photos/clement/paysage/landscape23.jpg",
    alt: "paysage",
  },
];

const ViewsPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Clément Bayard Photographie paysages</title>
      </Head>
      <Header />
      <Gallery photos={photos} page="landscapes" />
      <Footer />
    </>
  );
};
export default ViewsPage;
