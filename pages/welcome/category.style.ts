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
  }
`;

export default StyledWelcome;

export const StyledItem = styled.div<props>`
  border: solid black 3px;
  background-image: url(${(props) => props.bgUrl});
  height: 350px;
  background-size: cover;
`;
