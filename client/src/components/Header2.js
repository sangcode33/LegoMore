import styled from "styled-components";
import { Link } from "react-router-dom";
import Upload from "./Upload";
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
  height: 2.25rem;
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
  background-color: #e50100;
  display: flex;
  height: auto;
  padding: 30px;
`;

const Logo1 = styled.img`
  height: 75px;
  width: 200px;
  margin-left: 350px;
`;

export default function Header2(props) {
  console.log("headers2 : ", props);

  return (
    <div>
      <Headerpart>
        <Link to="/" style={{ margin: "0 auto" }}>
          <Logo1 src={logo} alt="logo" />
        </Link>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <GoodsList>상품리스트</GoodsList>
        </Link>
        <Link to="/users/mypage" style={{ textDecoration: "none" }}>
          <GoodsList>마이페이지</GoodsList>
        </Link>
        <Upload userId={props.userId} />
      </Headerpart>
    </div>
  );
}
