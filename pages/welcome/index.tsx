import { Parallax } from 'react-scroll-parallax';
import categories from './categories';
import StyledCategory from './category.style';

const Welcome = () => {
  return (
    <>
      {categories.map((category) => {
        return (
          <StyledCategory bgUrl={category.url} key={category.id}>
            <Parallax speed={50}>
              <div className='category'></div>
            </Parallax>
          </StyledCategory>
        );
      })}
    </>
  );
};
export default Welcome;
