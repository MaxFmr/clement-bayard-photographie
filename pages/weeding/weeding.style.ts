import styled from 'styled-components';

const StyledWeedingPage = styled.section`
  width: 100%;
  .pricing {
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
      width: 100%;
      font-size: 8px;
    }
    width: 65%;
    margin: 0 auto;
    margin-top: 5%;

    h3 {
      font-family: 'Montserrat', sans-serif;
    }

    .formula1 {
      margin-bottom: 2%;

      display: flex;
      justify-content: space-around;
      .txt {
        width: 40%;
      }
      .bg {
        width: 40%;
        height: auto;
        background-color: #151438;
      }
      img {
        padding-right: 100px;
        @media (max-width: 700px) {
          padding: 0;
        }
      }
    }
    .formula2 {
      margin-bottom: 2%;
      display: flex;
      justify-content: space-around;

      .txt {
        width: 40%;
      }

      .bg {
        width: 40%;
        height: auto;
        background-color: #7a7da6;

        img {
          padding-left: 100px;
          @media (max-width: 700px) {
            padding: 0;
          }
        }
      }
    }
    .formula3 {
      display: flex;
      justify-content: space-around;
      .txt {
        width: 40%;
      }
      .bg {
        width: 40%;
        height: auto;
        background-color: #151438;
        img {
          padding-right: 100px;
          @media (max-width: 700px) {
            padding: 0;
          }
        }
      }
    }
  }

  .gallery {
    .caroussel {
      width: 90%;
      height: auto;
      margin: 0 auto;
      margin-top: 5%;
      img {
        width: 80%;
        height: auto;
        margin: 0 auto;
        object-fit: contain;
      }
    }
  }
`;

export default StyledWeedingPage;
