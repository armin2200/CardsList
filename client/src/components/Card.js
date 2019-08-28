import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  background-color: #f1f1f1;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
`;
const Title = styled.h1`
  margin-top: 10px;
  font-size: 18px;
  @media only screen and (max-width: 640px) {
    font-size: 22px;
  }
  color: #222;
`;
const Price = styled.h3`
  margin: 10px 0;
  font-size: 18px;
  color: #222;
`;
const ImgContainer = styled.div`
  padding: 5px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Card = ({ item }) => {
  return (
    <Container>
      <ImgContainer>
        <img src='https://source.unsplash.com/random' alt={item.title} />
      </ImgContainer>

      <Title>{item.title}</Title>
      <Price>{item.price}</Price>
    </Container>
  );
};

export default Card;
