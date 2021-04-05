import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;

  div.content {
    width: 45%;
    text-align: justify;
  }

  img {
    width: 45%;
    height: 300px;
    object-fit: cover;
  }
`;

export const DivR = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  padding: 5px;

  div.content {
    width: 45%;
    text-align: justify;
  }

  img {
    width: 45%;
    height: 300px;
    object-fit: cover;
  }
`;
