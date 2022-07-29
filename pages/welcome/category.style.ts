import styled from 'styled-components';

const StyledWelcome = styled.section`
  background-color: #3f3f3f;
  width: 100%;
  .container1 {
    height: 300px;

    overflow: hidden;
    @media (max-width: 700px) {
      height: 150px;
    }
  }
  .videoItem {
    display: flex;
    height: 300px;
    overflow: hidden;
    justify-content: center;
    @media (max-width: 700px) {
      height: 150px;
    }
    video {
      object-fit: cover;
      width: 100%;
    }
  }
`;

export default StyledWelcome;
