import Header1 from "../components/Header1";
import LogoImage from "../components/Logo";
import Nav from "../components/Nav";
import mockupimage from "../mockup/2.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GoodsImg = styled.img`
  height: 90px;
  //display: block;
  margin: 0 auto;
`;

// const List = () => {
//   //Header1, Header2에서 props로 상품정보 가져와야한다. 그리고 map함수 사용해야.
//   return (
//     <div>
//       <Header1 />
//       <LogoImage />
//       <Nav />
//       <div>
//         <div>레고 중고거래 매물</div>

//         <Link to="/goods/detail">
//           <div>
//             <GoodsImg src={mockupimage} alt="" />
//             {/* src를 props로 가져와야*/}
//             <ul>
//               <li>
//                 <span>상품</span>
//                 <span>레고 나홀로집에</span>
//                 {/* 상품이 뭔지 props로 받아서 가져와야한다 {props...}*/}
//               </li>
//               <li>
//                 <span>가격</span>
//                 <span>50,000</span>
//                 {/* 가격을 props로 받아서 가져와야한다 props... */}
//               </li>
//             </ul>
//           </div>
//         </Link>
//         {/* 이걸 컴포넌트로 할 필요가 있을까? */}
//       </div>
//     </div>
//   );
// };

// export default List;

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
      <Header1 />
      <LogoImage />
      <Nav />
      <Title>레고모아 인기매물</Title>
      <Container>
        <Goods to="/goods/detail">
          <Contents>
            <GoodsImg src={mockupimage} alt="" />
            <div>미피 저렴하게 드립니다</div>
            <span>50,000원</span>
            <span>미개봉 최상급</span>
          </Contents>
        </Goods>
        <Goods to="/goods/detail">
          <Contents>
            <GoodsImg src={mockupimage} alt="" />
            <div>미피 저렴하게 드립니다</div>
            <span>50,000원</span>
            <span>미개봉 최상급</span>
          </Contents>
        </Goods>
        <Goods to="/users/login">
          <Contents>
            <GoodsImg src={mockupimage} alt="" />
            <div>미피 저렴하게 드립니다</div>
            <span>50,000원</span>
            <span>미개봉 최상급</span>
          </Contents>
        </Goods>
        <Goods to="/users/login">
          <Contents>
            <GoodsImg src={mockupimage} alt="" />
            <div>미피 저렴하게 드립니다</div>
            <span>50,000원</span>
            <span>미개봉 최상급</span>
          </Contents>
        </Goods>
      </Container>
    </div>
  );
};

export default List;
