import styled from 'styled-components';

const StyledLandingPage = styled.section`
  height: 100vh;

  .insta {
    margin-top: 10px;
    margin-left: 1px;
  }
  .name {
    text-align: center;
    padding: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 7%;
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
    background-image: url('/assets/landingBW.jpg');
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    image-rendering: optimize-contrast; /* CSS3 Proposed       */
  }
  .scrollDown {
    border: solid 1px;
    padding: 1%;
    border-radius: 5px;
    margin-top: 80vh;
    color: #ffff;
    font-size: xx-large;
    cursor: pointer;
  }
  .enter {
    display: flex;
    padding: 10px;
    border: solid #d8d8d8 2px;
    margin-top: 75vh;
    color: #d8d8d8;
    font-size: x-large;
    cursor: pointer;
    border-radius: 5px;
  }
  .bg2 {
    background-image: url('/assets/landingColor.jpg');
    height: 100vh;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1200px) {
      background-position: center;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledLandingPage;
