import styled from 'styled-components';
// Props:
// -----
// 
const SideCard = styled.div`
  display: flex;
  height: 70px;
  img{
    height: 70px;
    width: 74px;
  }
  .topic{
    margin-left: 15px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
`;
export default SideCard;