import styled from "styled-components";
import mockupimage from "../mockup/1.png";
import "./Mypage.css";
import Header2 from "../components/Header2";
import axios from "axios";
import LogoImage from "../components/Logo";

const GoodsImg = styled.img`
  height: 90px;
  //display: block;
  margin: 0 auto;
`;

export default function MyPage({ userInfo }) {
  console.log("Mypage : ", userInfo.email);

  const handleSignout = () => {
    console.log("회원탈퇴버튼누름");
    axios
      .delete(`http://localhost:4000/users/${userInfo.id}`, {
        data: userInfo,
        withCredentials: true,
      })
      .then((res) => {
        console.log("여기서는 페이지 이동시켜주기");
      });
  };
  return (
    //props로 가져오기. type적기
    <div>
      <Header2 />
      <LogoImage />
      <div className="bottomline mypage">
        <div className="myinfo-title">내 정보</div>

        {/* 이메일-읽기전용 */}
        <div className="myinfo">
          <input
            placeholder="email"
            type="email"
            readOnly
            value={userInfo.email}
          ></input>
        </div>

        {/* 닉네임 */}
        <div>
          <div className="myinfo">
            <input
              type="text"
              placeholder="nickname"
              value={userInfo.nickname}
            ></input>
          </div>
          <span className="editbutton">
            <button>수정</button>
          </span>
          <div>이미 사용중인 닉네임이 있습니다.</div>
        </div>

        {/* 현재패스워드 */}
        <div className="myinfo">
          <input
            type="password"
            placeholder="current password"
            value={userInfo.password}
          ></input>
        </div>

        {/* 새 패스워드 */}
        <div className="editbutton">
          <div className="myinfo">
            <input type="password" placeholder="new password"></input>
          </div>
          <button>수정</button>
        </div>

        <button onClick={handleSignout}>회원탈퇴</button>
      </div>

      <div className="bottomline">
        <div>내 찜목록</div>
        <div>
          {/* map함수써서 가져오기 */}
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

      <div className="bottomline">
        <div>내가 올린 물품</div>
        <div>
          {/* map함수써서 가져오기 */}
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
    </div>
  );
}
