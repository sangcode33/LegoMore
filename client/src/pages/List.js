import Header2 from "../components/Header2";
import LogoImage from "../components/Logo";
import mockup2 from "../mockup/2.png";
import mockup3 from "../mockup/3.png";
import mockup4 from "../mockup/4.png";
import mockup5 from "../mockup/5.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import { useEffect, useState } from "react";

=======
import { useState, useEffect } from "react";
import "./List.css";
>>>>>>> 039fde96b8c68332e3a38d60543c01b8be92c3da

const GoodsImg = styled.img`
  height: 90px;
  //display: block;
  margin: 0 auto;
  margin-bottom: 20px;
`;
// export const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-content: normal;
//   justify-content: space-around;
//   align-items: normal;
// `;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-around;
  align-content: normal;
  align-items: normal;
  margin: 40px 80px;
  //background: yellow;
`;

export const Goods = styled(Link)`
  text-decoration: none;
  background: white;
  /* hover {
    box-shadow: 0 80px 0 0 #fceb3e inset;
    font-weight: bold;
  } */
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 90px;
  height: 150px;
  padding: 80px;
  margin-right: 30px;
  margin-bottom: 56px;
  align-items: left;
  color: black;
  border-radius: 20px;
  border: 4px dashed #bcbcbc;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-weight: bold;
  font-size: xx-large;
  margin-top: 80px;
`;

const List = () => {
  //Header1, Header2에서 props로 상품정보 가져와야한다. 그리고 map함수 사용해야.
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/goods/goods-auth").then((res) => {
      //console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);

  //console.log(data);

  //console.log(data);
  return (
    <div>
      <Header2 />
      <LogoImage />
      <Title>레고모아 인기매물</Title>
      <Container>
        {data.map((list) => (
          <div key={list.id}>
            <Goods
              to={{
                pathname: `/goods/detail/${list.id}`,
                state: {
                  id: list.id,
                  title: list.title,
                  price: list.price,
                  status: list.status,
                  description: list.description,
                },
              }}
            >
              <Contents listId={list.id}>
                <GoodsImg src={mockup2} alt="" />
                <div>{list.title}</div>
                <span>{list.price} 원</span>
                <span>{list.status}</span>
              </Contents>
            </Goods>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default List;
