import styled from 'styled-components';
const StyledFooter = styled.footer`
  width: 100%;
  height: 20px;
  position: relative;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  border-top: solid 1px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8);
  margin-top: 50px;
  @media (max-width: 600px) {
    /* Smartphones (landscape) ----------- */
    /* Styles */
    /* font-size: 2%; */
    height: 30%;
    top: 20vh;
  }
  a {
    text-decoration: none;
    color: #ffff;
    font-size: 10px;
    text-decoration: underline;
    :hover {
      color: black;
    }
  }
  button {
    display: inline-block;
    font-size: smaller;
    margin: 2%;

    background: none;
    border: none;
    color: #ffff;
    padding: 1%;
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
