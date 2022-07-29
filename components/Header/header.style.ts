import styled from 'styled-components';

const StyledHeader = styled.header`
  background: rgb(2, 0, 36);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 2%,
    rgba(134, 137, 178, 1) 85%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 100px;
  position: fixed;
  z-index: 1;
  width: 100%;
  border-radius: 5px;
  border: solid #d8d8d8 1px;
  opacity: 0.8;
  @media (max-width: 700px) {
    height: 50px;
  }
`;

export default StyledHeader;
