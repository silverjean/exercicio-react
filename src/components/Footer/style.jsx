import styled from 'styled-components';

const FooterDiv = styled.div`
  width: 100%;
  background-color: #7ed6df;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Rigth = styled.div`
  ul li {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    float: left;
    padding: 10px;
    cursor: pointer;
  }
`;

const Left = styled.div`
  display: flex;
  width: 45%;
  align-items: center;

  .icon {
    padding-right: 5px;
    cursor: pointer;
  }
`;

export { FooterDiv, Div, Rigth, Left };
