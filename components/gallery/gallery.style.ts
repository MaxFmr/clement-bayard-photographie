import styled from 'styled-components';

const StyledGallery = styled.section`
  padding: 20px;
  @media (max-width: 750px) {
    padding: 0;
  }
  .closeButton {
    @media (max-width: 750px) {
      top: 5px;
    }
    background: none;
    position: relative;
    border: none;
    left: 80vw;
    padding: 5px;
    border-radius: 5px;
    color: #ffff;
    margin-bottom: 5px;
    cursor: pointer;
    img {
      filter: invert(100%) sepia(5%) saturate(7481%) hue-rotate(283deg)
        brightness(124%) contrast(105%);
    }
  }
  .gallery {
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    grid-column-gap: 15px;
    grid-row-gap: 30px;
    @media (max-width: 750px) {
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
    .container {
      :hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }
`;

export default StyledGallery;
