import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './Card';
import BlurCardBtn from './BlurCardBtn';
import Loading from './Loading';

const Wrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  justify-content: center;
  justify-items: center;
  row-gap: 30px;
  padding: 1rem;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const api = 'http://localhost:3002/API/products';

const Cards = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [visible, setVisible] = useState(true);
  const [page, setPage] = useState(1);
  const size = 8;

  useEffect(() => {
    setLoadingPage(true);
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);

      const {
        data: { products, lengthOfItems }
      } = await axios.post(`${api}?size=${size}&page=${page}`);

      const copyProducts = [...productList];

      copyProducts.push(...products);

      if (lengthOfItems === copyProducts.length) setVisible(false);

      setProductList(copyProducts);
      setPage(prevState => prevState + 1);
    } catch (e) {
      console.log(e.message);
      //we can make new Component for error handling
    } finally {
      setLoading(false);
      setLoadingPage(false);
    }
  };

  const listOfProducts = productList.map(item => {
    return <Card key={Date() + item.title} item={item} />;
  });

  return (
    <Wrapper>
      {!loadingPage ? (
        <>
          <CardsContainer>{listOfProducts}</CardsContainer>
          {!!productList.length && visible && (
            <BlurCardBtn loaded={fetchItems} loading={loading} />
          )}
        </>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

export default Cards;
