import { ParallaxBanner } from 'react-scroll-parallax';
import StyledWelcome from './category.style';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
const categories = [
  {
    id: 1,
    title: 'Portraits',
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/portraits/portraits_uqefiu.jpg',
    theme: 'Portraits',
    path: '/portraits',
  },
  {
    id: 2,
    title: 'Le plus beau jour de deux vies',
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/Cl%C3%A9ment%20Bayard%20Website/wedding/wedding_vvf6tc.jpg',
    theme: 'Mariages',
    path: '/weeding',
  },
  {
    id: 3,
    title: 'Manger avec les yeux',
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/food_pvqeur.jpg',
    theme: 'Photographie culinaire',
    path: '/food',
  },
  {
    id: 4,
    title: 'Contemplez le monde qui vous entoure',
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/view_zahswt.jpg',
    theme: 'Paysages',
    path: '/views',
  },

  {
    id: 5,
    title: "L'air de la ville rend libre",
    url: 'https://res.cloudinary.com/dal6ewwdl/image/upload/w_4000,h_4000,c_limit/street_mmhpx7.jpg',
    theme: 'Street-photography',
    path: '/street',
  },
  {
    id: 6,
    title: 'Videos',
    url: 'https://res.cloudinary.com/dal6ewwdl/video/upload/v1658861663/BAYARD_Cle%CC%81ment_Livrable_N_3_qa5shy.mp4',
    theme: 'Realisation et production video',
    path: '/videos',
  },
];

const Welcome = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <StyledWelcome>
        {categories.map((category) => {
          if (category.title !== 'Videos') {
            return (
              <ParallaxBanner
                key={category.id}
                onClick={() => router.push(`${category.path}`)}
                className='parallax'
                style={{ cursor: 'pointer' }}
                layers={[
                  {
                    image: category.url,
                    speed: -30,
                    opacity: [0.9, 1],
                  },
                ]}>
                <div className='container1'>
                  <div
                    className='title'
                    style={
                      category.id % 2 === 0
                        ? { left: '10vw' }
                        : { left: '71vw' }
                    }>
                    <h3>{category.theme}</h3>
                    <span>{category.title}</span>
                  </div>
                  <div className='phoneDisplayTitle'>
                    <h3>{category.theme}</h3>
                    <span>{category.title}</span>
                  </div>
                </div>
              </ParallaxBanner>
            );
          }
        })}
      </StyledWelcome>
    </>
  );
};
export default Welcome;
