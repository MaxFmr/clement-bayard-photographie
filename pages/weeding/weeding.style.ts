import styled from 'styled-components';

const StyledWeedingPage = styled.section`
  width: 100%;

  .pricing {
    font-size: 12px;
    display: flex;
    font-size: 13px;

    img {
      object-fit: cover;
      border-radius: 15px;
    }
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 15px;
    background-color: #46466d;
    @media (max-width: 750px) {
      width: 92%;
    }
    @media (max-width: 1120px) {
      font-size: 10px;
    }
    @media (max-width: 570px) {
      width: 100%;
      font-size: 7px;
      .txt {
        margin: 4px 0px;
      }
      padding: 10px;
    }

    width: 65%;
    margin: 0 auto;
    margin-top: 5%;
    opacity: 0.8;

    h3 {
      font-family: 'Montserrat', sans-serif;
    }

    .formula1 {
      border: #151438 1px solid;
      border-radius: 15px;

      margin-bottom: 2%;
      background-color: #151438;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .txt {
        width: 40%;
        margin-right: 15%;
      }
      .bg {
        width: 40%;
        height: 100%;
        background-color: #393a5f;
        border-radius: 15px;

        img {
          padding-right: 100px;
          @media (max-width: 900px) {
            padding: 0;
          }
        }
      }
    }
    .formula2 {
      border-radius: 15px;
      border: #151438 1px solid;

      margin-bottom: 2%;
      background-color: #151438;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      .txt {
        width: 40%;
        margin-left: 15%;
      }

      .bg {
        border-radius: 15px;
        height: 100%;

        width: 40%;
        background-color: #7a7da6;

        img {
          padding-left: 100px;
          @media (max-width: 900px) {
            padding: 0;
          }
        }
      }
    }
    .formula3 {
      border-radius: 15px;
      border: #151438 1px solid;

      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: #151438;

      .txt {
        width: 40%;
        margin-right: 15%;
      }
      .bg {
        border-radius: 15px;

        width: 40%;
        height: 100%;
        background-color: #393a5e;
        img {
          padding-right: 100px;
          @media (max-width: 900px) {
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

export default StyledWeedingPage;
