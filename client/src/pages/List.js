import Header2 from "../components/Header1";
import LogoImage from "../components/Logo";
import mockup2 from "../mockup/2.png";
import mockup3 from "../mockup/3.png";
import mockup4 from "../mockup/4.png";
import mockup5 from "../mockup/5.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return (
    <div>
      <Header2 />
      <LogoImage />
      <Title>레고모아 인기매물</Title>
      <Container>
        <Goods to="/goods/detail">
          <Contents>
            <GoodsImg src={mockup2} alt="" />
            <div>미피 저렴하게 드립니다</div>
            <span>50,000원</span>
            <span>최상급</span>
            {/* {goods.map((el, idx) => <Goods el={el} key={idx}/>)} */}
          </Contents>
        </Goods>
        <Goods to="/goods/detail">
          <Contents>
            <GoodsImg src={mockup3} alt="" />
            <div>미피 저렴하게 드립니다</div>
            <span>50,000원</span>
            <span>최상급</span>
            {/* {goods.map((el, idx) => <Goods el={el} key={idx}/>)} */}
          </Contents>
        </Goods>
        <Goods to="/goods/detail">
          <Contents>
            <GoodsImg src={mockup4} alt="" />
            <div>미피 저렴하게 드립니다</div>
            <span>50,000원</span>
            <span>최상급</span>
            {/* {goods.map((el, idx) => <Goods el={el} key={idx}/>)} */}
          </Contents>
        </Goods>
        <Goods to="/goods/detail">
          <Contents>
            <GoodsImg src={mockup5} alt="" />
            <div>미피 저렴하게 드립니다</div>
            <span>50,000원</span>
            <span>최상급</span>
            {/* {goods.map((el, idx) => <Goods el={el} key={idx}/>)} */}
          </Contents>
        </Goods>
      </Container>
    </div>
  );
};

export default List;
