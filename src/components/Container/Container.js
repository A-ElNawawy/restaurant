import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  padding: 0 15px;
  @media (min-width: 768px) and (max-width: 991px){
    &{
      width: 760px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px){
    &{
      width: 980px;
    }
  }
  @media (min-width: 1200px){
    &{
      width: 1170px;
    }
  }
`;
export default Container;