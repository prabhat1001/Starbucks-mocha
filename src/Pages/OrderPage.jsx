import React, { useState } from "react";
import styled from 'styled-components'
// import '../Components/Modal.css';
const OrderPage = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <OrderContainer>
        <Wave src='/images/wave-3.png' alt='waves' />
        <OrderImg src="/images/Order.png" alt="Order-items" />
        <OrderBox>
          <Heading>Wow, You have a Great Choice!</Heading>
            <Detail>
              <h3>Size</h3>
              <p>Grande L</p>
            </Detail>
            <Detail>
              <h3>Milk</h3>
              <p>Coconut</p>
            </Detail>
            <Detail>
              <h3>Price</h3>
              <p>$ 5.36</p>
            </Detail>

          <Button onClick={toggleModal}>
            <h3>Order Now</h3>
          </Button >

          {modal && (
          <ModalContainer>
          <div onClick={toggleModal} className="overlay"></div>
          <ModalContent>
            <Close onClick={toggleModal}><img src="/images/cross.png" alt="cross" /></Close>
            <img src="/images/success.gif" alt="done" />
          </ModalContent>
        </ModalContainer>
          )}

        </OrderBox>
        <ImgBox >
          <img src="/images/gif-3.gif" alt="img" />
        </ImgBox>
    </OrderContainer>
  )
}


const ModalContainer = styled.div`
  width: 100%;
  background-color: #000
`;

const Close = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  right: 0;
  margin: 1rem;
  border-radius: 5px;
  background-color: #fdbaba;
  border: none;
  cursor: pointer;
  img{
    width: 24px;
    height: 21px;
  }
`;


const OrderContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: F0DDC5;
`;

const Wave = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;

`;

const Detail = styled.div`
    margin-top: 0.5rem;
    margin-left: 1rem;
    color: #B52B40;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.5rem;
    display: flex;
    width: 350px;
    /* background-color: #0b52b4; */

    h3{
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 2.5rem;
      color: #000;
      margin-left: 5px;
    }
    p{
      margin-left: 12rem;
      align-items: right;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 2.5rem;
      color: green;
    }
`;

const Heading = styled.h1`
    margin-top: 2rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    color: #B52B40;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem;
`;

const ImgBox = styled.div`
    position: absolute;
    top: 50%;
    left: 18%;
    transform: translate(-50%, -50%);
    height: 400px;
    width: 400px;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    img{
      width: 100%;
      height: 100%;
      border-radius: 25px;
    }
`;

const OrderBox = styled.div`
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    height: 400px;
    width: 400px;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);

`;

const OrderImg = styled.img`
    z-index: 2;
    position: absolute;
    top: 74%;
    left: 80%;
    transform: translate(-50%, -50%);
    height: 300px;
    width: 600px;
`;

const Button = styled.div`
    background-color: #FFB52A;
    width: 300px;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    border-radius: 25px;
    h3{
      text-align: center;
      font-size: 1.5rem;
      font-weight: 500;
      padding-top: 0.7rem;
    }
    :hover{
      color: #FBB80F;
      background-color: #082920;
      cursor: pointer;
      transform: scale(1.125);
      transition: all 0.2s ease;
      cursor: pointer;
    }

`;

const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    height: 400px;
    width: 500px;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    img{
      width: 100%;
      height: 100%;
      border-radius: 25px;
    }

`;

export default OrderPage