import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import mockupimage from "../mockup/1.png";
import "./Mypage.css";
import Header2 from "../components/Header2";
import LogoImage from "../components/Logo";
import { useNavigate } from "react-router-dom";

const GoodsImg = styled.img`
  height: 90px;
  //display: block;
  margin: 0 auto;
`;

export default function MyPage({ userInfo, accessToken, handleLogout }) {
  // console.log("Mypage : ", userInfo.email);
  const [nickname, setNickname] = useState(userInfo.nickname);
  const [newPassword, setNewPassword] = useState("");
  const [likesList, setLikesList] = useState([]);

  const navigate = useNavigate();

  const handleInputValue = (key) => (e) => {
    setNickname({ ...nickname, [key]: e.target.value });
    setNewPassword({ ...newPassword, [key]: e.target.value });
    // console.log(nickname);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/likes/auth").then((res) => {
      console.log("Mypage : ", res);
    });
  }, []);

  const handleDelete = () => {
    // console.log("회원탈퇴버튼누름");
    axios
      .delete(`http://localhost:4000/users/${userInfo.id}`, {
        data: userInfo,
        withCredentials: true,
      })
      .then((res) => {
        // console.log("여기서는 페이지 이동시켜주기");
        alert("너는 더이상 회원이 아니얏!");
        navigate("/");
      });
  };

  const handleNicknameModify = () => {
    // console.log("닉네임수정 버튼");
    axios
      .put(`http://localhost:4000/users/${userInfo.id}`, {
        userInfo: userInfo,
        nickname: nickname,
        value: "nickname",
      })
      .then((res) => {
        // console.log("닉네임수정");
      });
  };

  const handlePasswordModify = () => {
    // console.log("패스워드수정 버튼");
    axios
      .put(`http://localhost:4000/users/${userInfo.id}`, {
        userInfo: userInfo,
        password: newPassword,
        value: "password",
      })
      .then((res) => {
        // console.log("비밀번호 수정");
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
              defaultValue={userInfo.nickname}
              onChange={handleInputValue("nickname")}
            ></input>
          </div>
          <span className="editbutton">
            <button onClick={handleNicknameModify}>수정</button>
          </span>
        </div>

        {/* 새 패스워드 */}
        <div className="editbutton">
          <div className="myinfo">
            <input
              type="password"
              placeholder="new password"
              onChange={handleInputValue("password")}
            ></input>
          </div>
          <button onClick={handlePasswordModify}>수정</button>
        </div>
        <button onClick={handleLogout}>로그아웃</button>
        <button onClick={handleDelete}>회원탈퇴</button>
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
