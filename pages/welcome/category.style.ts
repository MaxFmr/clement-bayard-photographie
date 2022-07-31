import styled from 'styled-components';

const StyledWelcome = styled.section`
  font-family: 'JetBrains Mono', monospace;

  position: absolute;
  @media (max-width: 700px) {
  }
  width: 100%;
  position: absolute;
  .container1 {
    cursor: pointer;
    display: flex;
    height: 400px;
    @media (max-width: 700px) {
      height: 150px;
    }
    @media (max-width: 1440px) {
      height: 300px;
    }
  }
  color: white;
  border-radius: 5px;

  .parallax {
    display: flex;
    :hover {
      opacity: 0.8;
    }
    .title {
      z-index: 1;
      color: #f7f7f7;
      height: 50px;
      display: flex;
      justify-content: center;
      padding: 5px;
      position: relative;
      flex-direction: column;
      top: 175px;
      @media (max-width: 1440px) {
        top: 120px;
      }
    }
    h3 {
      font-family: 'Montserrat', sans-serif;
      color: #ffff;
      text-transform: uppercase;
    }
  }

  .videoItem {
    display: flex;
    height: 300px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
      height: 150px;
    }
    .titleVideo {
    }
    video {
      height: 300px;
      object-fit: cover;
      width: 100%;
      position: relative;
    }
  }
`;

export default StyledWelcome;
