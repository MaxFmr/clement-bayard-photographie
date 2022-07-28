import styled from 'styled-components';
interface props {
  bgUrl: string;
}
const StyledWelcome = styled.section<props>`
  .block {
    height: 350px;
    width: 100vw;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }
`;

export default StyledWelcome;
