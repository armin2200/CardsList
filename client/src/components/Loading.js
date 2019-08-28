import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveLeft = keyframes`
to {
      -webkit-transform: translate(20px, 0);
      -ms-transform: translate(20px, 0);
      -moz-transform: translate(20px, 0);
      transform: translate(20px, 0);
      background: #ff0084;
    }
`;
const moveRight = keyframes`
 to {
      -webkit-transform: translate(-20px, 0);
      -ms-transform: translate(-20px, 0);
      -moz-transform: translate(-20px, 0);
      transform: translate(-20px, 0);
      background: #0063dc;
    }
`;

const Container = styled.div`
  width: 25%;
  margin: 15% auto;
  text-align: center;

  .loading span {
    display: inline-block;
    padding: 8px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
  }
  .ball1 {
    background: #0063dc;
    -webkit-animation: ${moveLeft} 800ms ease-in-out infinite alternate;
    -moz-animation: ${moveLeft} 800ms ease-in-out infinite alternate;
    -ms-animation: ${moveLeft} 800ms ease-in-out infinite alternate;
    -animation: ${moveLeft} 800ms ease-in-out infinite alternate;
  }
  .ball2 {
    background: #ff0084;
    -webkit-animation: ${moveRight} 800ms ease-in-out infinite alternate;
    -moz-animation: ${moveRight} 800ms ease-in-out infinite alternate;
    -ms-animation: ${moveRight} 800ms ease-in-out infinite alternate;
    animation: ${moveRight} 800ms ease-in-out infinite alternate;
  }
  /* @-webkit-keyframes move-left {
    to {
      -webkit-transform: translate(20px, 0);
      -ms-transform: translate(20px, 0);
      -moz-transform: translate(20px, 0);
      transform: translate(20px, 0);
      background: #ff0084;
    }
  } */
  /* @-moz-keyframes move-left {
    to {
      -webkit-transform: translate(20px, 0);
      -ms-transform: translate(20px, 0);
      -moz-transform: translate(20px, 0);
      transform: translate(20px, 0);
      background: #ff0084;
    }
  } */
  /* @-ms-keyframes move-left {
    to {
      -webkit-transform: translate(20px, 0);
      -ms-transform: translate(20px, 0);
      -moz-transform: translate(20px, 0);
      transform: translate(20px, 0);
      background: #ff0084;
    }
  } */
  /* @-o-keyframes move-left {
    to {
      -webkit-transform: translate(20px, 0);
      -ms-transform: translate(20px, 0);
      -moz-transform: translate(20px, 0);
      transform: translate(20px, 0);
      background: #ff0084;
    }
  } */
  /* @keyframes move-left {
    to {
      -webkit-transform: translate(20px, 0);
      -ms-transform: translate(20px, 0);
      -moz-transform: translate(20px, 0);
      transform: translate(20px, 0);
      background: #ff0084;
    }
  } */
  /* @-webkit-keyframes move-right {
    to {
      -webkit-transform: translate(-20px, 0);
      -ms-transform: translate(-20px, 0);
      -moz-transform: translate(-20px, 0);
      transform: translate(-20px, 0);
      background: #0063dc;
    }
  }
  @-moz-keyframes move-right {
    to {
      -webkit-transform: translate(-20px, 0);
      -ms-transform: translate(-20px, 0);
      -moz-transform: translate(-20px, 0);
      transform: translate(-20px, 0);
      background: #0063dc;
    }
  }
  @-ms-keyframes move-right {
    to {
      -webkit-transform: translate(-20px, 0);
      -ms-transform: translate(-20px, 0);
      -moz-transform: translate(-20px, 0);
      transform: translate(-20px, 0);
      background: #0063dc;
    }
  }
  @-o-keyframes move-right {
    to {
      -webkit-transform: translate(-20px, 0);
      -ms-transform: translate(-20px, 0);
      -moz-transform: translate(-20px, 0);
      transform: translate(-20px, 0);
      background: #0063dc;
    }
  } */
  /* @keyframes move-right {
    to {
      -webkit-transform: translate(-20px, 0);
      -ms-transform: translate(-20px, 0);
      -moz-transform: translate(-20px, 0);
      transform: translate(-20px, 0);
      background: #0063dc;
    }
  } */
`;

const Loading = () => {
  return (
    <Container className='block'>
      <div className='loading'>
        <span className='ball1' />
        <span className='ball2' />
      </div>
    </Container>
  );
};

export default Loading;
