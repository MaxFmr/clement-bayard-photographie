import styled from 'styled-components';

const StyledWeedingPage = styled.section`
  width: 100%;
  .pricing {
    h3 {
      font-family: 'Montserrat', sans-serif;
    }
    width: 65%;
    margin: 0 auto;
    margin-top: 5%;

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
        }
      }
    }
  }
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
`;

export default StyledWeedingPage;
