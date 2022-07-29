import styled from 'styled-components';

const StyledInstagramButton = styled.div`
  .insta {
    font-family: 'JetBrains Mono', monospace;
    z-index: 2;

    position: fixed;
    color: #3f3f3f;
    background-color: #d8d8d8;
    display: flex;
    align-items: center;
    padding: 0 5px;
    border-radius: 5px;
    top: 3%;
    left: 5%;
    opacity: 0.9;
    padding: 2px 10px;
    @media (max-width: 700px) {
      top: 12%;
    }
    :hover {
      opacity: 1;
    }
  }
`;

export default StyledInstagramButton;
