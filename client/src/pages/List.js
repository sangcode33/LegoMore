import Header2 from "../components/Header2";
import LogoImage from "../components/Logo";
import mockup2 from "../mockup/2.png";
import mockup3 from "../mockup/3.png";
import mockup4 from "../mockup/4.png";
import mockup5 from "../mockup/5.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const GoodsImg = styled.img`
  height: 90px;
  //display: block;
  margin: 0 auto;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Goods = styled(Link)`
  text-decoration: none;
  background: white;
  width: 230px;
  height: 200px;
  border-radius: 20px;
  border: 4px dashed #bcbcbc;
  margin: 30px;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: left;
  color: black;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-weight: bold;
  font-size: xx-large;
`;

const List = () => {
  //Header1, Header2에서 props로 상품정보 가져와야한다. 그리고 map함수 사용해야.
  const [data, setData] = useState([]);
  // data = [게시물1, 게시물2, 게시물3];
  useEffect(() => {
    axios.get("http://localhost:4000/goods/goods-auth").then((res) => {
      // console.log(res);
      setData(res.data.data);
    });
  }, []);
  console.log(data);
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
        {/* {data.map((list) => {
          return <Detail list={list} key={list.id} />;
        })} */}
      </Container>
    </div>
  );
};

export default List;
