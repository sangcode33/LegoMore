import mockup2 from "../mockup/2.png";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import myImage2 from "../images/background2.jpeg";

const GoodsImg = styled.img`
  height: 90px;
  //display: block;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const HeaderImage2 = styled.section`
  background-image: url(${myImage2});
  top: 100%;
  left: 0;
  width: 100%;
  height: 40vh;
  background-size: cover;
`;

const Image2 = styled.div`
  position: absolute;
  text-align: left;
`;

const Text2 = styled.h1`
  position: absolute;
  color: #040738;
  width: 400px;
  font-size: 40px;
  // transform: translate(30%, -1050%);
  top: -230px;
  left: 200px;
`;

const TextSmall = styled.div`
  color: #040738;
  width: 500px;
  font-size: 20px;
  transform: translate(1%, 100%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: normal;
  align-items: normal;
  margin: 40px;
  //background: yellow;
`;

export const Goods = styled(Link)`
  text-decoration: none;
  background: white;
  // hover {
  //   box-shadow: 0 80px 0 0 #fceb3e inset;
  //   font-weight: bold;
  // }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 200px;
  padding: 35px;
  margin-right: 30px;
  margin-bottom: 30px;
  align-items: left;
  color: black;
  border-radius: 20px;
  border: 2px solid #040738;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: xx-large;
  margin-top: 80px;
`;

export default function HeaderImage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/goods/goods-auth").then((res) => {
      //console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);

  return (
    <div>
      <HeaderImage2 />
      <Image2>
        <Text2>
          이제 네고하지 마세요.
          <br />
          <TextSmall>
            실시간 올라오는 핫매물 클릭 한 번으로 절대 놓치지 마세요.
          </TextSmall>
        </Text2>
      </Image2>
      {/* <Title>레고모아 인기매물</Title> */}
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
                <h3> {list.title}</h3>
                <div>•가격: {list.price}원</div>
                <div>•상태: {list.status}</div>
              </Contents>
            </Goods>
          </div>
        ))}
      </Container>
    </div>
  );
}
