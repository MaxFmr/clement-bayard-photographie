import styled from 'styled-components';

const StyledHeader = styled.header`
  font-family: 'Montserrat', sans-serif;
  color: #ffff;
  display: flex;
  height: 130px;
  @media (max-width: 600px) {
    height: 50px;
  }
  background-color: black;
  display: flex;
  align-items: center;

  font-size: 30px;
  opacity: 0.7;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8);
  justify-content: space-around;
  .title {
    cursor: default;
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
  .buttons {
    width: 30%;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    @media (max-width: 700px) {
      font-size: 14px;
      justify-content: center;
    }
    button {
      display: inline-block;

      background: #000;
      border: none;
      color: #ffff;
      cursor: pointer;
      :after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background: #628eb3;

        transition: width 0.3s;
      }
      :hover::after {
        width: 100%;
        //transition: width .3s;
      }
    }
  }
`;

export default StyledHeader;
