import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
  row-gap: 15px;
  .full-width{
    grid-column: 1 / span 2;
  }
`;
export default Form;