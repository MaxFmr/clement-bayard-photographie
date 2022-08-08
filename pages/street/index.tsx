import Header from '../../components/Header';
import Gallery from '../../components/gallery';

const photos = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
];

const StreetPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Gallery photos={photos} page='street' />
    </>
  );
};
export default StreetPage;
