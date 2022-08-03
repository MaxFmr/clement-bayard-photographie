import styled from 'styled-components';

const StyledWelcome = styled.section`
  font-family: 'JetBrains Mono', monospace;

  position: absolute;

  width: 100%;
  position: absolute;
  .container1 {
    cursor: pointer;
    display: flex;
    height: 400px;
    @media (max-width: 700px) {
      height: 150px;
    }
  }
  color: white;
  border-radius: 5px;

  .parallax {
    margin: 5px 0px 5px 0px;
    display: flex;
    @media (max-width: 700px) {
      justify-content: center;
      font-size: 13px;
    }

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

      h3 {
        font-family: 'Montserrat', sans-serif;
        color: #ffff;
        text-transform: uppercase;
      }
      @media (max-width: 700px) {
        display: none;
      }
    }
  }
  .phoneDisplayTitle {
    z-index: 1;
    color: #f7f7f7;
    padding-top: 40px;
    @media (min-width: 700px) {
      display: none;
    }
  }
`;

export default StyledWelcome;
