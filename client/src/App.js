import "./App.css";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import logo from "../src/images/logo.png";
//import imgA from './images/testA.png';

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
//margin-left: 20px;;

const SearchButton = styled.button`
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
  margin-left: 10px;
`;

const Header = styled.header`
  margin: 20px;
  background: white;
  display: flex;
  justify-content: right;
  height: auto;
`;

const Nav = styled.div`
  background: white;
  display: flex;
  justify-content: right;
  height: auto;
  //float: right;
`;

const Logo = styled.img`
  //vertical-align: middle;
  //position: absolute;
  height: 50px;
  /* margin-right: 80px; */
  //float: right;
  display: block;
  margin: 0 auto;
`;

const SearchBar = styled.input`
  background: white;
  display: flex;
  justify-content: right;
  height: auto;
  //float: right;
`;

function App() {
  return (
    <div>
      <div>
        <Header>
          <GoodsList>goodslist</GoodsList>
          <GoodsList>Login</GoodsList>
          <GoodsList>Sign Up</GoodsList>
          <GoodsList>상품등록</GoodsList>
        </Header>

        <Nav>
          <Logo src={logo} alt="로고" />
          <SearchBar placeholder="검색" />
          <SearchButton>
            <BsSearch />
          </SearchButton>
        </Nav>
      </div>
      <footer>
        <div>
          <span>About Service</span>
          <span>LegoMore</span>
        </div>
        <div>
          <span>트위터로고넣기</span>
          <span>페이스북로고넣기</span>
          <span>구글로고넣기</span>
          <span>인스타로고넣기</span>
          <div>© Copyright 2021 Team Algoitsm All rights reserved</div>
        </div>
        <div>
          <span>About Us</span>
          <div>
            <span>권상현</span>
            <span>github로고넣기</span>
            <span>김경훈</span>
            <span>github로고넣기</span>
            <span>김장겸</span>
            <span>github로고넣기</span>
            <span>오예림</span>
            <span>github로고넣기</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
