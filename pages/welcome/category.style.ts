import styled from 'styled-components';
interface props {
  bgUrl: string;
}
const StyledCategory = styled.section<props>`
  .category {
    background-image: url(${(props) => props.bgUrl});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    height: 1000px;
    width: 100vw;
  }
`;

export default StyledCategory;
