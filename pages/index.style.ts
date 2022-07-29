import styled from 'styled-components';

const StyledLandingPage = styled.section`
  height: 100vh;

  .insta {
    position: fixed;
    color: #3f3f3f;
    background-color: #d8d8d8;
    display: flex;
    align-items: center;
    padding: 0 5px;
    border-radius: 5px;
    top: 3%;
    left: 5%;
    opacity: 0.9;
    padding: 2px 3px;
    @media (max-width: 700px) {
      top: 12%;
    }
    :hover {
      opacity: 1;
    }
  }

  .name {
    position: fixed;
    top: 3%;
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #d8d8d8;
    cursor: default;
    font-size: larger;
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
    margin-top: 41%;
    color: #d8d8d8;
    font-size: xx-large;
    cursor: pointer;
  }
  .enter {
    display: flex;
    padding: 10px;
    border: solid #d8d8d8 2px;
    margin-top: 42%;
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
