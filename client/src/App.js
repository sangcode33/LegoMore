import "./App.css";
import styled from "styled-components";
import logo from "../src/images/logo.png";
import Header from "./components/Header";
import Nav from "./components/Nav";
import HeaderImage from "./pages/Main";
import Footer from "./components/Footer";
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
      <HeaderImage />
      <Footer />
    </div>
  );
}

export default App;
