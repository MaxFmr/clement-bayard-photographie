import styled from 'styled-components';
const StyledFoodPage = styled.section`
  display: block;
  .parallax {
    height: 450px;
    @media (max-width: 770px) {
      height: 250px;
    }
  }
  svg {
    fill: url(#MyGradient);
  }

  .wave {
    margin-top: -120px;
    position: relative;
    top: -150px;
    @media (max-width: 1219px) {
      top: -80px;
    }
    @media (max-width: 910px) {
      top: -50px;
    }
    @media (max-width: 770px) {
      top: -0px;
    }
    @media (max-width: 570px) {
      top: 30px;
    }
    @media (max-width: 420px) {
      top: 70px;
    }
  }
  .text {
    position: relative;
    top: -240px;
    @media (max-width: 1230px) {
      display: none;
    }

    display: flex;
    flex-direction: column;
    text-align: end;
    padding-right: 1%;
    width: 90%;
    left: 10%;
  }
  .text2 {
    @media (min-width: 1230px) {
      display: none;
    }
    padding: 20px;
    text-align: justify;

    @media (max-width: 570px) {
      font-size: 10px;
      margin-top: 50px;
    }
  }
  .gallery {
    /* @media (max-width: 770px) {
      margin-top: 20%;
    }
    @media (max-width: 770px) {
      margin-top: 20%;
    }
    @media (max-width: 420px) {
      margin-top: 30%;
    }
    @media (max-width: 570px) {
      margin-top: 40%;
    } */

    .caroussel {
      width: 90%;
      height: auto;
      margin: 0 auto;

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
