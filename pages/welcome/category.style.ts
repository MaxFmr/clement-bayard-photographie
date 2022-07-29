import styled from 'styled-components';

const StyledWelcome = styled.section`
  font-family: 'JetBrains Mono', monospace;

  position: absolute;
  margin-top: 100px;
  @media (max-width: 700px) {
    margin-top: 50px;
  }
  width: 100%;
  position: absolute;
  .container1 {
    cursor: pointer;
    display: flex;
    height: 300px;
    @media (max-width: 700px) {
      height: 150px;
    }
  }
  .item {
    color: white;
    border: solid #d8d8d8 1px;
    border-radius: 5px;

    .title {
      z-index: 1;
    }

    .parallax {
      :focus {
        opacity: 0.6;
      }
    }
  }
  .title {
    margin-left: 2%;
    margin-top: 20px;
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
    video {
      height: 300px;
      object-fit: cover;
      width: 100%;
    }
  }
`;

export default StyledWelcome;
