import styled from 'styled-components';
const StyledInfos = styled.section`
  margin: 5%;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    font-size: smaller;
  }
  .txt {
    width: 60%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .presentation {
    flex: 2;
    @media (max-width: 600px) {
      margin-bottom: 10%;
    }
  }
  .photographer {
    flex: 1;
    img {
      border-radius: 15px;
    }
  }
`;
export default StyledInfos;
