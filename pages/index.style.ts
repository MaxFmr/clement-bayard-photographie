import styled from 'styled-components';

const StyledLandingPage = styled.section`
  height: 100vh;

  .insta {
    margin-top: 10px;
    margin-left: 1px;
  }
  .name {
    z-index: 2;
    text-align: center;
    padding: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 3%;
    color: white;
    .brand {
      font-size: 30px;
      font-family: 'Montserrat', sans-serif;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    .work {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
  }

  .bg {
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  .scrollDown {
    border: solid 1px;
    padding: 10px;
    border-radius: 5px;
    margin-top: 83vh;
    color: #ffff;
    font-size: xx-large;
    cursor: pointer;
    position: fixed;
    z-index: 3;
    top: 3%;
  }
  .bg2 {
    height: 100vh;
    display: flex;
  }
`;

export default StyledLandingPage;
