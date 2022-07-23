import styled from 'styled-components';

const StyledLandingPage = styled.section`
  height: 100vh;
  background-color: #3f3f3f;
  font-family: 'JetBrains Mono', monospace;
  .insta {
    position: fixed;
    left: 7%;
    top: 3%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 140px;
    background-color: none;
    opacity: 0.5;
    color: black;

    :hover {
      opacity: 1;
    }
    cursor: pointer;
    text-decoration: none;
  }
  .name {
    position: fixed;
    top: 3%;
    border: solid #d8d8d8 1px;
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    color: #d8d8d8;
    cursor: default;
    margin-top: 1%;
  }

  .bg {
    background-image: url('/assets/1.jpg');
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .scrollDown {
    margin-top: 41%;
    color: white;
    font-size: xx-large;
    cursor: pointer;
  }
  .enter {
    display: flex;
    padding: 10px;
    border: solid #ffff 2px;
    margin-top: 42%;
    color: white;
    font-size: x-large;
    cursor: pointer;
    border-radius: 5px;
  }
  .bg2 {
    background-image: url('/assets/5.jpg');
    height: 100vh;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 570px) {
      background-position: center;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledLandingPage;
