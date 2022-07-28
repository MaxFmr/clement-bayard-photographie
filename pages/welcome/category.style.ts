import styled from 'styled-components';
interface props {
  bgUrl: string;
}
const StyledWelcome = styled.section`
  .block {
    height: 350px;
    width: 100vw;
    overflow: hidden;
    position: relative;

    img {
      object-fit: cover;
    }
    #background-video {
    }
  }
`;

export default StyledWelcome;
