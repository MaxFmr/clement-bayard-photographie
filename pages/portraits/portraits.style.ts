import styled from 'styled-components';

const StyledPortraitsPage = styled.section`
  .gallery {
    padding: 20px;
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

export default StyledPortraitsPage;
