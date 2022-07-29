import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  color: white;
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
  width: 100%;
  border-radius: 5px;
  border: solid #d8d8d8 1px;
  opacity: 0.84;
  @media (max-width: 700px) {
    height: 50px;
    font-size: small;
  }
  .title {
    span {
      font-weight: bold;
      font-size: x-large;
    }
  }

  .instaHeader {
    margin-left: 30%;
  }
`;

export default StyledHeader;
