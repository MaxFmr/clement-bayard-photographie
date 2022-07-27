import { Parallax } from 'react-scroll-parallax';
import categories from './categories';
import StyledWelcomePage from './style';

const Welcome = () => {
  return (
    <StyledWelcomePage>
      {categories.map((category) => {
        return (
          <Parallax speed={50} key={category.id}>
            <div className={category.theme}></div>
          </Parallax>
        );
      })}
    </StyledWelcomePage>
  );
};
export default Welcome;
