import Header from '../../components/Header';
import Gallery from '../../components/gallery';

const photos = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1660038416/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape6_uemoqr.jpg',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1660038414/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape4_g9fvcg.jpg',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/v1660038411/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape12_agirgy.jpg',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape13_lrbnro.jpg',
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape9_lbapd0.jpg',
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/DSC04552-HDR_ovczsh.jpg',
  },
  {
    id: 7,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape21_ymnyqm.jpg',
  },
  {
    id: 8,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape18_jjwqp2.jpg',
  },
  {
    id: 9,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape8_wkbgpt.jpg',
  },
  {
    id: 10,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape21_ymnyqm.jpg',
  },
  {
    id: 11,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape17_hmqgbf.jpg',
  },
  {
    id: 12,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape7_kfvoo1.jpg',
  },
  {
    id: 13,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape14_ptgctu.jpg',
  },
  {
    id: 14,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape10_vsc9o7.jpg',
  },
  {
    id: 15,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape5_qf2qom.jpg',
  },
  {
    id: 16,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape5_qf2qom.jpg',
  },
  {
    id: 18,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape3_mu0csl.jpg',
  },
  {
    id: 19,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape1_bpasff.jpg',
  },
  {
    id: 20,
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_2000,h_2000,c_limit/Cl%C3%A9ment%20Bayard%20Website/landscape/landscape2_d7rlne.jpg',
  },
];
const ViewsPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Gallery photos={photos} page='landscape' />
    </>
  );
};
export default ViewsPage;
