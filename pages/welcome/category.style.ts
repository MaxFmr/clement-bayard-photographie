import styled from 'styled-components';

interface Props {
  categoryId: number;
  bgUrl: string;
}
const StyledWelcome = styled.section<Props>`
  width: 100%;
  .container1 {
    height: 300px;
  }
`;

export default StyledWelcome;
