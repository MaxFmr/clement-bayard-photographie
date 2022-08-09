import Header from '../../components/Header';
import Gallery from '../../components/gallery';

const photos = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/DSC05007-Modifier-min_onn165.jpg',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/DSC06885-Modifier-min_ogyass.jpg',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/DSC06925-Modifier-min_wm2yzh.jpg',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/DSC04502-min_fbjvw6.jpg',
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/DSC06124-Modifier-min_rhihz9.jpg',
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/DSC04723-min_ogv2se.jpg',
  },
  {
    id: 7,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/DSC04688-min_e1jsbx.jpg',
  },
  {
    id: 8,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/DSC03780-min_yhf7q9.jpg',
  },
  {
    id: 9,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/DSC06144-Modifier-min_ulmajq.jpg',
  },
  {
    id: 10,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/LRG_DSC09658-min_kv9kop.jpg',
  },
  {
    id: 11,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/DSC03792-min_c8bj6s.jpg',
  },
  {
    id: 12,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_3000,h_3000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/DSC04746-min_tn7j3g.jpg',
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
