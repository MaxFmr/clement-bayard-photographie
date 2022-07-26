import styled from 'styled-components';
const StyledFoodPage = styled.section`
  margin-bottom: 40px;
  display: block;
  .parallax {
    height: 500px;
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
  .client-button {
    z-index: 3;
    background: none;
    color: #ffff;
    border: solid 1px #ffff;
    border-radius: 5px;
    position: relative;
    top: -240px;
    cursor: pointer;
    left: 10%;
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
  .clients {
    position: fixed;
    left: 30%;
    margin-top: -3%;
    z-index: 5;
    display: flex;
    top: 10%;
    @media (max-width: 570px) {
      left: -10%;
    }

    img {
      border-radius: 15px;
    }
    button {
      height: 40px;
      width: 40px;
      border: solid;
      background: none;
      color: white;
      position: relative;
      left: 10%;
      top: 10px;
      z-index: 5;
      cursor: pointer;
      border-radius: 10px;
      margin: 5px;
      background-color: #ffff;
      opacity: 0.4;
      :hover {
        opacity: 0.9;
      }
    }
  }
`;
export default StyledFoodPage;
