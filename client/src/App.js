import "./App.css";
import styled from "styled-components";
import logo from "../src/images/logo.png";
import Header from "./components/Header";
import Nav from "./components/Nav";
import HeaderImage from "./pages/Main";
//import imgA from './images/testA.png';

const Logo = styled.img`
  //vertical-align: middle;
  //position: absolute;
  height: 90px;
  /* margin-right: 80px; */
  //float: right;
  display: block;
  margin: 0 auto;
`;

function App() {
  return (
    <div>
      <div>
        <Header />
        <Logo src={logo} alt="로고" />
        <Nav />
      </div>
      <HeaderImage></HeaderImage>
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
