import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const GoodsList = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-top:2rem;
  padding-left: 3rem;
  padding-right: 1rem;
  background-color: #e50100

  /* 크기 */
  height: 2rem;
  font-size: 1.25rem;

  /* 색상 */
  background: #e50100;
  &:hover {
    color: #ffcf00;
  }
  &:active {
    font: #1c7ed6;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const Headerpart = styled.header`
  display: flex;
  height: auto;
  background-color: #e50100;
  padding: 30px;
`;

const Logo1 = styled.img`
  height: 75px;
  width: 200px;
  margin-left: 350px;
`;

export default function Header1() {
  return (
    <div>
      <Headerpart>
        <Link to="/" style={{ margin: "0 auto" }}>
          <Logo1 src={logo} alt="logo" />
        </Link>
        <Link to="/users/login" style={{ textDecoration: "none" }}>
          <GoodsList>로그인</GoodsList>
        </Link>
        <Link to="/users/signup" style={{ textDecoration: "none" }}>
          <GoodsList>회원가입</GoodsList>
        </Link>
        <Link to="/users/login" style={{ textDecoration: "none" }}>
          <GoodsList>상품등록</GoodsList>
        </Link>
      </Headerpart>
    </div>
  );
}
