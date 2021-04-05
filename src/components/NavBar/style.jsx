import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-top: 25px;

  div.items {
    display: block;
    justify-content: center;
    align-items: center;
    padding: 3px;

    width: 33%;
    height: 130px;

    transition: 0.8s;
    &:hover {
      transition: 0.3s;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
  }

  .icons {
    display: flex;
    align-items: center;

    padding-bottom: 10px;

    color: #7ed6df;

    width: 50px;
    height: 50px;
  }

  span {
    color: #c2c1c1;
  }
`;
