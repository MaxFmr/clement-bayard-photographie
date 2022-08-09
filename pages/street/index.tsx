import Header from '../../components/Header';
import Gallery from '../../components/gallery';

const photos = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/street_mmhpx7.jpg',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/DSC01007_denotm.jpg',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/DSC03137_mvkb7x.jpg',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/DSC07299_ncqlrh.jpg',
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/DSC03445-Modifier_atyoai.jpg',
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/DSC02905_b9dmdk.jpg',
  },
  {
    id: 7,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/DSC08903_erjj95.jpg',
  },
  {
    id: 8,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/DSC07301_czadci.jpg',
  },
  {
    id: 9,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/DSC06705_ztufjf.jpg',
  },
  {
    id: 10,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/DSC06711_vdsfqv.jpg',
  },
  {
    id: 11,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/DSC02947_ven3ae.jpg',
  },
  {
    id: 12,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/street/DSC03465-Modifier_vmfxm3.jpg',
  },
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
