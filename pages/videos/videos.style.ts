import styled from 'styled-components';
const StyledVideos = styled.section`
  video {
    width: 60%;
    margin: 0 auto;
    margin-top: 8%;
    @media (max-width: 600px) {
      /* Smartphones (landscape) ----------- */
      /* Styles */
      /* font-size: 2%; */
      width: 90%;
    }
  }
`;
export default StyledVideos;
