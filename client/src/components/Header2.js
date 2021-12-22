import styled from "styled-components";
import { Link } from "react-router-dom";
import Upload from "./Upload";

const GoodsList = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: white;
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
  margin: 20px;
  background: white;
  display: flex;
  justify-content: right;
  height: auto;
`;

<<<<<<< Updated upstream
export default function Header(props) {
  console.log("headers2 : ", props);
=======
export default function Header2(props) {
>>>>>>> Stashed changes
  return (
    <div>
      <Headerpart>
        <Link to="/goods/goods" style={{ textDecoration: "none" }}>
          <GoodsList>상품리스트</GoodsList>
        </Link>
        <GoodsList onClick={props.handleLogout}>로그아웃</GoodsList>
        <Link to="/users/mypage" style={{ textDecoration: "none" }}>
          <GoodsList>마이페이지</GoodsList>
        </Link>
        <Upload userId={props.userId} />
      </Headerpart>
    </div>
  );
}
