import styled from 'styled-components';
const StyledContactPage = styled.section`
  height: 100vh;
  width: 100vw;
  .contact {
    display: block;

    padding: 10%;
    h2 {
      margin-bottom: 30px;
      font-weight: bold;
    }
    .info {
      width: 270px;
      display: flex;
      height: 10%;
      align-items: center;

      a {
        text-decoration: none;
        color: white;
      }

      cursor: pointer;
    }
  }
`;
export default StyledContactPage;
