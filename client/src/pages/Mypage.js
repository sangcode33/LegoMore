import Goods from "../components/Goods";
import styled from "styled-components";
import mockupimage from "../mockup/1.png";

const GoodsImg = styled.img`
  height: 90px;
  //display: block;
  margin: 0 auto;
`;

export default function MyPage() {
  return (
    <div>
      <div>
        <span>정보수정</span>
        <input placeholder="email"></input>
        <div>
          <input placeholder="nickname"></input>
          <button>수정</button>
          <div>이미 사용중인 닉네임이 있습니다.</div>
        </div>

        <input placeholder="current password"></input>
        <div>
          <input placeholder="new password"></input>
          <button>수정</button>
        </div>
        <button>회원탈퇴</button>
      </div>

      <div>
        <span>내 찜목록</span>

        <div>
          <GoodsImg src={mockupimage} alt="" />
          {/* src를 props로 가져와야*/}
          <ul>
            <li>
              <span>상품</span>
              <span>레고 해리포터</span>
              {/* 상품이 뭔지 props로 받아서 가져와야한다 {props...}*/}
            </li>
            <li>
              <span>가격</span>
              <span>50,000</span>
              {/* 가격을 props로 받아서 가져와야한다 props... */}
            </li>
          </ul>
        </div>
      </div>

      <div>
        <span>내가 올린 물품</span>
        <Goods />
      </div>
    </div>
  );
}
