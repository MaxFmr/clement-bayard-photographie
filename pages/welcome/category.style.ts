import styled from 'styled-components';
interface props {
  bgUrl: string;
}
const StyledWelcome = styled.section`
  background-color: black;
  .block {
    height: 250px;
    width: 100vw;
    overflow: hidden;
    position: relative;

    img {
      object-fit: cover;
      position: fixed;
    }
    #background-video {
      padding-top: 5%;
    }
  }
`;

export default StyledWelcome;
