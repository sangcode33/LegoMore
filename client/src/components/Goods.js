import styled from "styled-components";
import mockupimage from "../mockup/1.png";
import Detail from "../pages/Detail";
import { Route, Link } from "react-router-dom";

const GoodsImg = styled.img`
  height: 90px;
  //display: block;
  margin: 0 auto;
`;

export default function Goods() {
  //props로 상품이미지, 상품이름, 상품가격 받기
  return (
    <div>
      <GoodsImg src={mockupimage} alt="" />
      {/* src를 props로 가져와야*/}
      <ul>
        <li>
          <span>상품</span>
          <span>레고 나홀로집에</span>
          {/* 상품이 뭔지 props로 받아서 가져와야한다 {props...}*/}
        </li>
        <li>
          <span>가격</span>
          <span>50,000</span>
          {/* 가격을 props로 받아서 가져와야한다 props... */}
        </li>
      </ul>
    </div>
  );
}
