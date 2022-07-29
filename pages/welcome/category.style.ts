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
    display: flex;
    height: 300px;
    position: relative;
    @media (max-width: 700px) {
      height: 150px;
    }
  }
  .item {
    :hover {
      opacity: 1;
    }
    color: white;
    .title {
      position: relative;
      z-index: 1;
    }
  }
  .title {
    position: fixed;
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
