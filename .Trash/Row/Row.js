import styled from 'styled-components';
import Container from './../Container/Container';
// Row Is Just A Container With No Wrap Styling
function Row({children}){
  return(
    <Container noWrap>
      {children}
    </Container>
  )
};
export default Row;

