import styled from 'styled-components';
const StyledFooter = styled.footer`
  height: 100px;
  width: 100vw;
  position: relative;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  a {
    text-decoration: none;
    color: #ffff;
    font-size: 10px;
  }
  button {
    display: inline-block;
    font-size: smaller;

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
`;
export default StyledFooter;
