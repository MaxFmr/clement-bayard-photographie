import styled from 'styled-components';
const StyledFoodPage = styled.section`
  .resume {
    font-size: 12px;
    display: flex;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 15px;
    background-color: #46466d;
    width: 90%;
    margin: 0 auto;
    margin-top: 5%;
    opacity: 0.8;
    display: flex;

    @media (min-width: 380px) {
      width: 70%;
    }
    .bg {
      height: 220px;

      background-image: url('https://res.cloudinary.com/dal6ewwdl/image/upload/v1660111539/Cl%C3%A9ment%20Bayard%20Website/food/IMG_0965_n9buqc.jpg');
      background-repeat: no-repeat;
      background-size: cover;

      @media (min-width: 380px) {
        background-position: center;
        height: 500px;
        padding: 20px;
        p {
          width: 30%;
          font-size: 15px;
        }
      }
      font-size: 12px;
      color: #ffff;
      padding: 5px;
      margin-bottom: 10px;
      border-radius: 15px;
    }
    @media (min-width: 500px) {
      p {
        width: 30%;
        font-size: 15px;
      }
    }

    .customers {
      width: 75%;
      padding-top: 30px;
      padding-bottom: 30px;
      background-color: #212045;
      border-radius: 15px;
      margin: 0 auto;
    }
  }
`;
export default StyledFoodPage;
