import styled from 'styled-components';
const StyledFoodPage = styled.section`
  .parallax {
    height: 450px;
  }
  svg {
    fill: url(#MyGradient);
  }

  .wave {
    margin-top: -70px;
    position: relative;
  }
  .gallery {
    .caroussel {
      width: 90%;
      height: auto;
      margin: 0 auto;
      margin-top: 10%;
      @media (max-width: 700px) {
        margin-top: 20%;
      }
      img {
        width: 80%;
        height: auto;
        margin: 0 auto;
        object-fit: contain;
        border-radius: 5px;
      }
    }
  }
`;
export default StyledFoodPage;
